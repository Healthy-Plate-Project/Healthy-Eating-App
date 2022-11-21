import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getRestaurants } from "../../utils/serverCalls";

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
  photos: [
    {
      height: number;
      html_attributions: [string];
      photo_reference: string;
      width: number;
    }
  ];
  special_diet_ratings?: {
    dairy_free?: number;
    gluten_free?: number;
    nut_free?: number;
    pescatarian?: number;
    vegan?: number;
    vegetarian?: number;
  };
}

export function RestaurantsResult() {
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
              <Img className="card-img" />
              <Body>
                <Title className="card-title"> {restaurant.name} </Title>
                <P className="card-body"> Tagline, description, etc.</P>
                <Details>
                  <Price className="card-price">
                    Price Level: {restaurant.price_level}
                  </Price>
                  <Rating className="card-rating">
                    Rating:{restaurant.rating}
                  </Rating>
                  <Menu className="card-menu">
                    <a href="menu_url">Menu</a>{" "}
                  </Menu>
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
