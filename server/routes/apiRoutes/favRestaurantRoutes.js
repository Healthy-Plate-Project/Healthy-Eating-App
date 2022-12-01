const router = require("express").Router();
const {
  saveFavRestaurant,
  getFavRestaurantsByUser,
  deleteFavRestaurantByUser,
} = require("../../controller/favRestaurantController");

router.route("/:userId/:placeId").post(saveFavRestaurant);

router.route("/:userId").get(getFavRestaurantsByUser);

router.route("/:userId/:placeId").delete(deleteFavRestaurantByUser);

module.exports = router;