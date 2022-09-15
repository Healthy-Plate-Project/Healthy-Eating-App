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

router.route("/:ReviewId").put(updateReview);

router.route("/:ReviewId").delete(deleteReview);

router.route("/:ReviewId").get(getReview);

router.route("/user/:userId").get(getReviewsByUser);

router.route("/restaurant/:placeId").get(getReviewsByRestaurant);

module.exports = router;