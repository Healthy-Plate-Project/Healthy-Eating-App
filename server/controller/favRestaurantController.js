const FavRestaurant = require('../models/FavRestaurant');

const favRestaurantController = {
  saveFavRestaurant: async function (req, res) {
    try {
      const data = await FavRestaurant.create({ user_id: req.params.userId, place_id: req.params.placeId });
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getFavRestaurantsByUser: async function (req, res) {
    try {
      const data = await FavRestaurant.find({ user_id: req.params.userId });
      res.json(data);
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
