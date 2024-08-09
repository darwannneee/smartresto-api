const Menu = require('../models/Menu'); // Pastikan path ke model benar

// Get All Menu
exports.getAllMenu = async (req, res) => {
    try {
        const menus = await Menu.findAll(); // Mengambil semua data dari tabel Menu
        res.json(menus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Menu by ID
exports.getMenuById = async (req, res) => {
    try {
        const menu = await Menu.findByPk(req.params.kode_menu); // Mengambil data berdasarkan primary key
        if (!menu) return res.status(404).json({ error: "Menu not found" });
        res.json(menu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create Menu
exports.createMenu = async (req, res) => {
    try {
        const { nama_menu, deskripsi_menu, harga_menu, kategori_menu, status_menu } = req.body;
        const newMenu = await Menu.create({
            nama_menu,
            deskripsi_menu,
            harga_menu,
            kategori_menu,
            status_menu
        });
        res.status(201).json({ message: "Menu created successfully", data: newMenu });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Menu
exports.updateMenu = async (req, res) => {
    try {
        const { nama_menu, deskripsi_menu, harga_menu, kategori_menu, status_menu } = req.body;
        const menu = await Menu.findByPk(req.params.kode_menu);
        if (!menu) return res.status(404).json({ error: "Menu not found" });

        await menu.update({
            nama_menu,
            deskripsi_menu,
            harga_menu,
            kategori_menu,
            status_menu
        });

        res.json({ message: "Menu updated successfully", data: menu });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Menu
exports.deleteMenu = async (req, res) => {
    try {
        const menu = await Menu.findByPk(req.params.kode_menu);
        if (!menu) return res.status(404).json({ error: "Menu not found" });

        await menu.destroy();
        res.json({ message: "Menu deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
