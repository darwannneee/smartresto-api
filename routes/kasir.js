const express = require('express');
const router = express.Router();
const kasirController = require('../controllers/kasirController');

router.get('/kasir', kasirController.getAllKasir);
router.put('/kasir/:id', kasirController.updateKasir);
router.delete('/kasir/:id', kasirController.deleteKasir);


module.exports = router;
