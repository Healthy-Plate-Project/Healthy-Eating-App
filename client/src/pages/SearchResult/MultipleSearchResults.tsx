import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/ButtonStyles";
import { FavoriteIcon } from "../../components/Icon/FavoriteIcon";
import { GooglePhoto } from "../../components/Photo/Photo";
import { FullPageSpinner } from "../../components/Spinner/Spinner";
import {
  MultipleGoogleResultData,
  UserData,
} from "../../utils/globalInterfaces";
import { API, apiCall } from "../../utils/serverCalls";
import {
  CardStyled,
  Body,
  Title,
  Details,
  Price,
  Rating,
  Directions,
} from "./MulitpleSearchResultsStyles";

type MulitpleSearchResultsPageProps = {
  currentUser: UserData;
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};
export function MulitpleSearchResultsPage({
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: MulitpleSearchResultsPageProps) {
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
    [] as MultipleGoogleResultData[]
  );
  let navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const body = {
          latitude,
          longitude,
          keyword,
          max_price,
          min_price,
          radius,
          open_now,
        };
        const data = await apiCall(API.getRestaurants, body);
        setRestaurantsData(data);
        setSpinner(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  const [spinner, setSpinner] = useState(true);
  if (spinner) {
    return <FullPageSpinner />;
  }
  return (
    <div>
      <ul>
        {restaurantsData.map((restaurant) => {
          return (
            <>
              <CardStyled key={restaurant.place_id}>
                <GooglePhoto
                  photo_reference={restaurant.photos[0].photo_reference}
                  max_height="100"
                  max_width="150"
                  alt={restaurant.name}
                ></GooglePhoto>
                <Body>
                  <a href={`/single-result/${restaurant.place_id}`}>
                    <Title className="card-title"> {restaurant.name} </Title>
                  </a>
                  <Details>
                    <Price className="card-price">
                      Price Level: {restaurant.price_level}
                    </Price>
                    <Rating className="card-rating">
                      Google Rating: {restaurant.rating}
                    </Rating>
                    <Directions className="card-directions">
                      <a href="directions_url"></a>{" "}
                    </Directions>
                    <FavoriteIcon
                      multipleRestaurantData={restaurant}
                      currentUser={currentUser}
                      currentUserTrigger={currentUserTrigger}
                      setCurrentUserTrigger={setCurrentUserTrigger}
                    ></FavoriteIcon>
                  </Details>
                </Body>
              </CardStyled>
              <Button
                type="button"
                onClick={() => {
                  navigate(`/create-review/${restaurant.place_id}`);
                }}
              >
                Create Review
              </Button>
            </>
          );
        })}
      </ul>
    </div>
  );
}
