const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    place_id: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    vicinity: {
      type: String,
      trim: true,
    },
    price_level: {
      type: Number,
    },
    lat: {
      type: Number,
      trim: true,
    },
    lng: {
      type: Number,
      trim: true,
    },
    photo_reference: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
    },
    types: {
      type: [String],
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
