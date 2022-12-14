import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchWrapper } from "./SearchStyles";
import { convertMilesToMeters } from "../../utils/helpers";
import { SearchButton } from "../Button/ButtonStyles";
import { PrimaryInput, SmallInput } from "../Input/InputStyles";

export function Search() {
  const [search, setSearch] = useState("" as string | undefined);

  // function to get the current location of user, uses GPS if on a mobile device
  async function getCurrentPos() {
    function success(position: GeolocationPosition) {
      const latitude = position.coords.latitude.toString();
      const longitude = position.coords.longitude.toString();
      const open_now = "true";
      const radius = convertMilesToMeters(25).toString();
      let url = `results/${latitude}/${longitude}/${open_now}/${radius}`;
      setSearch(url as string);
    }
    function error() {
      return "Error: Geolocation server is down";
    }
    if (!navigator.geolocation) {
      return "Error: Geolocation is not supported by your browser";
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  let navigate = useNavigate();
  const routeChange = () => {
    if (search) {
      let path = `${search}`;
      navigate(path);
    } else {
      console.log("ERROR");
    }
  };

  return (
    <SearchWrapper>
      <PrimaryInput placeholder="Primary input" />
      <SmallInput placeholder="Small input" />
      <SearchButton>Search</SearchButton>
      <SearchButton
        name="current-location-search-button"
        onClick={() => getCurrentPos().then(() => routeChange())}
      >
        GPS Location Search
      </SearchButton>
    </SearchWrapper>
  );
}
