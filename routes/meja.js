const express = require('express');
const router = express.Router();
const mejaController = require('../controllers/mejaController');

router.get('/', mejaController.getAllMeja);
router.get('/:nomor_meja', mejaController.getMejaById);
router.post('/', mejaController.createMeja);
router.put('/:nomor_meja', mejaController.updateMeja);
router.delete('/:nomor_meja', mejaController.deleteMeja);

module.exports = router;
