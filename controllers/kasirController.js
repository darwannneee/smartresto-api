const { Kasir } = require('../models/Kasir'); // Sesuaikan path sesuai dengan struktur folder Anda

// Get All Kasir
exports.getAllKasir = async (req, res) => {
    try {
        const kasirList = await Kasir.findAll();
        res.status(200).json(kasirList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create Kasir (opsional, jika diperlukan)
exports.createKasir = async (req, res) => {
    const { nama_kasir, jenis_kelamin, username, password, nomor_hp, email } = req.body;
    
    try {
        const kasir = await Kasir.create({ nama_kasir, jenis_kelamin, username, password, nomor_hp, email });
        res.status(201).json({ message: "Kasir created successfully", kasir });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Kasir
exports.updateKasir = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama_kasir, jenis_kelamin, username, password, nomor_hp, email } = req.body;

        const kasir = await Kasir.findByPk(id);
        if (!kasir) {
            return res.status(404).json({ error: "Kasir not found" });
        }

        await kasir.update({ nama_kasir, jenis_kelamin, username, password, nomor_hp, email });
        res.status(200).json({ message: "Kasir updated successfully", kasir });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Kasir
exports.deleteKasir = async (req, res) => {
    try {
        const { id } = req.params;

        const kasir = await Kasir.findByPk(id);
        if (!kasir) {
            return res.status(404).json({ error: "Kasir not found" });
        }

        await kasir.destroy();
        res.status(200).json({ message: "Kasir deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};