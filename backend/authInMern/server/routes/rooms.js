const router = require("express").Router();
const { Room, validate } = require("../models/room");

router.get("/rooms", async (req, res) => {
  try {
    const { error } = validate(req.query); // Use req.query to access query parameters

    if (error)
      return res.status(400).send({ message: "Error requesting rooms" });

    const rooms = await Room.find({});
    
    if (!rooms || rooms.length === 0)
      return res.status(404).send({ message: "No rooms found" });

    res.json(rooms);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
