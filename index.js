const express = require('express');
const cors = require('cors');
const mejaRoutes = require('./routes/meja');
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const employeeRoutes = require('./routes/employee');
const pelangganRoutes = require('./routes/pelanggan');
const pesananRoutes = require('./routes/Pesanan');
const pelayanRoutes = require('./routes/pelayan'); // Sesuaikan path sesuai dengan struktur folder Anda
const kokiRoutes = require('./routes/koki'); // Sesuaikan path sesuai dengan struktur folder Anda
const kasirRoutes = require('./routes/kasir'); // Sesuaikan path sesuai dengan struktur folder Anda
const managerRoutes = require('./routes/manager');

const app = express();
app.use(cors());
app.use(express.json()); // Gunakan express.json() untuk parsing JSON

app.use('/api/meja', mejaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/employee', employeeRoutes);
app.use('/api/pelanggan', pelangganRoutes);
app.use('/api/pesanan', pesananRoutes);
app.use('/api/manager', managerRoutes);
app.use('/api', pelayanRoutes);
app.use('/api', kokiRoutes);
app.use('/api', kasirRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
