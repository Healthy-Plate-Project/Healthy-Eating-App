const Review = require('../models/Review');

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
      console.log(req.body)
      const data = await Review.findOneAndUpdate(req.params, req.body);
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteReview: async function (req, res) {
    try {
      console.log(req.body)
      const data = await Review.findOneAndDelete(req.params);
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getReview: async function (req, res) {
    try {
      console.log(req.body)
      const data = await Review.findOne(req.params);
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getReviewsByUser: async function (req, res) {
    try {
      console.log(req.body)
      const data = await Review.find({ user_id: req.params });
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getReviewsByRestaurant: async function (req, res) {
    try {
      console.log(req.body)
      const data = await Review.find({ place_id: req.params });
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
}

module.exports = reviewController;
