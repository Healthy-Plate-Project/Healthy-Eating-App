const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    place_id: {
      type: String,
      trim: true,
      required: true,
    },
    user_id: {
      type: String,
      trim: true,
      required: true,
    },
    review_text: {
      type: String,
    },
    overall_rating: {
      type: Number,
    },
    dairy_free_rating: {
      type: Number,
    },
    gluten_free_rating: {
      type: Number,
    },
    nut_free_rating: {
      type: Number,
    },
    pescatarian_rating: {
      type: Number,
    },
    vegan_rating: {
      type: Number,
    },
    vegatarian_rating: {
      type: Number,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Review = model("Review", reviewSchema);

module.exports = Review;
