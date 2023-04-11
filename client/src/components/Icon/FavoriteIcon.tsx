import React, { useEffect, useState } from "react";
import { HeartIcon } from "../../pages/SearchResult/SingleSearchResultStyles";
import {
  FavRestaurantData,
  MultipleGoogleResultData,
  ReviewRestaurantData,
  SingleGoogleResultData,
  UserData,
} from "../../utils/globalInterfaces";
import { apiCall, API } from "../../utils/serverCalls";
import heartEmpty from "../../assets/images/heart-empty.svg";
import heartFilled from "../../assets/images/heart-filled.svg";
import { RelativeSpinner } from "../Spinner/Spinner";

type FavoriteIconProps = {
  singleRestaurantData?: SingleGoogleResultData;
  multipleRestaurantData?: MultipleGoogleResultData;
  favRestaurantData?: FavRestaurantData;
  reviewRestaurantData?: ReviewRestaurantData;
  currentUser: UserData;
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function FavoriteIcon({
  singleRestaurantData,
  multipleRestaurantData,
  favRestaurantData,
  reviewRestaurantData,
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: FavoriteIconProps) {
  const [isFavRestaurant, setIsFavRestaurant] = useState(false);
  useEffect(() => {
    function checkUserData() {
      const restaurantData =
        singleRestaurantData ||
        multipleRestaurantData ||
        favRestaurantData ||
        reviewRestaurantData;
      if (restaurantData && currentUser.fav_restaurants) {
        const isFavRestaurant = currentUser.fav_restaurants.some(
          (place) => place.place_id === restaurantData.place_id
        );
        setIsFavRestaurant(isFavRestaurant);
        setSpinner(false);
      }
    }
    checkUserData();
  }, []);
  async function saveFavRestaurant(data: FavRestaurantData) {
    const body = {
      user_id: currentUser._id,
      ...data,
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
    <span
      onClick={() => {
        setSpinner(true);
        setIsFavRestaurant((prevState) => {
          const restaurantData =
            singleRestaurantData ||
            multipleRestaurantData ||
            reviewRestaurantData;
          if (restaurantData) {
            if (prevState) {
              deleteFavRestaurant(restaurantData.place_id);
            } else {
              saveFavRestaurant({
                lat: restaurantData.geometry.location.lat,
                lng: restaurantData.geometry.location.lng,
                name: restaurantData.name,
                photo_reference: restaurantData.photos[0].photo_reference,
                place_id: restaurantData.place_id,
                price_level: restaurantData.price_level,
                rating: restaurantData.rating,
                types: [...restaurantData.types],
                vicinity: restaurantData.vicinity,
              });
            }
          } else if (favRestaurantData) {
            deleteFavRestaurant(favRestaurantData.place_id);
          }
          // TODO add error handling
          return !prevState;
        });
        setSpinner(false);
      }}
    >
      {isFavRestaurant ? (
        <HeartIcon src={heartFilled} />
      ) : (
        <HeartIcon src={heartEmpty} />
      )}
    </span>
  );
}
