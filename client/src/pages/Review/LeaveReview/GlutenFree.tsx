import React from "react";
import goldStar from "../../../assets/images/gold-star.png";
import whiteStar from "../../../assets/images/white-star.png";

export function GlutenFreeStarRating(props: any) {
  function starRatingHandler(event: any) {
    event.preventDefault();
    props.setSelectedGlutenFreeStarRating(parseInt(event.target.id[0]));
  }

  function renderGlutenFreeStars() {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      const id = `${i.toString()}-GlutenFree-star-id`;
      const alt = `${i.toString()}-GlutenFree-Star-Rating`;
      if (i <= props.selectedGlutenFreeStarRating) {
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
      <h4>Gluten Free Rating</h4>
      {renderGlutenFreeStars()}
    </div>
  );
}
