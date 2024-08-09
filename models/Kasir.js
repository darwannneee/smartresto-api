// models/Kasir.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db'); // Sesuaikan dengan path ke konfigurasi database Anda

const Kasir = sequelize.define('Kasir', {
    id_kasir: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nama_kasir: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jenis_kelamin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nomor_hp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'Kasir',
    timestamps: false
  });
  
  module.exports = Kasir;