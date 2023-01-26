const router = require("express").Router();
const {
  getUser,
  login,
  logout,
  signup,
  postFavRestaurantByUser,
  deleteFavRestaurantByUser,
} = require("../../controller/userController");

router.route("/get").post(getUser);

router.route("/login").post(login);

router.route("/logout").post(logout);

router.route("/signup").post(signup);

router.route("/fav/post").post(postFavRestaurantByUser);

router.route("/fav/delete").post(deleteFavRestaurantByUser);

module.exports = router;
