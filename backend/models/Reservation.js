const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  selectedRoom: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
  selectedDates: [Date],
  guestCount: Number,
  userInfo: {
    name: String,
    contact: String,
  },
  paymentInfo: {
    cardNumber: String,
    expiry: String,
    cvv: String,
  },
  createdAt: { type: Date, default: Date.now },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
