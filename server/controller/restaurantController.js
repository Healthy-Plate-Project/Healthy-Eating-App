const axios = require("axios");
const { testRestaurant, testRestaurants } = require("../seeds/testSeeds");
const getTestAPI = require("../index");

const restaurantsController = {
  getRestaurants: async function (req, res) {
    if (getTestAPI.testAPI) {
      res.json(testRestaurants);
    } else {
      const latitude = req.body.latitude;
      const longitude = req.body.longitude;
      const type = "$type=restaurant";
      const radius = req.body.radius ? `&radius=${req.body.radius}` : "";
      const keyword = req.body.keyword ? `&keyword=${req.body.keyword}` : "";
      const max_price = req.body.max_price
        ? `&maxprice=${req.body.max_price}`
        : "";
      const min_price = req.body.min_price
        ? `&minprice=${req.body.min_price}`
        : "";
      const open_now = req.body.open_now ? `&opennow=${req.body.open_now}` : "";
      const apiKey = process.env.GOOGLE_PLACES_APIKEY;
      const config = {
        method: "GET",
        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}${radius}${keyword}${max_price}${min_price}${open_now}${type}&key=${apiKey}`,
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
    if (getTestAPI.testAPI) {
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
};

module.exports = restaurantsController;
