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
import { GooglePhoto } from "../../components/Photo/Photo";
import { PhotoGallery } from "../../components/Photo/PhotoGallery";

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

  const [restaurantPhotoArray, setRestaurantPhotoArray] = useState([] as RestaurantPhoto[]);
  const [photoArray, setPhotoArray] = useState([] as string[]);
  const [effectRan, setEffectRan] = useState(false);

  // const testArray = [
  //   "ARywPAK8tVaBl3Q2Jcj7ApRuLBwqYzmzxQtzFuqBx1TdL_Fd3A…_13XXQxhv42azsy6SPwncM_UdLbLICZYONh-ouT1PkfMCIEHQ",
  //   "ARywPAL6ZwhSbxY3-NQ50YO9HA73ZLyty2CEeHe-x5-qJvPke-…HzeNBQYy5VNff2pTNnq29Cvub7BPtBlktl08ORceI-CzntEcg",
  //   "ARywPAKqbE1K_LPwd8ziHasBmEH-Sst-_DpJtgWi4RZNDzIgxe…zCSmy0Zbnbx07bmtNeQmwIJ4NX80-Vj8FTGk0aDLpvu1fms1M",
  //   "ARywPAJKQ-cZMqJruUbztiyy2CAjNhNTgkz-KgyCL_nNHfXdUy…hmBfGr1A-pVudjdkJF0NzFwAoloqwiug2maaKRj0ZfivlJYHN",
  //   "ARywPAKQIMJRLndVQ73L1xLS9uKO68OoHTpf94XWt-eT1GN6la…s-QYkgbTfGw7g88__yIIdqGDZ2i6UFxzvmcRtFKKOmBO_hMIt",
  //   "ARywPAJUt5uuc6j28-7aW2IWc83Aybtow-WFboNWjnW-XChVil…7y_Lso5ZqXYPNo1-2Tr_jWXdiSKaGTBosvEXhlam7THMRUtQU",
  //   "ARywPAIS6nDeAYiMB6ZSj4D_u4ZLId44uKhlevuNhqexSfLnHE…bnA-RlRSLdbDX4iFe_JAEu6Aq4j2XqoaqSA7UPJdXtKdaTXvs",
  //   "ARywPAIpCOdVfH7Nb4bNKp9SAshZyXWbbsgp2Q0bYLA63CZ2z0…r4A0qtcolPq0haKhm3rZyAR78DGjg4W9vJmxfdEiJqRPJREv0",
  //   "ARywPAIXvsUyUngEde4iCHShccq6BcJ2kqTDZXE4vPHYVV9_Wq…RmrEuYr3083TQ2HYYJEjHjB2JZrJma4E7ovUxdd3GhtkIZthI",
  //   "ARywPALstzS8UbJtJ3iW8Yaz6HSJi46-EMSx9DY15xUOQ_w3sK…TyQUZCWDo07quTcxQBSz3NewmUgvEEjcxdIGIFLgt31I_ng-s",
  // ];

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRestaurant(place_id);
        setRestaurantData(data.result);
        buildPhotoArray(data.result.photos);
        setEffectRan(true);
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
    if (Array.isArray(restaurantPhotoArray)) {
      restaurantPhotoArray.forEach((photo) => {
        tempArray.push(photo.photo_reference);
      });
    }
    setPhotoArray(tempArray);
  }

  // function renderRestaurantPhotos(): any {
  //   return Array.isArray(restaurantData.photos)
  //     ? restaurantData.photos.map((photo, i) => (
  //         <GooglePhoto
  //           photo_reference={photo.photo_reference}
  //           max_height="100"
  //           max_width="auto"
  //           alt={`${restaurantData.name} - Photo# ${i + 1}`}
  //           key={`${restaurantData.name} - ${i}`}
  //         ></GooglePhoto>
  //       ))
  //     : null;
  // }

  return (
    <Wrapper>
      <GooglePhoto
        photo_reference={restaurantData.photo_reference}
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
        {effectRan ? (
          <PhotoGallery photoArray={photoArray}></PhotoGallery>
        ) : null}

        {/* {renderRestaurantPhotos()} */}
      </div>

      <h3>User Reviews</h3>
      <button>Write Review</button>
    </Wrapper>
  );
}
