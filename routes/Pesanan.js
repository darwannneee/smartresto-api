// routes/pesanan.js
const express = require('express');
const router = express.Router();
const pesananController = require('../controllers/pesananController');

router.post('/', pesananController.createPesanan);
router.get('/get', pesananController.getAllPesanan);
router.post('/ubah', pesananController.ubahPesanan);

module.exports = router;