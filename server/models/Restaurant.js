const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
  {
    place_id: {
      type: String
    },
    restaurantName: {
      type: String
    },
    longitude: {
      type: String
    },
    latitude: {
      type: String
    },
    photoReference: {
      type: String 
    },
    category: {
      type: String
    }
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