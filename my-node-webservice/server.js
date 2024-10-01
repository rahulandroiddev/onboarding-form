const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample route
app.get('/api', (req, res) => {
    res.send('Hello from Node.js web service!');
});

// New route for cities
app.get('/api/cities', (req, res) => {
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('c:\\rahul\\database1.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: err.message });
            return;
        }
    });

    db.all("SELECT name FROM cities", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        // Original response format
        res.json( rows); // This will return an array of city objects
    });
});

// Route to populate cities table with 50 cities
app.post('/api/populate-cities', (req, res) => {
    const cities = [
        'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
        'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
        'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte',
        'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Washington',
        'Boston', 'El Paso', 'Nashville', 'Detroit', 'Oklahoma City',
        'Portland', 'Las Vegas', 'Louisville', 'Baltimore', 'Milwaukee',
        'Albuquerque', 'Tucson', 'Fresno', 'Sacramento', 'Long Beach',
        'Kansas City', 'Mesa', 'Virginia Beach', 'Atlanta', 'Colorado Springs',
        'Omaha', 'Raleigh', 'Miami', 'Cleveland', 'Tulsa',
        'Oakland', 'Minneapolis', 'Wichita', 'New Orleans', 'Arlington'
    ];
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('c:\\rahul\\database1.db',sqlite3.OPEN_READWRITE); // Connect to SQLite database

    db.serialize(() => {
        // Clear existing cities
        db.run('DELETE FROM cities');

        // Insert new cities
        const stmt = db.prepare('INSERT INTO cities (name) VALUES (?)');
        cities.forEach(city => {
            stmt.run(city);
        });
        stmt.finalize();
       // db.run('COMMIT');
        res.json({ message: 'Cities table populated with 50 cities.' });
    });

    db.close();

});

// Close the database connection when the server stops
process.on('SIGINT', () => {
    db.close();
    process.exit();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});