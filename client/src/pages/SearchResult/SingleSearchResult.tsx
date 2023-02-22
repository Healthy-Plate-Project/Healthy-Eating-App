import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../utils/serverCalls";
import {
  H1,
  H3,
  Wrapper,
  PriceContainer,
  PriceIconStyled,
} from "./SingleSearchResultStyles";
import dollarFilled from "../../assets/images/green-dollar.svg";
import { GooglePhoto } from "../../components/Photo/Photo";
import {
  FavRestaurantData,
  GoogleResultPhoto,
  SingleGoogleResultData,
} from "../../utils/globalInterfaces";
import { FavoriteIcon } from "../../components/Icon/FavoriteIcon";
import { GalleryStyled } from "../../components/Photo/PhotoGalleryStyles";
import { Gallery } from "../../components/Photo/Gallery";
import { PriceLevel } from "../../components/Icon/PriceLevel";

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
    {} as SingleGoogleResultData
  );

  const [photoArray, setPhotoArray] = useState([] as string[]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRestaurant(place_id);
        setRestaurantData(data.result);
        buildPhotoArray(data.result.photos);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [place_id, currentUser]);

  function buildPhotoArray(array: GoogleResultPhoto[]) {
    let tempArray: string[] = [];
    if (Array.isArray(array)) {
      array.forEach((photo) => {
        tempArray.push(photo.photo_reference);
      });
    }
    setPhotoArray(tempArray);
  }

  return (
    <>
      <Wrapper>
        {/* <div id="top-photo">
          <GooglePhoto
            photo_reference={photoArray[0]}
            max_height="500"
            max_width="500"
            alt={restaurantData.name}
          ></GooglePhoto>
        </div> */}

        <H1>
          {restaurantData.name}
          <FavoriteIcon
            singleRestaurantData={restaurantData}
            currentUser={currentUser}
            currentUserTrigger={currentUserTrigger}
            setCurrentUserTrigger={setCurrentUserTrigger}
          ></FavoriteIcon>
        </H1>
        {/* no overload matches this call error with priceLevel() */}
        <PriceLevel priceLevel={restaurantData.price_level}></PriceLevel>
        <p>
          <a href={restaurantData.url} rel="noreferrer" target="_blank">
            {restaurantData.vicinity}
          </a>
        </p>
        <p>{restaurantData.formatted_phone_number}</p>
        <p>Google Rating: {restaurantData.rating}</p>
        <p>Healthy App Rating:</p>
        <p>
          {/* Restaurant Website URL:{" "}
          <a href={restaurantData.website} rel="noreferrer" target="_blank">
            {restaurantData.website}
          </a> */}
        </p>
        <div>
          {/* <H3>Photos</H3> */}
          <hr />
          <Gallery photoArray={photoArray}></Gallery>
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
