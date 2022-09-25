import React from "react";
import goldStar from "../../../assets/images/gold-star.png";
import whiteStar from "../../../assets/images/white-star.png";

const NutFreeStarRating = (props: any) => {
  function starRatingHandler(event: any) {
    event.preventDefault();
    props.setSelectedNutFreeStarRating(parseInt(event.target.id[0]));
  }

  function renderNutFreeStars() {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      const id = `${i.toString()}-NutFree-star-id`;
      const alt = `${i.toString()}-NutFree-Star-Rating`;
      if (i <= props.selectedNutFreeStarRating) {
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
      <h4>Nut Free Rating</h4>
      {renderNutFreeStars()}
    </div>
  );
};

export default NutFreeStarRating;
