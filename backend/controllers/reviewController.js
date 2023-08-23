const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  try {
    const { rating, reviewText } = req.body;
    const userId = req.userData.userId;

    const review = new Review({
      userId,
      rating,
      reviewText,
    });

    await review.save();
    res.status(201).json({ message: 'Review created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
