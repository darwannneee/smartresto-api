const { DataTypes } = require('sequelize');
const sequelize = require('../db/db'); // Sesuaikan dengan konfigurasi Anda

const Menu = sequelize.define('Menu', {
    kode_menu: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_menu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deskripsi_menu: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    harga_menu: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    kategori_menu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status_menu: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Menu', // Nama tabel sesuai dengan yang ada di database
    timestamps: false // Jika tidak ada kolom createdAt dan updatedAt
});

module.exports = Menu;
