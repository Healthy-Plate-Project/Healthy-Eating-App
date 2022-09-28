import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import SearchWrapper from "./SearchStyles";
import { convertMilesToMeters } from "../../utils/helpers";

export default function Search() {

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
    function error() { return "Error: Geolocation server is down" };
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
      console.log('ERROR')
    }
  };

  return (
    <SearchWrapper>
      <Input /> <Button content="Search" name="search" />
      <button
        name="current-location-search-button"
        onClick={() => getCurrentPos().then(() => routeChange())}
      >
        GPS Location Search
      </button>
    </SearchWrapper>
  );
}
