import React, { useState } from "react";
import { VeganStarRating } from "./VeganStarRating";
import { Textarea, Wrapper } from "./ReviewStyles";
import { VegetarianStarRating } from "./VegetarianStarRating";
import { PescatarianStarRating } from "./PescatarianStarRating";
import { GlutenFreeStarRating } from "./GlutenFree";
import { DairyFreeStarRating } from "./DairyFree";
import { NutFreeStarRating } from "./NutFree";
import { OverallStarRating } from "./OverallRating";

export function Review() {
  const [selectedVeganStarRating, setSelectedVeganStarRating] =
    useState<number>();
  const [selectedVegetarianStarRating, setSelectedVegetarianStarRating] =
    useState<number>();
  const [selectedPescatarianStarRating, setSelectedPescatarianStarRating] =
    useState<number>();
  const [selectedGlutenFreeStarRating, setSelectedGlutenFreeStarRating] =
    useState<number>();
  const [selectedDairyFreeStarRating, setSelectedDairyFreeStarRating] =
    useState<number>();
  const [selectedNutFreeStarRating, setSelectedNutFreeStarRating] =
    useState<number>();
  const [selectedOverallStarRating, setSelectedOverallStarRating] =
    useState<number>();

  return (
    <Wrapper>
      <div>
        <h1>Review for Business Name Placeholder</h1>
        <form>
          <h3>What is your overall rating for this restaurant?</h3>
          <OverallStarRating
            selectedOverallStarRating={selectedOverallStarRating}
            setSelectedOverallStarRating={setSelectedOverallStarRating}
          ></OverallStarRating>
          <h3>Rate this restaurant based on the special diet:</h3>
          <VeganStarRating
            selectedVeganStarRating={selectedVeganStarRating}
            setSelectedVeganStarRating={setSelectedVeganStarRating}
          ></VeganStarRating>

          <VegetarianStarRating
            selectedVegetarianStarRating={selectedVegetarianStarRating}
            setSelectedVegetarianStarRating={setSelectedVegetarianStarRating}
          ></VegetarianStarRating>

          <PescatarianStarRating
            selectedPescatarianStarRating={selectedPescatarianStarRating}
            setSelectedPescatarianStarRating={setSelectedPescatarianStarRating}
          ></PescatarianStarRating>

          <GlutenFreeStarRating
            selectedGlutenFreeStarRating={selectedGlutenFreeStarRating}
            setSelectedGlutenFreeStarRating={setSelectedGlutenFreeStarRating}
          ></GlutenFreeStarRating>

          <DairyFreeStarRating
            selectedDairyFreeStarRating={selectedDairyFreeStarRating}
            setSelectedDairyFreeStarRating={setSelectedDairyFreeStarRating}
          ></DairyFreeStarRating>

          <NutFreeStarRating
            selectedNutFreeStarRating={selectedNutFreeStarRating}
            setSelectedNutFreeStarRating={setSelectedNutFreeStarRating}
          ></NutFreeStarRating>

          <h3>How was your experience?</h3>
          <Textarea name="review" id="review" aria-label="review"></Textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </Wrapper>
  );
}
