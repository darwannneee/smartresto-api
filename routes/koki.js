const express = require('express');
const router = express.Router();
const kokiController = require('../controllers/kokiController');

router.get('/koki', kokiController.getAllKoki);
router.put('/koki/:id', kokiController.updateKoki);
router.delete('/koki/:id', kokiController.deleteKoki);


module.exports = router;
