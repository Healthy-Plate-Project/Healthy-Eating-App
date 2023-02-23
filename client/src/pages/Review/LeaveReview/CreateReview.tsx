import React, { FormEvent, useEffect, useState } from "react";
import { Textarea, Wrapper } from "./ReviewStyles";
import {
  SingleGoogleResultData,
  UserData,
  StarRating,
} from "../../../utils/globalInterfaces";
import goldStar from "../../../assets/images/gold-star.png";
import whiteStar from "../../../assets/images/white-star.png";
import { useNavigate, useParams } from "react-router-dom";
import { API, apiCall } from "../../../utils/serverCalls";
import { GooglePhoto } from "../../../components/Photo/Photo";
import { STAR_RATING_NAMES } from "../../../utils/helpers";
import { FullPageSpinner } from "../../../components/Spinner/Spinner";

type CreateReviewProps = {
  currentUser: UserData;
};

export function CreateReview({ currentUser }: CreateReviewProps) {
  const { place_id } = useParams();
  const [restaurantData, setRestaurantData] = useState(
    {} as SingleGoogleResultData
  );
  const [selectedStarRatings, setSelectedStarRatings] = useState(
    [] as StarRating[]
  );
  const [reviewText, setReviewText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiCall(API.getRestaurant, { place_id });
        setRestaurantData(data);
        setSpinner(false)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [currentUser]);

  useEffect(() => {
    async function checkUserReview() {
      try {
        if (currentUser && currentUser.reviews) {
          const review = currentUser.reviews.find(
            (review) => review.place_id === restaurantData.place_id
          );
          if (review && review.review_text && review.star_ratings) {
            setReviewText(review.review_text);
            setSelectedStarRatings(review.star_ratings);
          }
        }
      } catch (err) {
        console.log(err);
      }
      return null;
    }
    checkUserReview();
  }, [currentUser, restaurantData.place_id]);

  function starRatingHandler(diet: string, i: number) {
    let updatedRatings = [...selectedStarRatings];
    let ratingIndex = updatedRatings.findIndex(
      (rating) => rating.name === diet
    );
    if (ratingIndex === -1) {
      updatedRatings.push({ name: diet, star_rating: i });
    } else {
      updatedRatings[ratingIndex].star_rating = i;
    }
    setSelectedStarRatings(updatedRatings);
  }

  function renderStars(diet: string) {
    if (!currentUser.reviews) return null;
    let starRating = 0;
    const review = currentUser.reviews.find(
      (review) => review.place_id === place_id
    );
    const selectedStarRating = selectedStarRatings.find(
      (rating) => rating.name === diet
    );
    if (review && review.star_ratings) {
      const star_rating = review.star_ratings.find(
        (rating) => rating.name === diet
      );
      starRating = star_rating ? star_rating.star_rating : 0;
    }
    if (selectedStarRating) {
      starRating = selectedStarRating.star_rating;
    }
    return Array.from({ length: 5 }, (_, i) => {
      const id = `${i + 1}-${diet}-star-id`;
      const alt = `${i + 1}-${diet}-Star-Rating`;
      const src = i < starRating ? goldStar : whiteStar;
      return (
        <img
          className="stars"
          src={src}
          alt={alt}
          aria-label={alt}
          key={id}
          id={id}
          onClick={() => starRatingHandler(diet, i + 1)}
        />
      );
    });
  }

  async function saveReviewHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const body = {
        user_id: currentUser._id,
        place_id: restaurantData.place_id,
        star_ratings: selectedStarRatings,
        review_text: reviewText,
      };
      const data = await apiCall(API.postReview, body);
      if (data) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function alreadyReviewed() {
    if (!currentUser.reviews) {
      return;
    }
    if (
      currentUser.reviews.find(
        (review) => review.place_id === restaurantData.place_id
      )
    ) {
      return <p>You have already reviewed this restaurant!</p>;
    }
  }

  const [spinner, setSpinner] = useState(true);
  if (spinner) {
    return <FullPageSpinner />;
  }
  
  return (
    <>
      <GooglePhoto
        photo_reference={restaurantData.photos[0].photo_reference}
        max_height="200"
        max_width="200"
        alt={restaurantData.name}
      ></GooglePhoto>
      <Wrapper>
        <div>
          <h1>{restaurantData.name}</h1>
          <form onSubmit={(e) => saveReviewHandler(e)}>
            <div>
              <h4>Google Rating</h4>
              {restaurantData.rating}
            </div>
            <h3>Rate this restaurant based on the special diet:</h3>
            {alreadyReviewed()}
            {STAR_RATING_NAMES.map((diet) => {
              return (
                <>
                  <label key={`${diet}-label`}>{diet}</label>
                  {renderStars(diet)}
                  <br></br>
                </>
              );
            })}
            <h3>How was your experience?</h3>
            <Textarea
              name="review"
              id="review"
              aria-label="review"
              key="review-textarea"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></Textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Wrapper>
    </>
  );
}
