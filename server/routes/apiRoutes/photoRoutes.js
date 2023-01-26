const router = require("express").Router();
const { getGooglePhoto } = require("../../controller/photoController");

router.route("/google/get").post(getGooglePhoto);

module.exports = router;
