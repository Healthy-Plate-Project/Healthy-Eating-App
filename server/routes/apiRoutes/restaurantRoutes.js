const router = require("express").Router();
const {
  getRestaurants
} = require("../../controller/restaurantController");

router.route("/").post(getRestaurants);

module.exports = router;
