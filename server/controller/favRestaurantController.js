const FavRestaurant = require('../models/FavRestaurant');

const favRestaurantController = {
  saveFavRestaurant: async function (req, res) {
    try {
      const check = await FavRestaurant.find({ user_id: req.params.userId, place_id: req.params.placeId });
      if (check.length === 0) {
        const data = await FavRestaurant.create({ user_id: req.params.userId, place_id: req.params.placeId });
        res.json(data);
      } else {
        res.json(check);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getFavRestaurantsByUser: async function (req, res) {
    try {
      const data = await FavRestaurant.find({ user_id: req.params.userId });
      var array = data.map(function (place_id) {
        return place_id['place_id'];
      });
      res.json(array);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteFavRestaurantByUser: async function (req, res) {
    try {
      const data = await FavRestaurant.deleteMany({ user_id: req.params.userId, place_id: req.params.placeId });
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
}

module.exports = favRestaurantController;
