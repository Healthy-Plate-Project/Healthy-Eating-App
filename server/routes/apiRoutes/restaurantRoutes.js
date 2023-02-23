const router = require("express").Router();
const {
  getGoogleRestaurants,
  getGoogleRestaurant,
  getSavedRestaurant,
  postSavedRestaurant,
  updateSavedRestaurant,
  deleteSavedRestaurant,
} = require("../../controller/restaurantController");

router.route("/google/get/multiple").post(getGoogleRestaurants);

router.route("/google/get/single").post(getGoogleRestaurant);

router.route("/saved/get").post(getSavedRestaurant);

router.route("/saved/post").post(postSavedRestaurant);

router.route("/saved/put").post(updateSavedRestaurant);

router.route("/saved/delete").post(deleteSavedRestaurant);

module.exports = router;
