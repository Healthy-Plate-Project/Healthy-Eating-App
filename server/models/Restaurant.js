const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    place_id: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    formatted_address: {
      type: String,
    },
    formatted_phone_number: {
      type: String,
    },
    geometry: {
      location: {
        lat: {
          type: Number,
        },
        lng: {
          type: Number,
        },
      },
    },
    opening_hours: {
      open_now: {
        type: Boolean,
      },
      weekday_text: [String]
    },
    photos: [
      {
        photo_reference: {
          type: String,
        },
        height: {
          type: Number,
        },
        html_attributions: [String],
        width: {
          type: Number,
        },
      }
    ],
    price_level: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    types: [String],
    url: {
      type: String,
    },
    user_ratings_total: {
      type: Number,
    },
    vicinity: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
