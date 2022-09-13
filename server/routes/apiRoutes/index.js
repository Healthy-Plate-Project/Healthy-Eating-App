const router = require("express").Router();

const restaurantRoutes = require("./restaurantRoutes");
const reviewRoutes = require("./reviewRoutes");

router.use("/restaurant", restaurantRoutes);
router.use("/review", reviewRoutes);

module.exports = router;
