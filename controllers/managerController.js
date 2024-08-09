const { Manager } = require('../models/Model'); // Adjust the path to your models as necessary

exports.getAllManager = async (req, res) => {
    try {
        const pelayanList = await Manager.findAll();
        res.status(200).json(pelayanList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};