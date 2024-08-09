// models/Pelayan.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db'); // Sesuaikan dengan path ke konfigurasi database Anda

const Pelayan = sequelize.define('Pelayan', {
    id_pelayan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nama_pelayan: {
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
    tableName: 'Pelayan',
    timestamps: false
  });
  
  module.exports = Pelayan;