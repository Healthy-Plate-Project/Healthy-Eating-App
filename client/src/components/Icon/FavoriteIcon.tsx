import React, { useEffect, useState } from "react";
import { HeartIcon } from "../../pages/SearchResult/SingleSearchResultStyles";
import {
  FavRestaurantData,
  MultipleGoogleResultData,
  SingleGoogleResultData,
} from "../../utils/globalInterfaces";
import {
  saveFavRestaurantByUser,
  deleteFavRestaurantByUser,
} from "../../utils/serverCalls";
import heartEmpty from "../../assets/images/heart-empty.svg";
import heartFilled from "../../assets/images/heart-filled.svg";

type FavoriteIconProps = {
  singleRestaurantData?: SingleGoogleResultData;
  multipleRestaurantData?: MultipleGoogleResultData;
  favRestaurantData?: FavRestaurantData;
  currentUser: {
    id: string;
    fav_restaurants?: [FavRestaurantData];
  };
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function FavoriteIcon({
  singleRestaurantData,
  multipleRestaurantData,
  favRestaurantData,
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: FavoriteIconProps) {
  const [isFavRestaurant, setIsFavRestaurant] = useState(false);
  useEffect(() => {
    function checkUserData() {
      const restaurantData =
        singleRestaurantData || multipleRestaurantData || favRestaurantData;
      if (restaurantData && currentUser.fav_restaurants) {
        const isFavRestaurant = currentUser.fav_restaurants.some(
          (place) => place.place_id === restaurantData.place_id
        );
        setIsFavRestaurant(isFavRestaurant);
      }
    }
    checkUserData();
  }, []);
  async function saveFavRestaurant(data: FavRestaurantData) {
    await saveFavRestaurantByUser(currentUser.id, data);
    setCurrentUserTrigger(!currentUserTrigger);
  }
  async function deleteFavRestaurant(place_id: string) {
    await deleteFavRestaurantByUser(currentUser.id, place_id);
    setCurrentUserTrigger(!currentUserTrigger);
  }
  return (
    <span
      onClick={() =>
        setIsFavRestaurant((prevState) => {
          const restaurantData = singleRestaurantData || multipleRestaurantData;
          if (restaurantData) {
            if (prevState) {
              deleteFavRestaurant(restaurantData.place_id);
            } else {
              saveFavRestaurant({
                lat: restaurantData.geometry.location.lat,
                lng: restaurantData.geometry.location.lng,
                name: restaurantData.name,
                photo: restaurantData.photos[0].photo_reference,
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
          return !prevState;
        })
      }
    >
      {isFavRestaurant ? (
        <HeartIcon src={heartFilled} />
      ) : (
        <HeartIcon src={heartEmpty} />
      )}
    </span>
  );
}
