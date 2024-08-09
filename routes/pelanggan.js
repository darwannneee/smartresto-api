// routes/pelanggan.js
const express = require('express');
const router = express.Router();
const pelangganController = require('../controllers/pelangganController');

router.post('/', pelangganController.createPelanggan);
router.get('/get', pelangganController.getAllPelanggan);

module.exports = router;