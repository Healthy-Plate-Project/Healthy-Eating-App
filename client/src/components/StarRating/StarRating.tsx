import React, { useEffect, useState } from "react";
import goldStar from "../../../assets/images/gold-star.png";
import whiteStar from "../../../assets/images/white-star.png";
import { StarRating } from "../../utils/globalInterfaces";

type StarRatingProps = {
  currentUserId: string;
  starRating: StarRating;
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function StarRating({
  currentUserId,
  starRating,
  currentUserTrigger,
  setCurrentUserTrigger,
}: StarRatingProps) {

  function starRatingHandler(event: any) {
    event.preventDefault();
    props.setSelectedOverallStarRating(parseInt(event.target.id[0]));
  }

  const [selectedStarRating, setSelectedStarRating] = useState(false);

  useEffect(() => {
    function checkUserData() {
      const ratings = currentUser.reviews.;
      if (ratings) {
        const isRated = ratings.some(
          (rating) => rating.name
        );
        setIsFavRestaurant(isFavRestaurant);
      }
    }
    checkUserData();
  }, []);

  async function saveFavRestaurant(data: FavRestaurantData) {
    await saveFavRestaurantByUser(currentUser.id, data);
    setCurrentUserTrigger(!currentUserTrigger);
  }

  async function deleteFavRestaurant(place_id: string) {
    await deleteFavRestaurantByUser(currentUser.id, place_id);
    setCurrentUserTrigger(!currentUserTrigger);
  }


  function renderStars() {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      const id = `${i.toString()}-${ratingName}-star-id`;
      const alt = `${i.toString()}-${ratingName}-Star-Rating`;
      if (i <= props.selectedOverallStarRating) {
        array.push(
          <img
            className="stars"
            src={goldStar}
            alt={alt}
            aria-label={alt}
            key={id}
            id={id}
            onClick={starRatingHandler}
          />
        );
      } else {
        array.push(
          <img
            className="stars"
            src={whiteStar}
            alt={alt}
            aria-label={alt}
            key={id}
            id={id}
            onClick={starRatingHandler}
          />
        );
      }
    }
    return array;
  }

  return (
    <>
      <h4>{ratingName} Rating</h4>
      {renderStars()}
    </>
  );
}
