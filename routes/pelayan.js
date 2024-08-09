const express = require('express');
const router = express.Router();
const pelayanController = require('../controllers/pelayanController');

router.get('/pelayan', pelayanController.getAllPelayan);
router.put('/pelayan/:id', pelayanController.updatePelayan);

module.exports = router;
