const router = require("express").Router();
const {
  getUser,
  login,
  logout,
  register
} = require("../../controller/userController");

router.route("/getUser").post(getUser);

router.route("/login").post(login);

router.route("/logout").post(logout);

router.route("/register").post(register);

module.exports = router;
