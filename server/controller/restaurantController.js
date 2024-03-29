const axios = require("axios");
const Restaurant = require("../models/Restaurant");
const Review = require("../models/Review");

const restaurantsController = {
  getGoogleRestaurants: async function (req, res) {
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const type = "&type=restaurant";
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
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}${keyword}${max_price}${min_price}${radius}${open_now}${type}&key=${apiKey}`,
      headers: {},
    };
    axios(config)
      .then(async function (response) {
        const restaurantsPromises = response.data.results.map(
          async (restaurant) => {
            const restaurantData = await Restaurant.findOne({
              place_id: restaurant.place_id,
            });
            if (!restaurantData) {
              return restaurant;
            }
            const reviews = await Review.find({
              place_id: restaurant.place_id,
            });
            if (!reviews) {
              return restaurant;
            }
            return { ...restaurant, dragonReviews: reviews };
          }
        );
        const restaurants = await Promise.all(restaurantsPromises);

        const filteredRestaurants = restaurants.filter(
          (restaurant) => !restaurant.error
        );

        if (filteredRestaurants.length === 0) {
          return res
            .status(404)
            .send({ message: "No valid restaurants found" });
        }
        res.json(filteredRestaurants);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error" });
      });
  },

  getGoogleRestaurant: async function (req, res) {
    const api_key = process.env.GOOGLE_PLACES_APIKEY;
    const config = {
      method: "GET",
      url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.body.place_id}&key=${api_key}`,
      headers: {},
    };
    axios(config)
      .then(async function (response) {
        const restaurant = await Restaurant.findOne({
          place_id: response.data.result.place_id,
        });
        if (!restaurant)
          return res.status(404).send({ message: "Restaurant not found" });
        const reviews = await Review.find({
          place_id: response.data.result.place_id,
        });
        if (!reviews) {
          return res.status(404).send({
            message: `No reviews found for place_id: ${response.data.result.place_id}`,
          });
        }
        res.json({ ...response.data.result, dragonReviews: reviews });
      })
      .catch(function (error) {
        console.log(error);
        res(error);
      });
  },

  getSavedRestaurant: async function (req, res) {
    try {
      const restaurant = await Restaurant.findOne({
        place_id: req.body.place_id,
      });
      restaurant
        ? res.json({ data: restaurant })
        : res.json({
            message: `Restaurant ID# ${req.body.place_id} Not Found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  postSavedRestaurant: async function (req, res) {
    try {
      const restaurant = await Restaurant.findOne({
        place_id: req.body.place_id,
      });
      restaurant
        ? res.json({ data: restaurant })
        : res.json({ data: await Restaurant.create(req.body) });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateSavedRestaurant: async function (req, res) {
    try {
      const restaurant = await Restaurant.findOne({
        place_id: req.body.place_id,
      });
      if (!restaurant) {
        return res.status(404).json({
          message: `Restaurant ID# ${req.body.place_id} Not Found!`,
        });
      }
      await Restaurant.findOneAndUpdate(
        { place_id: req.body.place_id },
        req.body
      );
      res.status(200).json({
        message: `Restaurant ID# ${req.body.place_id} updated!`,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteSavedRestaurant: async function (req, res) {
    try {
      const restaurant = await Restaurant.findOneAndDelete({
        place_id: req.body.place_id,
      });
      if (!restaurant) {
        res.status(404).json({
          message: `Restaurant ID# ${req.body.place_id} Not Found!`,
        });
      } else {
        res.status(200).json({
          message: `Restaurant ID# ${req.body.place_id} Deleted!`,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = restaurantsController;
