import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiCall, API } from "../../utils/serverCalls";
import {
  H1,
  H3,
  Wrapper,
  PriceContainer,
  Review,
  Rating,
  ReviewPhoto,
  Directions,
  Call,
} from "./SingleSearchResultStyles";
import { GooglePhoto } from "../../components/Photo/Photo";
import { Restaurant, UserData } from "../../utils/globalInterfaces";
import { FavoriteIcon } from "../../components/Icon/FavoriteIcon";
import { FullPageSpinner } from "../../components/Spinner/Spinner";
import { priceLevel, renderRatingStars } from "../../utils/helpers";
import { Header } from "../../components/Header/Header";

type SingleSearchResultPageProps = {
  currentUser: UserData;
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};
export function SingleSearchResultPage({
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: SingleSearchResultPageProps) {
  const { place_id } = useParams();
  const [restaurant, setRestaurant] = useState({} as Restaurant);
  let navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiCall(API.getRestaurant, { place_id });
        setRestaurant(data);
        setSpinner(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [place_id, currentUser]);

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
    const review = isResturantReviewed(restaurant.place_id);
    return (
      <>
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

  function formatPhoneNumber(phoneNumber: string): string {
    const unformattedPhoneNumber = phoneNumber.replace(/\D/g, "");
    return `tel:${unformattedPhoneNumber}`;
  }

  const [spinner, setSpinner] = useState(true);
  if (spinner) {
    return <FullPageSpinner />;
  }
  return (
    <>
      {Header()}
      {restaurant.photos && restaurant.photos[0] && (
        <GooglePhoto
          photo_reference={restaurant.photos[0].photo_reference}
          max_height="200"
          max_width="200"
          alt={restaurant.name}
          name={restaurant.name}
        />
      )}
      <Wrapper>
        <H1>
          {restaurant.name}
          <FavoriteIcon
            restaurant={restaurant}
            currentUser={currentUser}
            currentUserTrigger={currentUserTrigger}
            setCurrentUserTrigger={setCurrentUserTrigger}
          ></FavoriteIcon>
        </H1>
        {restaurant.price_level && (
          <PriceContainer>{priceLevel(restaurant.price_level)}</PriceContainer>
        )}
        {renderReviewButtons(restaurant)}
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
              <p>{restaurant.vicinity}</p>
              <Directions className="material-symbols-outlined">
                location_on
              </Directions>
            </a>
          )}
        {restaurant.formatted_phone_number && (
          <a
            href={formatPhoneNumber(restaurant.formatted_phone_number)}
            rel="noreferrer"
            target="_blank"
          >
            <p>{restaurant.formatted_phone_number}</p>
            <Call className="material-symbols-outlined">call</Call>
          </a>
        )}
        <a href={restaurant.website} rel="noreferrer" target="_blank">
          <p>Website</p>
        </a>
        <div>
          <H3>Photos</H3>
          <hr />
        </div>
        <div>
          <H3>Google User Reviews</H3>
          <div>
            <p>Average Rating:</p>
            {restaurant.rating && restaurant.name && (
              <Rating className="card-rating">
                {renderRatingStars(restaurant.rating, restaurant.name)}
              </Rating>
            )}
            <p>Total # of Reviews: {restaurant.user_ratings_total}</p>
          </div>
          <hr />
          <ul>
            {restaurant.reviews &&
              restaurant.reviews.map((review) => (
                <>
                  <div key={review.profile_photo_url}>
                    <a
                      href={review.author_url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <ReviewPhoto
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        referrerPolicy="no-referrer"
                      />
                      <p>{review.author_name}</p>
                    </a>
                    {renderRatingStars(review.rating, review.author_name)}
                    {review.relative_time_description}
                    <br></br>
                    {review.text}
                  </div>
                  <hr />
                </>
              ))}
          </ul>
        </div>
        <div>
          <p>Healthy App Ratings:</p>
        </div>
      </Wrapper>
    </>
  );
}
