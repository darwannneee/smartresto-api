const { DataTypes } = require('sequelize');
const db = require('../db/db'); // Sesuaikan dengan path ke konfigurasi database Anda

const Meja = db.define('Meja', {
    nomor_meja: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status_meja: {
        type: DataTypes.ENUM('tersedia', 'tidak tersedia'), // Ubah menjadi ENUM
        allowNull: false
    },
    kapasitas: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Meja',
    timestamps: false
});

module.exports = Meja;
