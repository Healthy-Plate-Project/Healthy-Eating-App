const router = require("express").Router();
const {
  getRestaurants,
  getRestaurant
} = require("../../controller/restaurantController");

router.route("/").post(getRestaurants);

router.route("/:restaurantId").post(getRestaurant)

module.exports = router;
