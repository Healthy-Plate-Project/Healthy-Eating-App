import React, { useEffect, useState } from "react";
import { ResultStyled, ItemStyled, ItemDetail } from "./SearchResultStyled";
import { getRestaurants } from "../../utils/serverCalls";
import { Link, useParams } from "react-router-dom";

export interface SearchParams {
  latitude: string;
  longitude: string;
  keyword?: string;
  max_price?: number;
  min_price?: number;
  open_now?: string;
  radius?: number;
}

export interface RestaurantData {
  name: string;
  place_id: string;
  latitude: string;
  longitude: string;
  distanceFromLocation: string;
  price_level: number;
  vicinity: string;
  google_rating: number;
  smallLogo?: string;
  icon?: string;
  favorite?: boolean;
  special_diet_ratings?: {
    dairy_free?: number;
    gluten_free?: number;
    nut_free?: number;
    pescatarian?: number;
    vegan?: number;
    vegetarian?: number;
  };
}

export function Result() {
  const { latitude, longitude, open_now, radius } = useParams();

  const [restaurantData, setRestaurantData] = useState([] as RestaurantData[]);

  useEffect(() => {
    async function fetchData() {
      try {
        const payload = {
          latitude: latitude,
          longitude: longitude,
          open_now: open_now,
          radius: radius,
        };
        const data = await getRestaurants(payload);
        setRestaurantData(data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [latitude, longitude, open_now, radius]);

  // look at this object in the console to see what data is available to use
  // console.log(restaurantData);

  const payloadList = restaurantData.map((place) => {
    return (
      <ItemStyled key={place.place_id}>
        <Link to={`/single-result/${place.place_id}`}>
          <h2 style={{ cursor: "pointer" }}>{place.name}</h2>
        </Link>
        <ItemDetail>
          <h2>{place.vicinity}</h2>
          <h2>{place.price_level}</h2>
        </ItemDetail>
      </ItemStyled>
    );
  });

  return <ResultStyled>{payloadList}</ResultStyled>;
}
