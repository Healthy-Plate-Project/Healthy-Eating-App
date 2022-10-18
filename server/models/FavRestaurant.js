const { Schema, model } = require("mongoose");

const favRestaurantSchema = new Schema(
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
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
)

const FavRestaurant = model("FavRestaurant", favRestaurantSchema)

module.exports = FavRestaurant