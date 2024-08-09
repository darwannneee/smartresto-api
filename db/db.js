require('dotenv').config(); // Import dotenv and configure it

const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');

// Use environment variables for database configuration
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectModule: mysql2,
    logging: false, // Set to true if you want to see SQL queries logged
});

module.exports = sequelize;