import React from "react";
import { useNavigate } from "react-router-dom";
import { FavoriteIcon } from "../../components/Icon/FavoriteIcon";
import { GooglePhoto } from "../../components/Photo/Photo";
import { Restaurant, UserData } from "../../utils/globalInterfaces";
import {
  CardStyled,
  Body,
  Title,
  Details,
  Rating,
  Directions,
  Favorite,
  Price,
  Review,
} from "./MulitpleSearchResultsStyles";
import { apiCall, API } from "../../utils/serverCalls";
import mascot from "../Home/Images/mascot_color_no_outline.svg";
import { BackgroundImage } from "../Home/HomeStyles";
import { priceLevel, renderRatingStars } from "../../utils/helpers";

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
  const path = window.location.pathname;
  const pathString = path.substring(1);

  function isResturantReviewed(place_id: string) {
    if (!currentUser.reviews) return;
    return currentUser.reviews.find((review) => review.place_id === place_id);
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
    if (pathString !== "reviews") return;
    const review = isResturantReviewed(restaurant.place_id);
    return (
      <>
        {review && restaurant && (
          <Review
            title={`Delete Your Review for ${restaurant.name}`}
            className="material-symbols-outlined"
            onClick={async () => {
              await deleteReview(review._id);
            }}
          >
            delete_forever
          </Review>
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
        {restaurants.map((restaurant) => (
          <div key={restaurant.place_id}>
            <CardStyled>
              {restaurant.photos && restaurant.photos[0] && (
                <GooglePhoto
                  photo_reference={restaurant.photos[0].photo_reference}
                  max_width="400"
                  max_height="400"
                  alt={restaurant.name}
                  place_id={restaurant.place_id}
                  name={restaurant.name}
                />
              )}
              <Body>
                <a href={`/single-result/${restaurant.place_id}`}>
                  <Title className="card-title" title={restaurant.name}>
                    {" "}
                    {restaurant.name}{" "}
                  </Title>
                </a>
                <Details>
                  <Review
                    title={`Review ${restaurant.name}`}
                    className="material-symbols-outlined"
                    onClick={() => {
                      if (!currentUser._id) {
                        navigate("/login");
                        return;
                      }
                      navigate(`/create-review/${restaurant.place_id}`);
                    }}
                  >
                    rate_review
                  </Review>
                  {restaurant.geometry &&
                    restaurant.geometry.location.lat &&
                    restaurant.geometry.location.lng &&
                    restaurant.place_id && (
                      <a
                        title={`Get directions to ${restaurant.name}`}
                        href={`https://www.google.com/maps/search/?api=1&
                          query=${restaurant.geometry.location.lat}
                          %2C${restaurant.geometry.location.lng}
                          &query_place_id=${restaurant.place_id}
                        `}
                      >
                        <Directions className="material-symbols-outlined">
                          location_on
                        </Directions>
                      </a>
                    )}

                  {restaurant.price_level && (
                    <Price>{priceLevel(restaurant.price_level)}</Price>
                  )}
                  {restaurant.rating && restaurant.name && (
                    <Rating className="card-rating">
                      {renderRatingStars(restaurant.rating, restaurant.name)}
                    </Rating>
                  )}
                  <Favorite>
                    <FavoriteIcon
                      restaurant={restaurant}
                      currentUser={currentUser}
                      currentUserTrigger={currentUserTrigger}
                      setCurrentUserTrigger={setCurrentUserTrigger}
                    ></FavoriteIcon>
                  </Favorite>
                </Details>
              </Body>
            </CardStyled>
            {renderReviewButtons(restaurant)}
          </div>
        ))}
      </ul>
    </div>
  );
}
