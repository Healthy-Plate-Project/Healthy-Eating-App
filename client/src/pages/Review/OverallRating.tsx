import React from "react";
import goldStar from "./../../assets/images/gold-star.png";
import whiteStar from "./../../assets/images/white-star.png";

const OverallStarRating = (props: any) => {
  function starRatingHandler(event: any) {
    event.preventDefault();
    props.setSelectedOverallStarRating(parseInt(event.target.id[0]));
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
    <div>
      <h4>Overall Rating</h4>
      {renderOverallStars()}
    </div>
  );
};

export default OverallStarRating;
