const router = require("express").Router();
const { Room, validateRoom } = require("../models/room");

router.get("/rooms", async (req, res) => {
  try {
    const { error } = validateRoom(req.query);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const rooms = await Room.find();

    if (!rooms || rooms.length === 0) {
      return res.status(404).send({ message: "No rooms found" });
    }

    res.json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});



module.exports = router;
