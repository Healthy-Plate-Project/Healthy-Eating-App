const router = require("express").Router();
const {
  saveFavRestaurant,
  getFavRestaurantsByUser,
  deleteFavRestaurantByUser,
} = require("../../controller/favRestaurantController");

router.route("/").post(saveFavRestaurant);

router.route("/user/:userId").get(getFavRestaurantsByUser);

router.route("/user/:userId/:placeId").delete(deleteFavRestaurantByUser);

module.exports = router;