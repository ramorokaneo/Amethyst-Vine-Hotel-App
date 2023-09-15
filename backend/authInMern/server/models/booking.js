const mongoose = require('mongoose');

// Define the guest details schema
const guestDetailsSchema = new mongoose.Schema({
  title: String,
  fullName: String,
  email: String,
  phoneNumber: String,
  emergencyContactName: String,
  emergencyContactPhoneNumber: String,
  specialRequest: String,
});

// Define the selected room schema
const selectedRoomSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  image: String,
  amenities: [String],
});

// Define the reservation data schema
const reservationDataSchema = new mongoose.Schema({
  checkInDate: Date,
  checkOutDate: Date,
});

// Define the main booking schema
const bookingSchema = new mongoose.Schema({
  formData: {},
  selectedRoom: selectedRoomSchema,
  totalAmount: Number,
  guestDetails: guestDetailsSchema,
  reservationData: reservationDataSchema,
});

// Create the Booking model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
