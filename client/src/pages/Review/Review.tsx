import React, { useState } from "react";
import VeganStarRating from "./VeganStarRating";
import Textarea from "./ReviewStyles";
import ButtonStyles from "../../components/buttons/ButtonStyles";

const Review = () => {

  const [selectedVeganStarRating, setSelectedVeganStarRating] = useState<number>();
  const [selectedVegetarianStarRating, setSelectedVegetarianStarRating] = useState<number>();
  const [selectedPescatarianStarRating, setSelectedPescatarianStarRating] = useState<number>();
  const [selectedGlutenFreeStarRating, setSelectedGlutenFreeStarRating] = useState<number>();
  const [selectedDairyFreeStarRating, setSelectedDairyFreeStarRating] = useState<number>();
  const [selectedNutFreeStarRating, setSelectedNutFreeStarRating] = useState<number>();
  

  return (
    <div>
      <h1>Review for Business Name Placeholder</h1>
      <form className="starForm">
        <h3>Rate this restaurant based on the special diet:</h3>
        <VeganStarRating
          selectedVeganStarRating={selectedVeganStarRating}
          setSelectedVeganStarRating={setSelectedVeganStarRating}
        >
        </VeganStarRating>

        <h3>How was your experience?</h3>
      <Textarea name="review" id="review" aria-label="review"></Textarea>

        <ButtonStyles type="submit">Submit</ButtonStyles>
      </form>
    </div>
  )
};

export default Review;
