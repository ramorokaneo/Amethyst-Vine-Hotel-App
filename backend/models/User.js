const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  surname: { type: String, required: true },
  name: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  gender: { type: String, required: true },
  phoneNumber: { type: String, required: true }, 
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
