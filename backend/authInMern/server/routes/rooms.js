const router = require("express").Router();
const { Room, validate } = require("../models/room");

router.get("/rooms", async (req, res) => {
  try {
    // You should validate the request query parameters, not the query itself.
    const { error } = validate(req.query);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    // To retrieve all rooms, you don't need to pass an empty object to `Room.find()`.
    const rooms = await Room.find();

    if (!rooms || rooms.length === 0) {
      return res.status(404).send({ message: "No rooms found" });
    }

    res.json(rooms);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
