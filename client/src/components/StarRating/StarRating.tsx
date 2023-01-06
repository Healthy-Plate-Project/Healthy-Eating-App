import React, { useEffect, useState } from "react";
import goldStar from "../../../assets/images/gold-star.png";
import whiteStar from "../../../assets/images/white-star.png";
import { ReviewData } from "../../utils/globalInterfaces";

type StarRatingProps = {
  currentUser: {
    id: string;
    reviews: [ReviewData];
  };
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function StarRating({
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
  ratingName
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


  function renderOverallStars() {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      const id = `${i.toString()}-Overall-star-id`;
      const alt = `${i.toString()}-Overall-Star-Rating`;
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
      <h4>Overall Rating</h4>
      {renderOverallStars()}
    </>
  );
}
