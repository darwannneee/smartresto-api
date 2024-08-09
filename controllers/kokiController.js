const { Koki } = require('../models/Model'); // Sesuaikan path sesuai dengan struktur folder Anda

// Get All Koki
exports.getAllKoki = async (req, res) => {
    try {
        const kokiList = await Koki.findAll();
        res.status(200).json(kokiList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create Koki (opsional, jika diperlukan)
exports.createKoki = async (req, res) => {
    const { nama_koki, jenis_kelamin, username, password, nomor_hp, email } = req.body;

    try {
        const koki = await Koki.create({ nama_koki, jenis_kelamin, username, password, nomor_hp, email });
        res.status(201).json({ message: "Koki created successfully", koki });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Koki
exports.updateKoki = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama_koki, jenis_kelamin, username, password, nomor_hp, email } = req.body;

        const koki = await Koki.findByPk(id);
        if (!koki) {
            return res.status(404).json({ error: "Koki not found" });
        }

        await koki.update({ nama_koki, jenis_kelamin, username, password, nomor_hp, email });
        res.status(200).json({ message: "Koki updated successfully", koki });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Koki
exports.deleteKoki = async (req, res) => {
    try {
        const { id } = req.params;

        const koki = await Koki.findByPk(id);
        if (!koki) {
            return res.status(404).json({ error: "Koki not found" });
        }

        await koki.destroy();
        res.status(200).json({ message: "Koki deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};