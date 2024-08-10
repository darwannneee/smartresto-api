const Pelanggan = require('../models/Pelanggan'); // Corrected import

// Get All Pelanggan
exports.getAllPelanggan = async (req, res) => {
    try {
        const pelanggan = await Pelanggan.findAll();
        console.log('All customers retrieved:', pelanggan);
        res.status(200).json(pelanggan);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.createPelanggan = async (req, res) => {
    const { nama_pelanggan, email, nomor_meja, nomor_hp } = req.body;
    console.log(req.body);

    if (!nama_pelanggan || !email || !nomor_meja || !nomor_hp) {
        return res.status(400).send({ error: 'All fields are required' });
    }

    try {
        let pelanggan = await Pelanggan.findOne({ where: { email } });

        if (pelanggan) {
            console.log('Pelanggan sudah ada, mengembalikan ID yang ada');
        } else {
            pelanggan = await Pelanggan.create({ nama_pelanggan, email, nomor_meja, nomor_hp });
            console.log('Pelanggan baru berhasil dibuat');
        }

        res.status(201).json({ id_pelanggan: pelanggan.id_pelanggan });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: error.message });
    }
};

// Update Pelanggan
exports.updatePelanggan = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama_pelanggan, email, nomor_meja, nomor_hp } = req.body;

        const pelanggan = await Pelanggan.findByPk(id);
        if (!pelanggan) {
            return res.status(404).json({ error: "Pelanggan not found" });
        }

        await pelanggan.update({ nama_pelanggan, email, nomor_meja, nomor_hp });
        res.status(200).json({ message: "Pelanggan updated successfully", pelanggan });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Pelanggan
exports.deletePelanggan = async (req, res) => {
    try {
        const { id } = req.params;

        const pelanggan = await Pelanggan.findByPk(id);
        if (!pelanggan) {
            return res.status(404).json({ error: "Pelanggan not found" });
        }

        await pelanggan.destroy();
        res.status(200).json({ message: "Pelanggan deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
