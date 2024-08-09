const db = require('../db/db'); // Import your Sequelize instance
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Pelayan, Koki, Kasir, Manager } = require('../models/Model'); // Sesuaikan dengan path model Anda


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check in all user tables
    let user;
    let userType;

    // Check if user is a Kasir
    user = await Kasir.findOne({ where: { email } });
    if (user) {
      userType = 'kasir';
    } else {
      // Check if user is a Pelayan
      user = await Pelayan.findOne({ where: { email } });
      if (user) {
        userType = 'pelayan';
      } else {
        // Check if user is a Koki
        user = await Koki.findOne({ where: { email } });
        if (user) {
          userType = 'koki';
        } else {
          // Check if user is a Manager
          user = await Manager.findOne({ where: { email } });
          if (user) {
            userType = 'manager';
          }
        }
      }
    }

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, userType },
      'your_jwt_secret', // Use a proper secret key
      { expiresIn: '1h' }
    );

    res.json({ message: "Login successful", token, userType });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
