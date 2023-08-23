const express = require('express');
const ReservationController = require('../controllers/reservationController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, ReservationController.getReservations);
router.post('/', authMiddleware, ReservationController.createReservation);

module.exports = router;

