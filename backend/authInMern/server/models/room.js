const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  amenities: { type: String},
});

const Room = mongoose.model("Room", roomSchema);
module.exports = { Room, validate };
