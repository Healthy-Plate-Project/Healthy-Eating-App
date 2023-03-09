const router = require("express").Router();

const restaurantRoutes = require("./restaurantRoutes");
const userRoutes = require("./userRoutes");
const reviewRoutes = require("./reviewRoutes");
const photoRoutes = require("./photoRoutes");
const locationRoutes = require("./locationRoutes");
chatGPTRoutes = require("./chatGPTRoutes");

router.use("/restaurant", restaurantRoutes);
router.use("/review", reviewRoutes);
router.use("/user", userRoutes);
router.use("/photo", photoRoutes);
router.use("/location", locationRoutes);
router.use("/chatgpt", chatGPTRoutes);

module.exports = router;
