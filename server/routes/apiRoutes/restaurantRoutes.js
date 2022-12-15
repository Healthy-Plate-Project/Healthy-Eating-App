const router = require("express").Router();
const {
  getRestaurants,
  getRestaurant,
} = require("../../controller/restaurantController");

router.route("/").post(getRestaurants);

router.route("/:placeId").post(getRestaurant);

module.exports = router;
