const router = require("express").Router();
const { getResponse } = require("../../controller/chatGPTController");

router.route("/get").post(getResponse);

module.exports = router;
