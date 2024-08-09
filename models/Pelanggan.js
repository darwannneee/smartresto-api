const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Pelanggan = db.define('Pelanggan', {
  id_pelanggan: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nama_pelanggan: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  nomor_meja: { type: DataTypes.INTEGER, allowNull: false },
  nomor_hp: { type: DataTypes.STRING, allowNull: false },
}, {
  freezeTableName: true // Prevent Sequelize from pluralizing table name
});

module.exports = Pelanggan;