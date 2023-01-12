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
} from "./SingleSearchResultStyles";
import heartEmpty from "../../assets/images/heart-empty.svg";
import heartFilled from "../../assets/images/heart-filled.svg";
import dollarFilled from "../../assets/images/green-dollar.svg";
import { GooglePhoto } from "../../components/Photo/Photo";
import { PhotoGalleryStyled } from "./PhotoGalleryStyles";

export interface RestaurantPhoto {
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

export function SingleSearchResultPage({ currentUser }: any) {
  const { place_id } = useParams();

  const [restaurantData, setRestaurantData] = useState(
    {} as SingleRestaurantData
  );

  const [photoArray, setPhotoArray] = useState([] as string[]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRestaurant(place_id);
        setRestaurantData(data.result);
        buildPhotoArray(data.result.photos);
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
    const dollarAPI = restaurantData.price_level;
    return Array.from({ length: dollarAPI }, (_, i) => (
      <PriceIconStyled key={i} src={dollarFilled} />
    ));
  }

  function buildPhotoArray(array: RestaurantPhoto[]) {
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
    <Wrapper>
      <GooglePhoto
        photo_reference={photoArray[0]}
        max_height="200"
        max_width="400"
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
        <PhotoGalleryStyled>
          <div id="photo-gallery-wrapper">
            {photoArray.map((photo: string) => {
              return (
                <GooglePhoto
                  className="photo-card"
                  onClick={() => showPhoto(photo)}
                  photo_reference={photo}
                  max_width="500"
                  max_height="500"
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
                  className="photo-card"
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

      <h3>User Reviews</h3>
      <button>Write Review</button>
    </Wrapper>
  );
}
