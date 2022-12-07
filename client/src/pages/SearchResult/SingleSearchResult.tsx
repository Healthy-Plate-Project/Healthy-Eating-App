import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  deleteFavRestaurantByUser,
  getRestaurant,
  saveFavRestaurantByUser,
} from "../../utils/serverCalls";
import {
  H1,
  H3,
  HeartIcon,
  Wrapper,
  PriceContainer,
  PriceIconStyled,
} from "./SingleSearchResultStyles";
import heartEmpty from "../../assets/images/heart-empty.svg";
import heartFilled from "../../assets/images/heart-filled.svg";
import dollarFilled from "../../assets/images/green-dollar.svg";
import GooglePhoto from "../../components/Photo/Photo";

interface Props {
  // currentUser: any;
  currentUserFavRestaurants: string[];
  currentUser: string;
}

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

export function SingleSearchResultPage(props: Props) {
  const { place_id } = useParams();

  const [restaurantData, setRestaurantData] = useState(
    {} as SingleRestaurantData
  );
  const [isFavRestaurant, setIsFavRestaurant] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRestaurant(place_id);
        setRestaurantData(data.result);
        if (place_id) {
          if (props.currentUserFavRestaurants.includes(place_id)) {
            setIsFavRestaurant(true);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [place_id, props.currentUserFavRestaurants]);

  async function saveFavRestaurant(place_id: string) {
    await saveFavRestaurantByUser(props.currentUser, place_id);
  }

  async function deleteFavRestaurant(place_id: string) {
    await deleteFavRestaurantByUser(props.currentUser, place_id);
  }

  // look at this object in the console to see what data is available to use
  // console.log(restaurantData);

  // dollar
  let dollarAPI = restaurantData.price_level;

  function priceLevel() {
    const array = [];
    for (let i = 1; i <= dollarAPI; i++) {
      array.push(<PriceIconStyled src={dollarFilled} />);
    }
    return array;
  }

  return (
    <>
      <GooglePhoto
        photo_reference="AeJbb3c-bgyYnUUax8v4YhTdizGrze2zoTIi1t8p624sCqGNL5miCczS2411Vtwmk6TOanPRSuMI7v0TNA9nqAUgO5jd-TzceKD2w7winlJ7yaKlqZ1dCnfcJP9Qi6RqOAcrcYZpQbjx4aIveUeSQ5tCqMaQFFSn7pYiyH21bldC_oB75p50"
        max_height="500"
        max_width="500"
        alt="Test Photo"
      ></GooglePhoto>
      <Wrapper>
        <H1>
          {restaurantData.name}
          <span
            onClick={() =>
              setIsFavRestaurant((prevState) => {
                prevState
                  ? deleteFavRestaurant(restaurantData.place_id)
                  : saveFavRestaurant(restaurantData.place_id);
                return !prevState;
              })
            }
          >
            {isFavRestaurant ? (
              <HeartIcon src={heartFilled} />
            ) : (
              <HeartIcon src={heartEmpty} />
            )}
          </span>
        </H1>
        <PriceContainer>{priceLevel()}</PriceContainer>
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
