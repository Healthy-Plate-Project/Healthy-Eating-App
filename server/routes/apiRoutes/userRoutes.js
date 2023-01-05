const router = require("express").Router();
const {
  getUser,
  login,
  logout,
  register,
  saveFavRestaurantByUser,
  deleteFavRestaurantByUser,
} = require("../../controller/userController");

router.route("/get-user").post(getUser);

router.route("/login").post(login);

router.route("/logout").post(logout);

router.route("/register").post(register);

router.route("/fav/save/:userId").post(saveFavRestaurantByUser);

router.route("/fav/delete/:userId").post(deleteFavRestaurantByUser);

module.exports = router;
