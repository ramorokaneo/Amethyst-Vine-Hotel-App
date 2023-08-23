const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const ReviewController = require('../controllers/reviewController');
const router = express.Router();

router.post('/', authMiddleware, ReviewController.createReview);
router.get('/', ReviewController.getReviews);

module.exports = router;
