const express = require('express');
const router = express.Router();
const mejaController = require('../controllers/menuController');

router.get('/', mejaController.getAllMenu);
router.post('/create', mejaController.createMenu);
router

module.exports = router;
