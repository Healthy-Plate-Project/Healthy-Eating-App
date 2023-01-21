import React, { useEffect, useState } from "react";
import { FavRestaurantData } from "../../utils/globalInterfaces";
import { GooglePhoto } from "../../components/Photo/Photo";
import {
  CardStyled,
  Body,
  Title,
  Details,
  Price,
  Directions,
  Rating,
} from "./MulitpleSearchResultsStyles";
import { FavoriteIcon } from "../../components/Icon/FavoriteIcon";

type FavRestaurantResultsProps = {
  currentUser: {
    id: string;
    fav_restaurants?: [FavRestaurantData];
  };
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function FavRestaurantsResults({
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: FavRestaurantResultsProps) {
  const [favRestaurants, setFavRestaurants] = useState(
    [] as FavRestaurantData[]
  );
  useEffect(() => {
    function checkUserData() {
      if (currentUser.fav_restaurants) {
        setFavRestaurants(currentUser.fav_restaurants);
      }
    }
    checkUserData();
  }, [currentUser]);
  return (
    <div>
      <ul>
        {favRestaurants.map((restaurant: FavRestaurantData, i) => {
          return (
            <CardStyled key={`${restaurant.place_id}-${i}`}>
              <GooglePhoto
                photo_reference={restaurant.photo}
                max_height="200"
                max_width="200"
                alt={restaurant.name}
              ></GooglePhoto>
              <Body>
                <a href={`/single-result/${restaurant.place_id}`}>
                  <Title className="card-title"> {restaurant.name} </Title>
                </a>
                <Details>
                  <Price className="card-price">
                    Price Level: {restaurant.price_level}
                  </Price>
                  <Rating className="card-rating">
                    Google Rating: {restaurant.rating}
                  </Rating>
                  <Directions className="card-directions">
                    <a href="directions_url"></a>{" "}
                  </Directions>
                  <FavoriteIcon
                    favRestaurantData={restaurant}
                    currentUser={currentUser}
                    currentUserTrigger={currentUserTrigger}
                    setCurrentUserTrigger={setCurrentUserTrigger}
                  ></FavoriteIcon>
                </Details>
              </Body>
            </CardStyled>
          );
        })}
      </ul>
    </div>
  );
}
