const { Schema, model } = require("mongoose");

//user schema
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  first_name: {
    type: String,
    trim: true,
    required: true,
  },
  last_name: {
    type: String,
    trim: true,
    required: true,
  },
  fav_restaurants: {
    type: [
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
        photo_reference: {
          type: String,
        },
        lat: {
          type: Number,
        },
        lng: {
          type: Number,
        },
        rating: {
          type: Number,
        },
        types: {
          type: [String],
        },
      },
    ],
  },
});

const User = model("User", userSchema);

module.exports = User;
