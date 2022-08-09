const router = require("express").Router();

const restaurantRoutes = require("./restaurantRoutes");

router.use("/restaurant", restaurantRoutes);

module.exports = router;
