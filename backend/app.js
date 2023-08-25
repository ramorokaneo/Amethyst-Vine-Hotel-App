const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Admin = require('./models/Admin');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/amethystvinehotel", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);
});


app.post('/api/register', async (req, res) => {
  try {
    const {
      surname,
      name,
      dateOfBirth,
      gender,
      phoneNumber,
      username,
      email,
      password,
    } = req.body;

    // Check if the username or email is already taken
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already taken' });
    }

    // Create a new user
    const newUser = new User({
      surname,
      name,
      dateOfBirth,
      gender,
      phoneNumber,
      username,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: 'Registration successful' }); // Proper response structure
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration error' }); // Proper response structure for error
  }
});

app.post('/api/register-as-admin', async (req, res) => {
  try {
    const {
      fullName,
      employeeNumber,
      email,
      phoneNumber,  // Corrected property name
      password,
    } = req.body;

    const existingAdmin = await Admin.findOne({
      $or: [{ employeeNumber }, { email }],
    });

    if (existingAdmin) {
      return res.status(400).json({ message: 'Employee number or email already taken' });
    }

    const newAdmin = new Admin({
      fullName,
      employeeNumber,
      email,
      phoneNumber,
      password,
    });

    await newAdmin.save();  

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration error' });
  }
});


app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login error' });
  }
});


app.post('/api/login-as-admin', async (req, res) => {
  try {
    const { employeeNumber, password } = req.body;

    // Find the user based on the provided email
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Check if the provided password matches the user's password
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    res.status(200).json({ message: 'Login successful', token: 'fake-token' }); // Provide a valid token here
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
