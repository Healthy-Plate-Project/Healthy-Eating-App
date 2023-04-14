import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/ButtonStyles";
import { FavoriteIcon } from "../../components/Icon/FavoriteIcon";
import { GooglePhoto } from "../../components/Photo/Photo";
import { Restaurant, UserData } from "../../utils/globalInterfaces";
import {
  CardStyled,
  Body,
  Title,
  Details,
  Price,
  Rating,
} from "./MulitpleSearchResultsStyles";

type MulitpleResultsProps = {
  restaurants: Restaurant[];
  currentUser: UserData;
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function MulitpleResults({
  restaurants,
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: MulitpleResultsProps) {
  let navigate = useNavigate();

  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => {
          return (
            <div key={restaurant.place_id}>
              <CardStyled>
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
                    <FavoriteIcon
                      restaurant={restaurant}
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
            </div>
          );
        })}
      </ul>
    </div>
  );
}
