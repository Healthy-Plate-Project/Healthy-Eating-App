import React, { useEffect, useState } from "react";
import { FavRestaurantData, UserData } from "../../App";
// import { GooglePhoto } from "../Photo/Photo";

import {
  CardStyled,
  Body,
  Title,
  Details,
  Price,
  Rating,
  Directions,
} from "./FavRestaurantsResultsStyles";

type FavRestaurantResultsProps = {
  currentUser: {
    id: string;
    fav_restaurants?: [FavRestaurantData];
  };
};

export function FavRestaurantsResults({
  currentUser,
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
              {/* <GooglePhoto
                photo_reference={restaurant.photos[0].photo_reference}
                max_height="100"
                max_width="150"
                alt={restaurant.name}
              ></GooglePhoto> */}
              <Body>
                <a href={`/single-result/${restaurant.place_id}`}>
                  <Title className="card-title"> {restaurant.name} </Title>
                </a>
                <Details>
                  <Price className="card-price">
                    Price Level: {restaurant.price_level}
                  </Price>
                  {/* <Rating className="card-rating">
                    Google Rating: {restaurant.rating}
                  </Rating> */}

                  <Directions className="card-directions">
                    <a href="directions_url"></a>{" "}
                  </Directions>
                </Details>
              </Body>
            </CardStyled>
          );
        })}
      </ul>
    </div>
  );
}
