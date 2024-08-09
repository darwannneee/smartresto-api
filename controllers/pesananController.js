const { Pesanan, Meja } = require('../models/Model'); // Adjust the path to your models as necessary

exports.createPesanan = async (req, res) => {
    try {
        const { nomor_meja, id_pelanggan, kode_menu, total_harga, tanggal_pesanan, id_kasir } = req.body;

        // Konversi array kode_menu menjadi string yang dipisahkan koma
        const kodeMenuString = kode_menu.join(',');
        const status_pesanan = "perlu dimasak"
        // Buat entri baru di tabel Pesanan
        const newPesanan = await Pesanan.create({
            nomor_meja,
            id_pelanggan,
            kode_menu: kodeMenuString, // Simpan sebagai string
            total_harga,
            status_pesanan,
            tanggal_pesanan,
            id_kasir
        });

        res.status(201).json(newPesanan);
    } catch (error) {
        console.error('Error creating the order:', error);
        res.status(500).json({ error: 'An error occurred while creating the order.' });
    }
};

exports.getAllPesanan = async (req, res) => {
    try {
        const pesananList = await Pesanan.findAll();
        res.status(200).json(pesananList);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.ubahPesanan = async (req, res) => {
    const { kode_pesanan, status_pesanan } = req.body;

    // Validate the incoming data
    if (!kode_pesanan || !status_pesanan) {
        return res.status(400).send({ error: 'Both kode_pesanan and status_pesanan are required' });
    }

    try {
        const pesanan = await Pesanan.findOne({ where: { kode_pesanan } });

        if (!pesanan) {
            return res.status(404).send({ error: 'Pesanan not found' });
        }

        // Update the pesanan status
        pesanan.status_pesanan = status_pesanan;
        await pesanan.save();

        // Update the meja status if the pesanan is completed
        if (status_pesanan === 'selesai') {
            const meja = await Meja.findOne({ where: { nomor_meja: pesanan.nomor_meja } });
            if (meja) {
                meja.status_meja = 'tersedia';
                await meja.save();
            }
        }

        res.status(200).json({ message: 'Pesanan updated successfully', data: pesanan });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: error.message });
    }
};