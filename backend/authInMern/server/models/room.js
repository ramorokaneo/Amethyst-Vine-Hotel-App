const mongoose = require("mongoose");
const Joi = require("joi");


const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  amenities: { type: String },
});

const Room = mongoose.model("Room", roomSchema);

const validateRoom = (room) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string(),
    amenities: Joi.string(),
  });

  return schema.validate(room);
}

module.exports = { Room, validateRoom };
