import React from "react";
import { Button } from "../../components/Button/ButtonStyles";
import { UserData } from "../../utils/globalInterfaces";
import { useNavigate } from "react-router-dom";

type ProfileProps = {
  currentUser: UserData;
};

export function Profile({ currentUser }: ProfileProps) {
  let navigate = useNavigate();

  function getButtonLabel(count: number, label: string): string {
    const suffix = count === 1 ? label.slice(0, -1) : label;
    return `${count} ${suffix}`;
  }

  function getReviewButtonLabel(): string {
    const reviewCount = currentUser.reviews ? currentUser.reviews.length : 0;
    return getButtonLabel(reviewCount, "Reviews");
  }

  function getFavoritesButtonLabel(): string {
    const favoritesCount = currentUser.fav_restaurants
      ? currentUser.fav_restaurants.length
      : 0;
    return getButtonLabel(favoritesCount, "Favorites");
  }

  if (!currentUser.username) {
    navigate("/login");
  }

  return (
    <>
      <h3>Welcome {currentUser.first_name}!</h3>
      <Button
        type="button"
        onClick={() => {
          navigate("/reviews");
        }}
      >
        {getReviewButtonLabel()}
      </Button>
      <br></br>
      <Button
        type="button"
        onClick={() => {
          navigate("/favorites");
        }}
      >
        {getFavoritesButtonLabel()}
      </Button>
    </>
  );
}
