const router = require("express").Router();

const restaurantRoutes = require("./restaurantRoutes");
const userRoutes = require("./userRoutes");

router.use("/restaurant", restaurantRoutes);
router.use("/user", userRoutes);

module.exports = router;
