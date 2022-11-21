const axios = require("axios");
const Restaurant = require("../models/Restaurant");
const { testRestaurant, testRestaurants } = require("../seeds/testSeeds");
const testAPI = require("../index");

const restaurantsController = {
  getRestaurants: async function (req, res) {
    if (testAPI) {
      res.json(testRestaurants);
    } else {
      const latitude = req.body.latitude;
      const longitude = req.body.longitude;
      const type = "$type=restaurant";
      let radius, keyword, max_price, min_price, open_now;
      req.body.radius ? (radius = `&radius=${req.body.radius}`) : (radius = "");
      req.body.keyword
        ? (keyword = `&keyword=${req.body.keyword}`)
        : (keyword = "");
      req.body.max_price
        ? (max_price = `&maxprice=${req.body.max_price}`)
        : (max_price = "");
      req.body.min_price
        ? (min_price = `&minprice=${req.body.min_price}`)
        : (min_price = "");
      req.body.open_now
        ? (open_now = `&opennow=${req.body.open_now}`)
        : (open_now = "");
      const apiKey = process.env.GOOGLE_PLACES_APIKEY;
      const config = {
        method: "GET",
        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}${keyword}${max_price}${min_price}${radius}${open_now}${type}&key=${apiKey}`,
        headers: {},
      };
      axios(config)
        .then(function (response) {
          res.json(response.data);
        })
        .catch(function (error) {
          console.log(error);
          res(error);
        });
    }
  },

  getRestaurant: async function (req, res) {
    if (testAPI) {
      res.json(testRestaurant);
    } else {
      const api_key = process.env.GOOGLE_PLACES_APIKEY;
      const config = {
        method: "GET",
        url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.placeId}&key=${api_key}`,
        headers: {},
      };
      axios(config)
        .then(function (response) {
          res.json(response.data);
        })
        .catch(function (error) {
          console.log(error);
          res(error);
        });
    }
  },

  saveRestaurant: async function (req, res) {
    try {
      const data = await Restaurant.create(req.body);
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = restaurantsController;
