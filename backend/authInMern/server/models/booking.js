const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
  selectedRoom: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  guestDetails: {
    title: String,
    fullName: String,
    email: String,
    phoneNumber: String,
    emergencyContactName: String,
    emergencyContactPhoneNumber: String,
    specialRequest: String,
  },

});