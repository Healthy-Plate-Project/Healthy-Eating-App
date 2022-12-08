const router = require("express").Router();
const { getGooglePhoto } = require("../../controller/photoController");

router.route("/google").post(getGooglePhoto);

module.exports = router;
