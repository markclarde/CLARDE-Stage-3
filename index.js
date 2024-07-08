const express = require('express');
const app = express();
const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '022803',
    database: 'sysdev_recruitment'
});

// GET ALL programming_languages
app.get('/programming_languages', (req, res) => {
    connection.connect();

    connection.query('SELECT * FROM programming_languages', (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(results);
        }
    });

    connection.end();
});

// DB CONNECTION
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
