const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  selectedRoom: String,
  selectedCheckInDate: Date,
  selectedCheckOutDate: Date,
  guestDetails: [
    { name: String, email: String }
  ],
  userInfo: {
    name: String,
    email: String,
    phoneNumber: String
  },
  paymentInfo: {
    cardNumber: String,
    expiry: String,
    cvv: String
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
