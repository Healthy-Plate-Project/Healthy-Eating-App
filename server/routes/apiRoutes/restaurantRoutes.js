const router = require("express").Router();
const {
  getRestaurants,
  getRestaurant,
  saveRestaurant
} = require("../../controller/restaurantController");

router.route("/").get(getRestaurants);

router.route("/save").post(saveRestaurant);

router.route("/:placeId").get(getRestaurant);

module.exports = router;
