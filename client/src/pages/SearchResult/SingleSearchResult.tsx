import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../utils/serverCalls";
import {
  H1,
  H3,
  HeartIcon,
  Wrapper,
  PriceContainer,
  PriceIconStyled,
  FeaturedPhoto,
} from "./SingleSearchResultStyles";
import heartEmpty from "../../assets/images/heart-empty.svg";
import heartFilled from "../../assets/images/heart-filled.svg";
import dollarFilled from "../../assets/images/green-dollar.svg";
import GooglePhoto from "../../components/Photo/Photo";

interface RestaurantPhoto {
  photo_reference: string;
}

export interface SingleRestaurantData {
  name: string;
  photo_reference: string;
  photos: [RestaurantPhoto];
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
        // TODO: add heart api later
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [place_id]);

  // default should be no, not favorited. use boolean type. True is selected.
  const [heart, setHeart] = useState<boolean>(false);

  function renderPriceLevel() {
    const array = [];
    const dollarAPI = restaurantData.price_level;
    for (let i = 1; i <= dollarAPI; i++) {
      array.push(<PriceIconStyled src={dollarFilled} />);
    }
    return array;
  }

  function renderRestaurantPhotos(): any {
    return Array.isArray(restaurantData.photos)
      ? restaurantData.photos.map((photo, i) => (
          <GooglePhoto
            photo_reference={photo.photo_reference}
            max_height="100"
            max_width="auto"
            alt={`${restaurantData.name} - Photo# ${i + 1}`}
            key={`${restaurantData.name} - ${i}`}
          ></GooglePhoto>
        ))
      : null;
  }

  return (
    <Wrapper>
      
      <GooglePhoto
        photo_reference={restaurantData.photo_reference}
        max_height="200"
        max_width="auto"
        alt={restaurantData.name}
      ></GooglePhoto>
     
      <H1>
        {restaurantData.name}
        <span onClick={() => setHeart((prevState) => !prevState)}>
          {heart ? (
            <HeartIcon src={heartFilled} />
          ) : (
            <HeartIcon src={heartEmpty} />
          )}
        </span>
      </H1>
      <PriceContainer>{renderPriceLevel()}</PriceContainer>
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
        {renderRestaurantPhotos()}
      </div>
      <div>
        <H3>User Reviews</H3>
        <hr />
        <button>Write Review</button>
      </div>
    </Wrapper>
  );
}
