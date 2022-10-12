import React, { useEffect, useState } from "react";
import { H1, HeartEmpty } from "./RobynStyles";
import heartEmpty from "../../assets/images/heart-empty.png";
import heartFull from "../../assets/images/heart-filled.png";

const HeartFavorite = (props: any) => {
  function starRatingHandler(event: any) {
    event.preventDefault();
    props.setSelectedHeart(parseInt(event.target.id[0]));
  }

  function renderVeganStars() {
    const array = [];
    for (let i = 1; i <= 1; i++) {
      const id = `${i.toString()}-vegan-star-id`;
      const alt = `${i.toString()}-Vegan-Star-Rating`;
      if (i <= props.selectedHeart) {
        array.push(
          <img
            src={heartFull}
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
            src={heartEmpty}
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

  return <span> {renderVeganStars()}</span>;
};

export default HeartFavorite;
