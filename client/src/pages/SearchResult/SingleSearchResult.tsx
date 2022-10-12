import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../utils/serverCalls";
import { H1, H3, HeartEmpty, Wrapper, Dollar } from "./RobynStyles";
import heartEmpty from "../../assets/images/heart-empty.png";
import dollarEmpty from "../../assets/images/dollar-empty.png";
import dollarFilled from "../../assets/images/dollar-filled.png";
import HeartFavorite from "./HeartFavorite";
import { Button } from "../../components";

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
      <Wrapper>
        <H1>
          {restaurantData.name}
          <HeartFavorite
            selectedHeart={selectedHeart}
            setSelectedHeart={setSelectedHeart}
          ></HeartFavorite>
        </H1>
        {/* <p>Restaurant Place_id: {restaurantData.place_id}</p> */}
        {/* add $$$$ symbol */}

        <p>
          {restaurantData.price_level}
          <Dollar src={dollarFilled} />
          <Dollar src={dollarEmpty} />
          <Dollar src={dollarEmpty} />
          <Dollar src={dollarEmpty} />
        </p>
        <p>
          <a href={restaurantData.url} rel="noreferrer" target="_blank">
            {restaurantData.vicinity}
          </a>
        </p>
        <p>{restaurantData.formatted_phone_number}</p>
        <p>Google Rating: {restaurantData.rating}</p>
        <p>Healthy App Rating:</p>
        <p>
          Restaurant Website URL:{" "}
          <a href={restaurantData.website} rel="noreferrer" target="_blank">
            {restaurantData.website}
          </a>
        </p>
        <div>
          <H3>Photos</H3>
          <hr />
        </div>
        <div>
          <H3>User Reviews</H3>
          <hr />
          <button>Write Review</button>
        </div>
      </Wrapper>
    </>
  );
}
