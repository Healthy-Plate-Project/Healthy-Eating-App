import React from "react";
import goldStar from "../../../assets/images/gold-star.png";
import whiteStar from "../../../assets/images/white-star.png";

const VegetarianStarRating = (props: any) => {
  function starRatingHandler(event: any) {
    event.preventDefault();
    props.setSelectedVegetarianStarRating(parseInt(event.target.id[0]));
  }

  function renderVegetarianStars() {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      const id = `${i.toString()}-Vegetarian-star-id`;
      const alt = `${i.toString()}-Vegetarian-Star-Rating`;
      if (i <= props.selectedVegetarianStarRating) {
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
      <h4>Vegetarian Rating</h4>
      {renderVegetarianStars()}
    </div>
  );
};

export default VegetarianStarRating;
