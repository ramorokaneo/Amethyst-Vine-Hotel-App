const express = require('express');
const { authorizeAdmin } = require('./middlewares'); 

const router = express.Router();

router.get('/admin-dashboard', authorizeAdmin, (req, res) => {

  res.json({ message: 'Welcome to the admin dashboard' });
});

module.exports = router;

