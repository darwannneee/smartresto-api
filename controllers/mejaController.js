const { Meja } = require('../models/Model'); // Adjust the path to your models as necessary

exports.getAllMeja = async (req, res) => {
    try {
        const mejaList = await Meja.findAll();
        res.json(mejaList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMejaById = async (req, res) => {
    try {
        const meja = await Meja.findOne({ where: { nomor_meja: req.params.nomor_meja } });
        if (!meja) return res.status(404).json({ error: "Meja not found" });
        res.json(meja);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createMeja = async (req, res) => {
    try {
        const { nomor_meja, status_meja, kapasitas } = req.body;
        const meja = await Meja.create({
            nomor_meja,
            status_meja,
            kapasitas
        });
        res.status(201).json({ message: "Meja created successfully", meja });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateMeja = async (req, res) => {
    try {
        const { nomer_meja, status_meja } = req.body;
        const [updated] = await Meja.update({ status_meja }, {
            where: { nomor_meja: req.params.nomor_meja }
        });
        if (updated) {
            const updatedMeja = await Meja.findOne({ where: { nomor_meja: req.params.nomor_meja } });
            return res.json({ message: "Meja updated successfully", meja: updatedMeja });
        }
        throw new Error('Meja not found');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteMeja = async (req, res) => {
    try {
        const deleted = await Meja.destroy({
            where: { nomor_meja: req.params.nomor_meja }
        });
        if (deleted) {
            return res.json({ message: "Meja deleted successfully" });
        }
        throw new Error('Meja not found');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
