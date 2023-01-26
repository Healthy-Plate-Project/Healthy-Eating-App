const router = require("express").Router();
const { getLocation } = require("../../controller/locationController");

router.route("/google/get").post(getLocation);

module.exports = router;
