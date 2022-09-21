const router = require("express").Router();

const restaurantRoutes = require("./restaurantRoutes");
const userRoutes = require("./userRoutes");
const reviewRoutes = require("./reviewRoutes");

router.use("/restaurant", restaurantRoutes);
router.use("/review", reviewRoutes);
router.use("/user", userRoutes);

module.exports = router;
