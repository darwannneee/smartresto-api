const { Pelayan } = require('../models/Model'); // Sesuaikan path sesuai dengan struktur folder Anda

exports.getAllPelayan = async (req, res) => {
    try {
        const pelayanList = await Pelayan.findAll();
        res.status(200).json(pelayanList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePelayan = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama_pelayan, jenis_kelamin, username, password, nomor_hp, email } = req.body;

        const pelayan = await Pelayan.findByPk(id);
        if (!pelayan) {
            return res.status(404).json({ error: "Pelayan not found" });
        }

        await pelayan.update({ nama_pelayan, jenis_kelamin, username, password, nomor_hp, email });
        res.status(200).json({ message: "Pelayan updated successfully", pelayan });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
