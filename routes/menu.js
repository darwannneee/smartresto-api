const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController'); // Ensure this path is correct

router.get('/', menuController.getAllMenu);
router.get('/:kode_menu', menuController.getMenuById); // Route to get a single menu by ID
router.post('/create', menuController.createMenu);
router.put('/:kode_menu', menuController.updateMenu); // Route to update a menu by ID
router.delete('/:kode_menu', menuController.deleteMenu); // Route to delete a menu by ID

module.exports = router;
