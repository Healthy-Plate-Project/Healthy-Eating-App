import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchWrapper } from "./SearchStyles";
import { convertMilesToMeters } from "../../utils/helpers";
import { SearchButton } from "../Button/ButtonStyles";
import { PrimaryInput } from "../Input/InputStyles";

export function Search() {
  const [keyword, setKeyword] = useState("");

  // function to get the current location of user, uses GPS if on a mobile device
  function getCurrentPos() {
    function success(position: GeolocationPosition) {
      const latitude = position.coords.latitude.toString();
      const longitude = position.coords.longitude.toString();
      const open_now = "true";
      const radius = convertMilesToMeters(25).toString();
      let url = `multiple-results/${latitude}/${longitude}/${keyword}/1/4/${radius}/${open_now}`;
      routeChange(url);
    }
    function error() {
      navigate("error");
      console.log("Error: Geolocation server is down");
    }
    if (!navigator.geolocation) {
      navigate("error");
      console.log("Error: Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  let navigate = useNavigate();

  function routeChange(url: string | undefined) {
    if (url) {
      navigate(url);
    } else {
      console.log("Error: Invalid URL");
    }
  }

  return (
    <SearchWrapper>
      <PrimaryInput
        placeholder="Keyword"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <SearchButton
        name="current-location-search-button"
        onClick={() => getCurrentPos()}
      >
        Search
      </SearchButton>
    </SearchWrapper>
  );
}
