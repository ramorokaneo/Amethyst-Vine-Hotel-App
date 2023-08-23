const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Store booking data
router.post('/bookings', async (req, res) => {
  try {
    const bookingData = req.body;
    const newBooking = await Booking.create(bookingData);
    res.status(201).json(newBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating booking' });
  }
});

// Retrieve booking data
router.get('/bookings/:bookingId', async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving booking' });
  }
});

module.exports = router;
