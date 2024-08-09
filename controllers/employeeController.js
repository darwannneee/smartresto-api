const bcrypt = require('bcrypt');
const { Pelayan, Koki, Kasir, Manager } = require('../models/Model'); // Sesuaikan dengan path model Anda

exports.addEmployee = async (req, res) => {
  const { id_karyawan, nama, jenis_kelamin, username, password, nomor_hp, email, jabatan } = req.body;

  let Model;
  let idField;
  let namaField;
  
  switch (jabatan.toLowerCase()) {
    case 'pelayan':
      Model = Pelayan;
      idField = 'id_pelayan';
      namaField = 'nama_pelayan';
      break;
    case 'koki':
      Model = Koki;
      idField = 'id_koki';
      namaField = 'nama_koki';
      break;
    case 'kasir':
      Model = Kasir;
      idField = 'id_kasir';
      namaField = 'nama_kasir';
      break;
    case 'manager':
      Model = Manager;
      idField = 'id_manager';
      namaField = 'nama_manager';
      break;
    default:
      return res.status(400).json({ message: 'Jabatan tidak valid' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmployeeData = {
      [idField]: id_karyawan,
      [namaField]: nama,
      jenis_kelamin,
      username,
      password: hashedPassword,
      nomor_hp,
      email,
    };

    const newEmployee = await Model.create(newEmployeeData);

    res.status(201).json({ message: 'Employee added successfully', data: newEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add employee', error });
  }
};
