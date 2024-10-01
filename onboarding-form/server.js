const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS
const fs = require('fs');
const path = require('path');
const qrcode = require('qrcode'); // Import QR code package

const app = express();
app.use(bodyParser.json());

// Enable CORS
app.use(cors()); // This will allow all cross-origin requests

// Ensure the "databases" folder exists to store the SQLite databases
const DB_FOLDER = path.join(__dirname, 'databases');
if (!fs.existsSync(DB_FOLDER)) {
  fs.mkdirSync(DB_FOLDER);
}

// Path to the Master Clients database
const MASTER_DB_PATH = path.join(DB_FOLDER, 'MasterClients.db');

// Function to create the Master Clients database if it doesn't exist
const initializeMasterDB = () => {
  const masterDb = new sqlite3.Database(MASTER_DB_PATH);

  // Create the company_info table if it doesn't exist
  masterDb.run(`
    CREATE TABLE IF NOT EXISTS company_info (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      company TEXT UNIQUE,  -- Ensures that company names are unique
      users INTEGER,
      membership TEXT
    );
  `);
  masterDb.close();
};

// Call the function to initialize Master Clients DB if not already created
initializeMasterDB();

// API to handle onboarding and database creation
app.post('/api/onboard', (req, res) => {
  const { name, email, company, users, membership } = req.body;

  // Path for the company-specific SQLite database
  const companyDbPath = path.join(DB_FOLDER, `${company}.db`);

  // Open the Master Clients database to insert the company data
  const masterDb = new sqlite3.Database(MASTER_DB_PATH);

  // Insert the data into the Master Clients database first
  masterDb.run(
    `
      INSERT INTO company_info (name, email, company, users, membership)
      VALUES (?, ?, ?, ?, ?);
    `,
    [name, email, company, users, membership],
    function (err) {
      if (err) {
        // If the company already exists in Master DB, return an error
        if (err.code === 'SQLITE_CONSTRAINT') {
          return res.status(400).json({ success: false, message: 'Company already exists in Master Clients database' });
        }
        return res.status(500).json({ success: false, message: 'Error inserting into Master Clients database' });
      }

      // After inserting into the Master database, create a company-specific database
      if (!fs.existsSync(companyDbPath)) {
        // Create a new SQLite database for the company
        const companyDb = new sqlite3.Database(companyDbPath, (err) => {
          if (err) {
            return res.status(500).json({ success: false, message: 'Error creating company-specific database' });
          }

          // Create the company_info table in the company-specific database
          companyDb.serialize(() => {
            companyDb.run(`
              CREATE TABLE IF NOT EXISTS company_info (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                email TEXT,
                company TEXT,
                users INTEGER,
                membership TEXT
              );
            `);

            // Insert the same data into the company-specific database
            const stmt = companyDb.prepare(`
              INSERT INTO company_info (name, email, company, users, membership)
              VALUES (?, ?, ?, ?, ?);
            `);
            stmt.run(name, email, company, users, membership, (err) => {
              if (err) {
                return res.status(500).json({ success: false, message: 'Error inserting into company-specific database' });
              }
              stmt.finalize();
              res.json({ success: true, message: 'Onboarding completed successfully' });
            });
          });
        });
      } else {
        // If the company database already exists, return an error
        res.status(400).json({ success: false, message: 'Company-specific database already exists' });
      }
    }
  );
});
app.get('/api/companies', (req, res) => {
  const masterDb = new sqlite3.Database(MASTER_DB_PATH);

  masterDb.all('SELECT company as id, company as name FROM company_info', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error fetching data from Master Clients database' });
    }

    res.json({ success: true, data: rows });
  });
});

app.get('/api/clients', (req, res) => {
  const masterDb = new sqlite3.Database(MASTER_DB_PATH);

  masterDb.all('SELECT company, membership FROM company_info', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error fetching data from Master Clients database' });
    }

    res.json({ success: true, data: rows });
  });
});

// API to fetch data from Master Clients database
app.get('/api/fetchMasterData', (req, res) => {
  const masterDb = new sqlite3.Database(MASTER_DB_PATH);

  masterDb.all('SELECT * FROM company_info', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error fetching data from Master Clients database' });
    }

    res.json({ success: true, data: rows });
  });
});

// API to fetch data from the company-specific database
app.post('/api/fetchData', (req, res) => {
  const { company } = req.body;
  const companyDbPath = path.join(DB_FOLDER, `${company}.db`);

  // Check if the company database exists
  if (!fs.existsSync(companyDbPath)) {
    return res.status(404).json({ success: false, message: 'Company database not found' });
  }

  // Connect to the company's SQLite database and retrieve the data
  const db = new sqlite3.Database(companyDbPath);

  db.all('SELECT * FROM company_info', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error fetching data' });
    }

    res.json({ success: true, data: rows });
  });
});

// API to generate QR codes
app.post('/api/generate-qrcode', (req, res) => {
  const { text } = req.body;

  qrcode.toDataURL(text, (err, url) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error generating QR code' });
    }

    res.json({ success: true, qrcode: url });
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
