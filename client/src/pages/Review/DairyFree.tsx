import React from "react";
import goldStar from "./../../assets/images/gold-star.png";
import whiteStar from "./../../assets/images/white-star.png";

const DairyFreeStarRating = (props: any) => {
  function starRatingHandler(event: any) {
    event.preventDefault();
    props.setSelectedDairyFreeStarRating(parseInt(event.target.id[0]));
  }

  function renderDairyFreeStars() {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      const id = `${i.toString()}-DairyFree-star-id`;
      const alt = `${i.toString()}-DairyFree-Star-Rating`;
      if (i <= props.selectedDairyFreeStarRating) {
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
    <div>
      <h4>Dairy Free Rating</h4>
      {renderDairyFreeStars()}
    </div>
  );
};

export default DairyFreeStarRating;
