const router = require("express").Router();
const {
  getRestaurants,
  getRestaurant,
  saveRestaurant
} = require("../../controller/restaurantController");

router.route("/").post(getRestaurants);

router.route("/save").post(saveRestaurant);

router.route("/:placeId").post(getRestaurant);

module.exports = router;
