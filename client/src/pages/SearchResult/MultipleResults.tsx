import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/ButtonStyles";
import { FavoriteIcon } from "../../components/Icon/FavoriteIcon";
import { GooglePhoto } from "../../components/Photo/Photo";
import { Restaurant, UserData } from "../../utils/globalInterfaces";
import {
  CardStyled,
  Body,
  Title,
  Details,
  Price,
  Rating,
} from "./MulitpleSearchResultsStyles";
import { apiCall, API } from "../../utils/serverCalls";
import mascot from "../Home/Images/mascot_color_no_outline.svg";
import { BackgroundImage } from "../Home/HomeStyles";

type MulitpleResultsProps = {
  restaurants: Restaurant[];
  currentUser: UserData;
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function MulitpleResults({
  restaurants,
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: MulitpleResultsProps) {
  let navigate = useNavigate();
  const zeroResults = restaurants.length === 0;

  function isResturantReviewed(restaurantPlaceId: string) {
    if (!currentUser.reviews) return;
    return currentUser.reviews.find(
      (review) => review.place_id === restaurantPlaceId
    );
  }

  async function deleteReview(_id: string) {
    try {
      await apiCall(API.deleteReview, { _id });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  function renderReviewButtons(restaurant: Restaurant) {
    const review = isResturantReviewed(restaurant.place_id);
    return (
      <>
        <Button
          type="button"
          onClick={() => {
            if (!currentUser._id) {
              navigate("/login");
              return;
            }
            navigate(`/create-review/${restaurant.place_id}`);
          }}
        >
          {review ? "Update " : "Create "}
          Review
        </Button>
        <br></br>
        {review && restaurant._id && (
          <Button
            type="button"
            onClick={async () => {
              await deleteReview(review._id);
            }}
          >
            Delete Review
          </Button>
        )}
      </>
    );
  }

  return (
    <div>
      {zeroResults && (
        <>
          <h1>No Results Found</h1>
          <BackgroundImage src={mascot} />
        </>
      )}
      <ul>
        {restaurants.map((restaurant) => {
          return (
            <div key={restaurant.place_id}>
              <CardStyled>
                {restaurant.photos && restaurant.photos[0] && (
                  <GooglePhoto
                    photo_reference={restaurant.photos[0].photo_reference}
                    max_height="100"
                    max_width="150"
                    alt={restaurant.name}
                  />
                )}
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
                    <FavoriteIcon
                      restaurant={restaurant}
                      currentUser={currentUser}
                      currentUserTrigger={currentUserTrigger}
                      setCurrentUserTrigger={setCurrentUserTrigger}
                    ></FavoriteIcon>
                  </Details>
                </Body>
              </CardStyled>
              {renderReviewButtons(restaurant)}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
