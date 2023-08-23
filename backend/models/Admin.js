const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  employeeNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true }, // Change the type to String
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const AdminModel = mongoose.model('Admin', adminSchema);

module.exports = AdminModel;
