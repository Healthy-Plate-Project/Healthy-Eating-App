import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getRestaurants } from "../../utils/serverCalls";
import { GooglePhoto } from "../Photo/Photo";

import {
  CardStyled,
  Img,
  Body,
  Title,
  P,
  Details,
  Price,
  Rating,
  Menu,
  Directions,
} from "./RestaurantsResultsStyles";

export interface RestaurantData {
  name: string;
  place_id: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  vicinity: string;
  formatted_phone_number: string;
  price_level: number;
  rating: number;
  url: string;
  website: string;
  opening_hours: {
    weekday_text: [string];
  };
  photos: [RestaurantPhotos];
  special_diet_ratings?: {
    dairy_free?: number;
    gluten_free?: number;
    nut_free?: number;
    pescatarian?: number;
    vegan?: number;
    vegetarian?: number;
  };
}

export interface RestaurantPhotos {
  height: number;
  html_attributions: string;
  photo_reference: string;
  width: number;
}

export function RestaurantsResults() {
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
    [] as RestaurantData[]
  );

  useEffect(() => {
    async function fetchData() {
      try {
        let payload = {
          latitude,
          longitude,
          keyword,
          max_price,
          min_price,
          radius,
          open_now,
        };

        let data = await getRestaurants(payload);
        setRestaurantsData(data.results);
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
