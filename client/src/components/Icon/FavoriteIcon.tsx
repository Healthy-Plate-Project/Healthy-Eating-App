import React, { useEffect, useState } from "react";
import { Restaurant, UserData } from "../../utils/globalInterfaces";
import { apiCall, API } from "../../utils/serverCalls";
import heartEmpty from "../../assets/images/heart-empty.svg";
import heartFilled from "../../assets/images/heart-filled.svg";
import { RelativeSpinner } from "../Spinner/Spinner";
import { BuildRestaurantObject } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { HeartIcon } from "./IconStyles";

type FavoriteIconProps = {
  restaurant?: Restaurant;
  currentUser: UserData;
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function FavoriteIcon({
  restaurant,
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: FavoriteIconProps) {
  const [isFavRestaurant, setIsFavRestaurant] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function checkUserData() {
      if (restaurant && currentUser.fav_restaurants) {
        const isFavRestaurant = currentUser.fav_restaurants.some(
          (place) => place.place_id === restaurant.place_id
        );
        setIsFavRestaurant(isFavRestaurant);
      }
      setSpinner(false);
    }
    checkUserData();
  }, []);

  async function saveFavRestaurant() {
    if (!restaurant) return;
    const restaurantData = BuildRestaurantObject(restaurant);
    const body = {
      user_id: currentUser._id,
      restaurant: restaurantData,
    };
    const response = await apiCall(API.postFavRestaurantByUser, body);
    response
      ? setCurrentUserTrigger(!currentUserTrigger)
      : alert("Favorting restaurant failed.");
  }

  async function deleteFavRestaurant(place_id: string) {
    await apiCall(API.deleteFavRestaurantByUser, {
      user_id: currentUser._id,
      place_id,
    });
    setCurrentUserTrigger(!currentUserTrigger);
  }

  const [spinner, setSpinner] = useState(true);
  if (spinner) return <RelativeSpinner />;

  return (
    <div
      onClick={() => {
        if (!currentUser._id) {
          navigate("/login");
          return;
        }
        setSpinner(true);
        setIsFavRestaurant((prevState) => {
          if (restaurant) {
            if (prevState) {
              deleteFavRestaurant(restaurant.place_id);
            } else {
              saveFavRestaurant();
            }
          }
          // TODO add error handling
          return !prevState;
        });
        setSpinner(false);
      }}
    >
      {restaurant && isFavRestaurant ? (
        <HeartIcon src={heartFilled} title={`Unfavorite ${restaurant.name}`} />
      ) : (
        restaurant && (
          <HeartIcon src={heartEmpty} title={`Favorite ${restaurant.name}`} />
        )
      )}
    </div>
  );
}
