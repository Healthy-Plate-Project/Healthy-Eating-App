const axios = require('axios');
const Restaurant = require('../models/Restaurant');
const { testRestaurant, testRestaurants } = require('../seeds/testSeeds');

const restaurantsController = {
  getRestaurants: async function (req, res) {
    // const latitude = req.body.latitude
    // const longitude = req.body.longitude
    // let radius, keyword, maxPrice, minPrice, openNow, rankByDistance, type;
    // req.body.radius ? radius = `&radius=${req.body.radius}` : radius = ''
    // req.body.keyword ? keyword = `&keyword=${req.body.keyword}` : keyword = ''
    // req.body.maxPrice ? maxPrice = `&maxprice=${req.body.maxPrice}` : maxPrice = ''
    // req.body.minPrice ? minPrice = `&minprice=${req.body.minPrice}` : minPrice = ''
    // req.body.openNow ? openNow = `&opennow=${req.body.openNow}` : openNow = ''
    // req.body.type ? type = `&type=${req.body.type}` : type = ''
    // const apiKey = process.env.GOOGLE_PLACES_APIKEY
    // const config = {
    //   method: 'GET',
    //   url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}${radius}${keyword}${maxPrice}${minPrice}${openNow}${rankByDistance}${type}&key=${apiKey}`,
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
    // const apiKey = process.env.GOOGLE_PLACES_APIKEY
    // const config = {
    //   method: 'GET',
    //   url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.restaurantId}&key=${apiKey}`,
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
