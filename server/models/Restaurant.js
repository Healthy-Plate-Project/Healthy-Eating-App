const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
  {
    place_id: {
      type: String
    },
    restaurant_name: {
      type: String
    },
    longitude: {
      type: String
    },
    latitude: {
      type: String
    },
    photo_reference: {
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