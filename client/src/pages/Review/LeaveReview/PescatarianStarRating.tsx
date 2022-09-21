import React from "react";
import goldStar from "../../../assets/images/gold-star.png";
import whiteStar from "../../../assets/images/white-star.png";

const PescatarianStarRating = (props: any) => {
  function starRatingHandler(event: any) {
    event.preventDefault();
    props.setSelectedPescatarianStarRating(parseInt(event.target.id[0]));
  }

  function renderPescatarianStars() {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      const id = `${i.toString()}-Pescatarian-star-id`;
      const alt = `${i.toString()}-Pescatarian-Star-Rating`;
      if (i <= props.selectedPescatarianStarRating) {
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
      <h4>Pescatarian Rating</h4>
      {renderPescatarianStars()}
    </div>
  );
};

export default PescatarianStarRating;
