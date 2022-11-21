const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
  {
    place_id: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    restaurant_name: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    photo_reference: {
      type: String,
      trim: true,
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

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
