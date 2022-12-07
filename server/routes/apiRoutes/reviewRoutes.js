const router = require("express").Router();
const {
  createReview,
  updateReview,
  deleteReview,
  getReview,
  getReviewsByUser,
  getReviewsByRestaurant,
} = require("../../controller/reviewController");

router.route("/").post(createReview);

router.route("/:reviewId").put(updateReview);

router.route("/:reviewId").delete(deleteReview);

router.route("/:reviewId").get(getReview);

router.route("/user/:userId").get(getReviewsByUser);

router.route("/restaurant/:placeId").get(getReviewsByRestaurant);

module.exports = router;
