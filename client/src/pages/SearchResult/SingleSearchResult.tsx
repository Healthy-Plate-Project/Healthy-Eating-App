import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../utils/serverCalls";

export interface SingleRestaurantData {
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
    weekday_text: [string]
  };
  special_diet_ratings?: {
    dairy_free?: number;
    gluten_free?: number;
    nut_free?: number;
    pescatarian?: number;
    vegan?: number;
    vegetarian?: number;
  };
}

export function SingleSearchResultPage() {
  const { place_id } = useParams();

  const [restaurantData, setRestaurantData] = useState(
    {} as SingleRestaurantData
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRestaurant(place_id);
        setRestaurantData(data.result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [place_id]);

  // look at this object in the console to see what data is available to use
  // console.log(restaurantData);

  return (
    <>
      <p>Restaurant Name: {restaurantData.name}</p>
      <p>Restaurant Place_id: {restaurantData.place_id}</p>
      <p>Restaurant Price Level: {restaurantData.price_level}</p>
      <p>Restaurant Address: {restaurantData.vicinity}</p>
      <p>Restaurant Phone: {restaurantData.formatted_phone_number}</p>
      <p>Restaurant Average Rating: {restaurantData.rating}</p>
      <p>Restaurant Maps URL: {restaurantData.url}</p>
      <p>Restaurant Website URL: {restaurantData.website}</p>
    </>
  );
}
