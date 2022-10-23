import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../utils/serverCalls";
import {
  H1,
  H3,
  HeartIcon,
  Wrapper,
  DollarStyle,
} from "./SingleSearchResultStyles";
import heartEmpty from "../../assets/images/heart-empty.svg";
import heartFilled from "../../assets/images/heart-filled.svg";
import dollarFilled from "../../assets/images/green-dollar.svg";
// import { Button } from "../../components";

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

export function SingleSearchResultPage() {
  const { place_id } = useParams();

  const [restaurantData, setRestaurantData] = useState(
    {} as SingleRestaurantData
  );

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
  }, [place_id]);

  // look at this object in the console to see what data is available to use
  // console.log(restaurantData);

  // default should be no, not favorited. use boolean type. True is selected.
  const [heart, setHeart] = useState<boolean>(false);
  const prevState = "";

  // BEGIN DOLLAR DYNAMICS
  let dollarAPI = restaurantData.price_level;

  // add esclamation point at end of parent here to remove TS error "object possibly null" to say that i'm sure dollar id exists
  let parent = document.getElementById("dollar")!,
    imageSrc = dollarFilled,
    img;

  let test = 4;
  // repeat dollar signs based on dollarAPI number.
  for (let i = 0; i <= dollarAPI; i++) {
    img = new Image();
    img.src = imageSrc;
    img.alt = "icon";
    img.className = "myDollar";
    parent.appendChild(img);
  }

  console.log("dollarAPI: " + dollarAPI);
  console.log("Test: " + test);

  return (
    <>
      <Wrapper>
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
        {/* <p>Restaurant Place_id: {restaurantData.place_id}</p> */}
        {/* add $$$$ symbol */}
        <div>
          <span id="dollar"></span>
        </div>
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
