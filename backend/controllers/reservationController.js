const Reservation = require('../models/Reservation');

exports.getReservations = async (req, res) => {
  try {
    const userId = req.userData.userId;
    const reservations = await Reservation.find({ userId });
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.createReservation = async (req, res) => {
  try {
    const {
      roomId,
      checkIn,
      checkOut,
      guests,
      userInfo,
      paymentInfo,
    } = req.body;

    const reservation = new Reservation({
      roomId,
      checkIn,
      checkOut,
      guests,
      ...userInfo,
      ...paymentInfo,
      userId: req.userData.userId,
    });

    await reservation.save();
    res.status(201).json({ message: 'Reservation created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
