const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/User");
const Restaurant = require("../models/Restaurant");
const Review = require("../models/Review");

const MAX_AGE = 24 * 60 * 60 * 1000; // 1 day

const userController = {
  signup: async function (req, res) {
    const { username, email, first_name, last_name, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      username,
      email,
      first_name,
      last_name,
      password: hashedPassword,
    });
    await user.save();
    const data = {
      id: user._id,
      username,
      email,
      first_name,
      last_name,
    };
    res.json({
      message: "Successfully signed up",
      ...data,
    });
  },

  login: async function (req, res) {
    try {
      const { email, username, password } = req.body;
      const user = await User.findOne({ $or: [{ email }, { username }] });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(400).json({ message: "Invalid password" });
      }
      const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);
      res.cookie("jwt", token, { httpOnly: true, maxAge: MAX_AGE });
      const [fav_restaurants, reviews] = await Promise.all([
        Restaurant.find({ place_id: { $in: user.fav_restaurants } }),
        Review.find({ _id: { $in: user.reviews } })
      ]);
      res.status(200).json({
        message: "Successful login",
        _id: user._id,
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        fav_restaurants,
        reviews
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getUser: async function (req, res) {
    try {
      const cookie = req.cookies["jwt"];
      if (!cookie) {
        return res
          .status(401)
          .send({ message: "Unauthenticated: Missing jwt Cookie" });
      }
      const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);
      if (!claims) {
        return res
          .status(401)
          .send({ message: "Unauthenticated: Missing Access Token Secret" });
      }
      const user = await User.findOne({ _id: claims._id });
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      const { password, ...data } = user.toJSON();
      const fav_restaurants =
        (await Restaurant.find({ place_id: { $in: user.fav_restaurants } })) ||
        [];
      const reviews = (await Review.find({ user_id: user._id })) || [];
      res
        .status(200)
        .json({ message: "User found", ...data, fav_restaurants, reviews });
    } catch (err) {
      console.log(err);
      return res.status(401).send({
        message: "Unauthenticated",
      });
    }
  },

  logout: async function (req, res) {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({
      message: "Successfully logged out",
    });
  },

  postFavRestaurantByUser: async function (req, res) {
    try {
      const { user_id } = req.body;
      const user = await User.findOne({ _id: user_id });
      if (!user) return res.status(404).send({ message: "User not found" });
      const { place_id } = req.body;
      if (user.fav_restaurants.some((place) => place.place_id === place_id)) {
        return res
          .status(404)
          .send({ message: "User already has restaurant favorited" });
      }
      let restaurant = await Restaurant.findOne({ place_id: place_id });
      if (!restaurant) {
        restaurant = await Restaurant.create(req.body);
      }
      const update = await User.updateOne(
        { _id: user_id },
        { $push: { fav_restaurants: place_id } }
      );
      res.status(200).json(update);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteFavRestaurantByUser: async function (req, res) {
    try {
      const { user_id, place_id } = req.body;
      const user = await User.findOne({ _id: user_id });
      if (!user) return res.status(404).send({ message: "User not found" });
      if (!user.fav_restaurants.some((place) => place === place_id)) {
        return res.status(404).send({
          message: "User does not have restaurant favorited",
        });
      }
      const update = await User.updateOne(
        { _id: user_id },
        { $pull: { fav_restaurants: place_id } }
      );
      res.status(200).json(update);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
