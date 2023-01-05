import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
import { GooglePhoto } from "../../components/Photo/Photo";

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

export interface FavRestaurantData {
  name: string;
  place_id: string;
  vicinity: string;
  price_level?: number;
}

type SingleSearchResultPageProps = {
  currentUser: {
    id: string;
    fav_restaurants?: [FavRestaurantData];
  };
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function SingleSearchResultPage({
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: SingleSearchResultPageProps) {
  const { place_id } = useParams();

  const [restaurantData, setRestaurantData] = useState(
    {} as SingleRestaurantData
  );
  const [isFavRestaurant, setIsFavRestaurant] = useState(false);
  const location = useLocation();

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
  }, [place_id, currentUser]);

  useEffect(() => {
    function checkUserData() {
      if (place_id && currentUser.fav_restaurants) {
        for (let i = 0; i < currentUser.fav_restaurants.length; i++) {
          const place = currentUser.fav_restaurants[i];
          if (place.place_id === place_id) {
            setIsFavRestaurant(true);
            break;
          }
        }
      }
    }
    checkUserData();
  }, [location, restaurantData]);

  async function saveFavRestaurant(data: FavRestaurantData) {
    await saveFavRestaurantByUser(currentUser.id, data);
    setCurrentUserTrigger(!currentUserTrigger);
  }

  async function deleteFavRestaurant(data: FavRestaurantData) {
    await deleteFavRestaurantByUser(currentUser.id, data);
    setCurrentUserTrigger(!currentUserTrigger);
  }

  // look at this object in the console to see what data is available to use
  // console.log(restaurantData);

  function priceLevel() {
    const array = [];
    for (let i = 1; i <= restaurantData.price_level; i++) {
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
                  ? deleteFavRestaurant({
                      name: restaurantData.name,
                      place_id: restaurantData.place_id,
                      vicinity: restaurantData.vicinity,
                      price_level: restaurantData.price_level,
                    })
                  : saveFavRestaurant({
                      name: restaurantData.name,
                      place_id: restaurantData.place_id,
                      vicinity: restaurantData.vicinity,
                      price_level: restaurantData.price_level,
                    });
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
