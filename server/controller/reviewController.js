const Review = require("../models/Review");

const reviewController = {
  createReview: async function (req, res) {
    try {
      const data = await Review.create(req.body);
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateReview: async function (req, res) {
    try {
      const data = await Review.findOneAndUpdate(
        { _id: req.params.reviewId },
        req.body,
        { returnOriginal: false }
      );
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteReview: async function (req, res) {
    try {
      const data = await Review.findOneAndDelete({ _id: req.params.reviewId });
      res.json({
        message: `Review ID# ${data._id} Deleted!`,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getReview: async function (req, res) {
    try {
      const data = await Review.findOne({ _id: req.params.reviewId });
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getReviewsByUser: async function (req, res) {
    try {
      const data = await Review.find({ user_id: req.params.userId });
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getReviewsByRestaurant: async function (req, res) {
    try {
      const data = await Review.find({ place_id: req.params.placeId });
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = reviewController;
