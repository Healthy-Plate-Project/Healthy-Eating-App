const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    place_id: {
      type: String,
      required: true,
    },
    star_ratings: {
      type: [
        {
          name: {
            type: String,
          },
          star_rating: {
            type: Number,
          },
        },
      ],
    },
    question_star_ratings: {
      type: [
        {
          question: {
            type: String,
          },
          star_rating: {
            type: Number,
          },
        },
      ],
    },
    tone: {
      type: String,
    },
    review_text: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Review = model("Review", reviewSchema);

module.exports = Review;
