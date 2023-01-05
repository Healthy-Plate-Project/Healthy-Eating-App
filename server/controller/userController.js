const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/User");

const MAX_AGE = 24 * 60 * 60 * 1000; // 1 day

const userController = {
  register: async function (req, res) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: hashedPassword,
    });
    const result = await user.save();
    const { password, ...data } = result.toJSON(0);
    res.send({
      message: "Successfully registered",
      id: user._id,
      username: user.username,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    });
  },

  login: async function (req, res) {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }
    if (!(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(400).send({
        message: "Invalid password",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: MAX_AGE,
    });
    res.send({
      message: "Successful login",
      id: user._id,
      username: user.username,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      fav_restaurants: user.fav_restaurants,
    });
  },

  getUser: async function (req, res) {
    try {
      const cookie = req.cookies["jwt"];
      const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);
      if (!claims) {
        return res.status(401).send({
          message: "Unauthenticated: Missing Access Token Secret",
        });
      }
      const user = await User.findOne({ _id: claims._id });

      const { password, ...data } = user.toJSON();

      res.send({
        message: "User found",
        id: user._id,
        username: data.username,
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        fav_restaurants: data.fav_restaurants,
      });
    } catch (err) {
      return res.status(401).send({
        message: "Unauthenticated",
      });
    }
  },

  logout: async function (req, res) {
    res.cookie("jwt", "", { maxAge: 0 });
    res.send({
      message: "Successfully logged out",
    });
  },

  saveFavRestaurantByUser: async function (req, res) {
    try {
      const check = await User.findOne({
        _id: req.params.userId,
      });
      let loopBoolean = false;
      for (let i = 0; i < check.fav_restaurants.length; i++) {
        const place = check.fav_restaurants[i];
        if (place.place_id === req.body.place_id) {
          res.send({
            message: "User already has restuarant favorited",
          });
          loopBoolean = true;
          break;
        }
      }
      if (!loopBoolean) {
        const update = await User.updateOne(
          { _id: req.params.userId },
          { $push: { fav_restaurants: req.body } }
        );
        res.json(update);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteFavRestaurantByUser: async function (req, res) {
    try {
      const check = await User.findOne({
        _id: req.params.userId,
      });
      let loopBoolean = false;
      for (let i = 0; i < check.fav_restaurants.length; i++) {
        const place = check.fav_restaurants[i];
        if (place.place_id === req.body.place_id) {
          const update = await User.updateOne(
            { _id: req.params.userId },
            { $pull: { fav_restaurants: { place_id: req.body.place_id } } }
          );
          res.json(update);
          loopBoolean = true;
          break;
        }
      }
      if (!loopBoolean) {
        res.send({
          message: "User does not already have restaurant favorited",
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
