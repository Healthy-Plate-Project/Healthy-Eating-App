const router = require("express").Router();
const {
  postReview,
  updateReview,
  deleteReview,
  getReview,
  getReviewsByUser,
  getReviewsByRestaurant,
} = require("../../controller/reviewController");

router.route("/post").post(postReview);

router.route("/put").post(updateReview);

router.route("/delete").post(deleteReview);

router.route("/get").post(getReview);

router.route("/user/get").post(getReviewsByUser);

router.route("/restaurant/get").post(getReviewsByRestaurant);

module.exports = router;
