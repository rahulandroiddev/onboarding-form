const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Onboarding API
app.post('/api/onboard', (req, res) => {
  const { name, email, company, users, membership } = req.body;

  // Create a new database for the company
  const dbPath = path.join(__dirname, `${company}.db`);

  if (fs.existsSync(dbPath)) {
    return res.status(400).json({ success: false, message: 'Company database already exists' });
  }

  // Create a new SQLite database for the company
  const companyDb = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error creating database' });
    }

    // Create tables and insert data
    companyDb.serialize(() => {
      companyDb.run(`
        CREATE TABLE company_info (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          email TEXT,
          company_name TEXT,
          users INTEGER,
          membership_plan TEXT
        );
      `);

      // Insert collected data into the new company-specific database
      const stmt = companyDb.prepare(`
        INSERT INTO company_info (name, email, company_name, users, membership_plan)
        VALUES (?, ?, ?, ?, ?);
      `);

      stmt.run(name, email, company, users, membership, (err) => {
        if (err) {
          return res.status(500).json({ success: false, message: 'Error inserting data' });
        }
        stmt.finalize();
        res.json({ success: true, message: 'Onboarded successfully' });
      });
    });
  });
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
