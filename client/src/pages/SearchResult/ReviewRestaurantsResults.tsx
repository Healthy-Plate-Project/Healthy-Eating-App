import React, { useEffect, useState } from "react";
import {
  QuestionStarRating,
  ReviewRestaurantData,
  StarRating,
  UserData,
} from "../../utils/globalInterfaces";
import { GooglePhoto } from "../../components/Photo/Photo";
import {
  CardStyled,
  Body,
  Title,
  Details,
  Price,
  Directions,
  Rating,
} from "./MulitpleSearchResultsStyles";
import { FullPageSpinner } from "../../components/Spinner/Spinner";
import { API, apiCall } from "../../utils/serverCalls";
import { FavoriteIcon } from "../../components/Icon/FavoriteIcon";
import { Button } from "../../components/Button/ButtonStyles";
import { useNavigate } from "react-router-dom";

type ReviewRestaurantResultsProps = {
  currentUser: UserData;
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function ReviewRestaurantsResults({
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: ReviewRestaurantResultsProps) {
  const [reviewRestaurants, setReviewRestaurants] = useState(
    [] as ReviewRestaurantData[]
  );
  let navigate = useNavigate();

  useEffect(() => {
    async function checkUserData() {
      if (currentUser.reviews) {
        const reviews = currentUser.reviews;
        let reviewRestaurants: ReviewRestaurantData[] = [];
        for (const review of reviews) {
          const data = await apiCall(API.getRestaurant, {
            place_id: review.place_id,
          });
          let star_ratings: StarRating[] = [];
          let question_star_ratings: QuestionStarRating[] = [];
          review.star_ratings
            ? (star_ratings = review.star_ratings)
            : undefined;
          review.question_star_ratings
            ? (question_star_ratings = review.question_star_ratings)
            : undefined;
          const reviewRestaurant = {
            name: data.name,
            place_id: data.place_id,
            vicinity: data.vicinity,
            price_level: data.price_level,
            geometry: {
              location: {
                lat: data.geometry.location.lat,
                lng: data.geometry.location.lng,
              },
            },
            photos: [
              {
                photo_reference: data.photos[0].photo_reference,
                height: data.photos[0].height,
                html_attributions: data.photos[0].html_attributions,
                width: data.photos[0].width,
              },
            ],
            rating: data.rating,
            types: data.types,
            review: {
              user_id: review.user_id,
              place_id: review.place_id,
              star_ratings: star_ratings.map((rating) => {
                return {
                  name: rating.name,
                  star_rating: rating.star_rating,
                };
              }),
              question_star_ratings: question_star_ratings.map((rating) => {
                return {
                  question: rating.question,
                  star_rating: rating.star_rating,
                };
              }),
              tone: review.tone,
              review_text: review.review_text,
              _id: review._id,
            },
            _id: review._id,
          };
          reviewRestaurants.push(reviewRestaurant);
        }
        setReviewRestaurants(reviewRestaurants);
        setSpinner(false);
      }
    }

    checkUserData();
  }, [currentUser]);

  function renderStarRatings(star_ratings: StarRating[]) {
    if (star_ratings) {
      return star_ratings.map((rating: StarRating, i) => {
        return (
          <p key={`${rating}-${i}`}>
            {rating.name}: {rating.star_rating}
          </p>
        );
      });
    }
  }

  function renderQuestionStarRatings(
    question_star_ratings: QuestionStarRating[]
  ) {
    if (question_star_ratings) {
      return question_star_ratings.map((rating: QuestionStarRating, i) => {
        return (
          <p key={`${rating}-${i}`}>
            {rating.question}: {rating.star_rating}
          </p>
        );
      });
    }
  }

  function deleteReview(_id: string) {
    apiCall(API.deleteReview, { _id: _id });
    window.location.reload();
  }

  const [spinner, setSpinner] = useState(true);
  if (spinner) {
    return <FullPageSpinner />;
  }
  return (
    <div>
      <ul>
        {reviewRestaurants.map((restaurant: ReviewRestaurantData, i) => {
          let star_ratings: StarRating[] = [];
          let question_star_ratings: QuestionStarRating[] = [];
          restaurant.review.star_ratings
            ? (star_ratings = restaurant.review.star_ratings)
            : undefined;
          restaurant.review.question_star_ratings
            ? (question_star_ratings = restaurant.review.question_star_ratings)
            : undefined;
          return (
            <>
              <CardStyled key={`${restaurant.place_id}-${i}`}>
                <GooglePhoto
                  photo_reference={restaurant.photos[0].photo_reference}
                  max_height="200"
                  max_width="200"
                  alt={restaurant.name}
                ></GooglePhoto>
                <Body>
                  <a href={`/single-result/${restaurant.place_id}`}>
                    <Title className="card-title"> {restaurant.name} </Title>
                  </a>
                  <Details>
                    <Price className="card-price">
                      Price Level: {restaurant.price_level}
                    </Price>
                    <Rating className="card-rating">
                      Google Rating: {restaurant.rating}
                    </Rating>
                    <Directions className="card-directions">
                      <a href="directions_url"></a>{" "}
                    </Directions>
                    <FavoriteIcon
                      reviewRestaurantData={restaurant}
                      currentUser={currentUser}
                      currentUserTrigger={currentUserTrigger}
                      setCurrentUserTrigger={setCurrentUserTrigger}
                    ></FavoriteIcon>
                  </Details>
                </Body>
              </CardStyled>
              <h3>Review Text:</h3>
              <p>{restaurant.review.review_text}</p>
              <h3>Star Ratings:</h3>
              {renderStarRatings(star_ratings)}
              <h3>Question Star Ratings:</h3>
              {renderQuestionStarRatings(question_star_ratings)}
              <Button
                type="button"
                onClick={() => {
                  navigate(`/create-review/${restaurant.place_id}`);
                }}
              >
                Update Review
              </Button>
              <br></br>
              <Button
                type="button"
                onClick={() => {
                  deleteReview(restaurant._id);
                }}
              >
                Delete Review
              </Button>
            </>
          );
        })}
      </ul>
    </div>
  );
}
