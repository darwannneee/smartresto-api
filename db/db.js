const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');
require('dotenv').config(); // Import dotenv and configure it

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASS, {
    host: process.env.DB_HOSTNAME ,
    dialect: 'mysql',
    dialectModule: mysql2, // Needed to fix sequelize issues with WebPack
    define: {
        timestamps: false,
    },
    port: 3306 // Ensure port is set properly
});

// Test the connection
db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = db;
