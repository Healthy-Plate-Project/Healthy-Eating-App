const router = require("express").Router();
const {
  getLocation
} = require("../../controller/locationController");

router.route("/").post(getLocation);

module.exports = router;