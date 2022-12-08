// const axios = require('axios');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/User");
// const { userSeeds } = require('../seeds/userSeeds');

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
    const { password, ...data } = await result.toJSON(0);
    res.send(data);
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
    });
  },

  getUser: async function (req, res) {
    try {
      const cookie = req.cookies["jwt"];
      const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);
      if (!claims) {
        return res.status(401).send({
          message: "Unauthenticated",
        });
      }
      const user = await User.findOne({ _id: claims._id });

      const { password, ...data } = await user.toJSON();

      res.send(data);
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
};

module.exports = userController;
