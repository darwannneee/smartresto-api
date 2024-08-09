const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Pesanan = db.define('Pesanan', {
  kode_pesanan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nomor_meja: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_pelanggan: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  kode_menu: {
    type: DataTypes.STRING,
    allowNull: false
  },
  total_harga: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status_pesanan: {
    type: DataTypes.ENUM,
    values: ['perlu dimasak', 'bahan habis', 'sedang dimasak', 'perlu diantar','bayar', 'selesai'],
    allowNull: false
  },
  tanggal_pesanan: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  id_kasir: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true // Prevent Sequelize from pluralizing table name
});

module.exports = Pesanan;
