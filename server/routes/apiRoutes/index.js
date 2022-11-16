const router = require("express").Router();

const restaurantRoutes = require("./restaurantRoutes");
const userRoutes = require("./userRoutes");
const reviewRoutes = require("./reviewRoutes");
const favRestaurantRoutes = require("./favRestaurantRoutes");
const photoRoutes = require("./photoRoutes");

router.use("/restaurant", restaurantRoutes);
router.use("/review", reviewRoutes);
router.use("/user", userRoutes);
router.use("/fav-restaurant", favRestaurantRoutes);
router.use("/photo", photoRoutes);

module.exports = router;
