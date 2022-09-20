const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
  {
    place_id: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    restaurantName: {
      type: String
    },
    longitude: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    photoReference: {
      type: String 
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
)

const Restaurant = model("Restaurant", restaurantSchema)

module.exports = Restaurant