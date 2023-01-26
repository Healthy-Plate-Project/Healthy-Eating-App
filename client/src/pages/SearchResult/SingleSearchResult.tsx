import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCall, API } from "../../utils/serverCalls";
import {
  H1,
  H3,
  Wrapper,
  PriceContainer,
  PriceIconStyled,
} from "./SingleSearchResultStyles";
import dollarFilled from "../../assets/images/green-dollar.svg";
import { GooglePhoto } from "../../components/Photo/Photo";
import { SingleGoogleResultData, UserData } from "../../utils/globalInterfaces";
import { FavoriteIcon } from "../../components/FavoriteIcon/FavoriteIcon";

type SingleSearchResultPageProps = {
  currentUser: UserData;
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
    {} as SingleGoogleResultData
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiCall(API.getRestaurant, { place_id });
        setRestaurantData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [place_id, currentUser]);

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
          <FavoriteIcon
            singleRestaurantData={restaurantData}
            currentUser={currentUser}
            currentUserTrigger={currentUserTrigger}
            setCurrentUserTrigger={setCurrentUserTrigger}
          ></FavoriteIcon>
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
