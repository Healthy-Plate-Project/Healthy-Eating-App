const Review = require("../models/Review");
const User = require("../models/User");
const Restaurant = require("../models/Restaurant");

const reviewController = {
  getReview: async function (req, res) {
    try {
      const review = await Review.findOne({
        _id: req.params.reviewId,
      });
      review
        ? res.status(200).json({ data: review })
        : res.status(404).json({
            message: `Review ID# ${req.params.reviewId} Not Found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  postReview: async function (req, res) {
    try {
      const userID = req.body.review.user_id;
      const user = await User.findOne({ _id: userID });
      if (!user) return res.status(404).send({ message: "User not found" });
      const restaurantData = req.body.restaurant;
      let restaurant = await Restaurant.findOne({
        place_id: restaurantData.place_id,
      });
      if (!restaurant) {
        restaurant = await Restaurant.create(restaurantData);
      }
      const reviewData = req.body.review;
      const review = await Review.findOne({
        user_id: userID,
        place_id: restaurantData.place_id,
      });
      if (review) {
        const test = await Review.findOneAndUpdate(
          { _id: review._id },
          reviewData
        );
        console.log(test);
        return res.status(200).json({
          message: `Review ID# ${review._id} updated!`,
        });
      }
      const newReview = await Review.create(reviewData);
      if (newReview) {
        res.status(200).json({ message: `Review created!` });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteReview: async function (req, res) {
    try {
      const review = await Review.findOne({ _id: req.body._id });
      if (!review) {
        return res.status(404).json({
          message: `Review ID# ${req.body._id} Not Found!`,
        });
      }
      await Review.findOneAndDelete({ _id: req.body._id });
      res.status(200).json({
        message: `Review ID# ${req.body._id} Deleted!`,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getReviewsByUser: async function (req, res) {
    try {
      const user = await User.findOne({ _id: req.body.user_id });
      if (!user) return res.status(404).send({ message: "User not found" });
      const reviews = await Review.find({ user_id: user._id });
      if (!reviews) {
        return res.status(404).send({
          message: `No reviews found for user_id: ${req.body.user_id}`,
        });
      }
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getReviewsByRestaurant: async function (req, res) {
    try {
      const restaurant = await Restaurant.findOne({
        place_id: req.body.place_id,
      });
      if (!restaurant)
        return res.status(404).send({ message: "Restaurant not found" });
      const reviews = await Review.find({ place_id: req.body.place_id });
      if (!reviews) {
        return res.status(404).send({
          message: `No reviews found for place_id: ${req.body.place_id}`,
        });
      }
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = reviewController;
