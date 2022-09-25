const axios = require('axios');
const Restaurant = require('../models/Restaurant');
const { testRestaurant, testRestaurants } = require('../seeds/testSeeds');

const restaurantsController = {
  getRestaurants: async function (req, res) {
    // const latitude = req.body.latitude
    // const longitude = req.body.longitude
    // type = 'restaurant'
    // let radius, keyword, max_price, min_price, open_now;
    // req.body.radius ? radius = `&radius=${req.body.radius}` : radius = ''
    // req.body.keyword ? keyword = `&keyword=${req.body.keyword}` : keyword = ''
    // req.body.max_price ? max_price = `&max_price=${req.body.max_price}` : max_price = ''
    // req.body.min_price ? min_price = `&min_price=${req.body.min_price}` : min_price = ''
    // req.body.open_now ? open_now = `&open_now=${req.body.open_now}` : open_now = ''
    // const apiKey = process.env.GOOGLE_PLACES_APIKEY
    // const config = {
    //   method: 'GET',
    //   url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}${radius}${keyword}${max_price}${min_price}${open_now}${type}&key=${apiKey}`,
    //   headers: {}
    // };

    res.json(testRestaurants)

    // axios(config)
    //   .then(function (response) {
    //     console.log(response.data);
    //     res.json(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     res(error)
    //   });
  },
  getRestaurant: async function (req, res) {
    // const api_key = process.env.GOOGLE_PLACES_APIKEY
    // const config = {
    //   method: 'GET',
    //   url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.placeId}&key=${api_key}`,
    //   headers: {}
    // };

    res.json(testRestaurant)

    // axios(config)
    //   .then(function (response) {
    //     console.log(response.data);
    //     res.json(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     res(error)
    //   });
  },
  saveRestaurant: async function (req, res) {
    try {
      console.log(req.body)
      const data = await Restaurant.create(req.body);
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = restaurantsController;
