import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  MultipleGoogleResultData,
  UserData,
} from "../../utils/globalInterfaces";
import { apiCall, API } from "../../utils/serverCalls";
import { FavoriteIcon } from "../FavoriteIcon/FavoriteIcon";
import { GooglePhoto } from "../Photo/Photo";

import {
  CardStyled,
  Body,
  Title,
  Details,
  Price,
  Rating,
  Directions,
} from "./MulitpleSearchResultsStyles";

type MulitpleSearchResultsPageProps = {
  currentUser: UserData;
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function MulitpleSearchResultsPage({
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: MulitpleSearchResultsPageProps) {
  const {
    latitude,
    longitude,
    keyword,
    max_price,
    min_price,
    radius,
    open_now,
  } = useParams();

  const [restaurantsData, setRestaurantsData] = useState(
    [] as MultipleGoogleResultData[]
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const body = {
          latitude,
          longitude,
          keyword,
          max_price,
          min_price,
          radius,
          open_now,
        };
        const data = await apiCall(API.getRestaurants, body);
        data ? setRestaurantsData(data) : setRestaurantsData([]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {restaurantsData.map((restaurant) => {
          return (
            <CardStyled key={restaurant.place_id}>
              <GooglePhoto
                photo_reference={restaurant.photos[0].photo_reference}
                max_height="100"
                max_width="150"
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

                  <a href={`/create-review/${restaurant.place_id}`}>
                    <p className="card-title">Leave Review</p>
                  </a>

                  <Directions className="card-directions">
                    <a href="directions_url"></a>{" "}
                  </Directions>
                </Details>
                <FavoriteIcon
                  multipleRestaurantData={restaurant}
                  currentUser={currentUser}
                  currentUserTrigger={currentUserTrigger}
                  setCurrentUserTrigger={setCurrentUserTrigger}
                ></FavoriteIcon>
              </Body>
            </CardStyled>
          );
        })}
      </ul>
    </div>
  );
}
