import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../utils/serverCalls";
import { H1, HeartEmpty } from "./RobynStyles";
import heartEmpty from "../../assets/images/heart-empty.png";
import HeartFavorite from "./HeartFavorite";

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
    weekday_text: [string];
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

  // default should be no, not favorited. use boolean. yes is selected.
  const [selectedHeart, setSelectedHeart] = useState<number>();

  return (
    <>
      <H1>
        {restaurantData.name}
        <HeartFavorite
          selectedHeart={selectedHeart}
          setSelectedHeart={setSelectedHeart}
        ></HeartFavorite>
      </H1>
      <p>Restaurant Place_id: {restaurantData.place_id}</p>
      {/* add $$$$ symbol */}
      <p>Restaurant Price Level: {restaurantData.price_level}</p>
      <p>Restaurant Address: {restaurantData.vicinity}</p>
      <p>Restaurant Phone: {restaurantData.formatted_phone_number}</p>
      <p>Restaurant Average Rating: {restaurantData.rating}</p>
      <p>Restaurant Maps URL: {restaurantData.url}</p>
      <p>Restaurant Website URL: {restaurantData.website}</p>
    </>
  );
}
