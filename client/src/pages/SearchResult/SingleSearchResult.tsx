import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { FavoriteIcon } from "../../components/Icon/FavoriteIcon";
import { FullPageSpinner } from "../../components/Spinner/Spinner";
import { Button } from "../../components/Button/ButtonStyles";


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
  let navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiCall(API.getRestaurant, { place_id });
        setRestaurantData(data);
        setSpinner(false);
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
  const [spinner, setSpinner] = useState(true);
  if (spinner) {
    return <FullPageSpinner />;
  }
  return (
    <>
      <GooglePhoto
        photo_reference={restaurantData.photos[0].photo_reference}
        max_height="200"
        max_width="200"
        alt={restaurantData.name}
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
          <span className="material-symbols-outlined">location_on</span>
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
        </div>
        <Button
          type="button"
          onClick={() => {
            navigate(`/create-review/${restaurantData.place_id}`);
          }}
        >
          Create Review
        </Button>
      </Wrapper>
    </>
  );
}
