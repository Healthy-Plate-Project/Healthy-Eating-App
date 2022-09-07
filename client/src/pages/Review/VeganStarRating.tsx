import React from "react";
import emptyStar from "./../../assets/images/white-background-star.png";

const VeganStarRating = (props: any) => {

  function starRatingHandler(event: any) {
    event.preventDefault();
    props.setSelectedVeganStarRating(parseInt(event.target.id[0]));
  }

  function renderVeganStars() {
    const array = []
    for (let i = 1; i <= 5; i++) {
      const id = `${i.toString()}-vegan-star-id`;
      const alt = `${i.toString()}-Vegan-Star-Rating`;
      if (i <= props.selectedVeganStarRating) {
        array.push(
          <img className="stars checked-star" src={emptyStar} alt={alt} aria-label={alt} key={id} id={id} onClick={starRatingHandler} />
        )
      } else {
        array.push(
          <img className="stars" src={emptyStar} alt={alt} aria-label={alt} key={id} id={id} onClick={starRatingHandler} />
        )
      }
    }
    return array
  }


  return (
    <div>
      <h4>Vegan Rating</h4>
      {renderVeganStars()}
    </div>
  )
};

export default VeganStarRating;
