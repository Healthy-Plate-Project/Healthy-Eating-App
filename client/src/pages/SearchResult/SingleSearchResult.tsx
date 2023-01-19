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
import { PhotoGalleryStyled } from "./PhotoGalleryStyles";

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

  function priceLevel() {
    const array = [];
    for (let i = 1; i <= restaurantData.price_level; i++) {
      array.push(<PriceIconStyled src={dollarFilled} />);
    }
  }

  function buildPhotoArray(array: GoogleResultPhoto[]) {
    let tempArray: string[] = [];
    if (Array.isArray(array)) {
      array.forEach((photo) => {
        tempArray.push(photo.photo_reference);
      });
    }
    setPhotoArray(tempArray);
  }

  const [photoToShow, setPhotoToShow] = useState("");
  const [lightboxDisplay, setLightboxDisplay] = useState(false);

  //function to show a specific photo in the lightbox, amd make lightbox visible
  const showPhoto = (photo: string) => {
    setPhotoToShow(photo);
    setLightboxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightboxDisplay(false);
  };

  //show next photo in lightbox
  const showNext = (e: any) => {
    e.stopPropagation();
    let currentIndex = photoArray.indexOf(photoToShow);
    if (currentIndex >= photoArray.length - 1) {
      setLightboxDisplay(false);
    } else {
      let nextPhoto = photoArray[currentIndex + 1];
      setPhotoToShow(nextPhoto);
    }
  };

  //show previous photo in lightbox
  const showPrev = (e: any) => {
    e.stopPropagation();
    let currentIndex = photoArray.indexOf(photoToShow);
    if (currentIndex <= 0) {
      setLightboxDisplay(false);
    } else {
      let nextPhoto = photoArray[currentIndex - 1];
      setPhotoToShow(nextPhoto);
    }
  };

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
        {/* <PriceContainer>{priceLevel()}</PriceContainer> */}
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
          <PhotoGalleryStyled>
            <div id="photo-gallery-wrapper">
              {photoArray.map((photo: string) => {
                return (
                  <GooglePhoto
                    className="photo-card"
                    onClick={() => showPhoto(photo)}
                    photo_reference={photo}
                    max_width="290"
                    max_height="290"
                    alt="Test Photos"
                    key={photo}
                  ></GooglePhoto>
                );
              })}

              {lightboxDisplay ? (
                <div id="lightbox" onClick={hideLightBox}>
                  <button onClick={showPrev}>⭠</button>
                  <GooglePhoto
                    id="lightbox-img"
                    // className="photo-card"
                    photo_reference={photoToShow}
                    max_width="800"
                    max_height="800"
                    alt="Test Photos"
                  ></GooglePhoto>
                  <button onClick={showNext}>⭢</button>
                </div>
              ) : (
                ""
              )}
            </div>
          </PhotoGalleryStyled>
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
