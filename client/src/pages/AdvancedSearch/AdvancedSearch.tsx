import React, { useState } from "react";
import {
  AdvancedSearchWrapper,
  Keyword,
  Location,
  Price,
  Open,
  Distance,
  DistanceSlider,
} from "./AdvancedSearchStyles";
import {
  GreenCheckIcon,
  GreyCheckIcon,
  PriceIcon,
  PriceIconFilled,
} from "../../assets/icons";
import { Button } from "../../components/Button/ButtonStyles";
import { PrimaryInput, SmallInput } from "../../components/Input/InputStyles";
import { convertMilesToMeters } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { API, apiCall } from "../../utils/serverCalls";
import { Header } from "../../components/Header/Header";

interface PriceSelection {
  min: number | undefined;
  max: number | undefined;
  toggle: boolean;
}

interface Geolocation {
  lat: number;
  lng: number;
}

const MaxDistance = 31;

export function AdvancedSearch() {
  const [keyword, setKeyword] = useState("");
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [distance, setDistance] = useState(MaxDistance);
  const [distanceSlider, setDistanceSlider] = useState(4);
  const [priceSelection, setPriceSelection] = useState({
    min: undefined,
    max: undefined,
    toggle: false,
  } as PriceSelection);
  const [openNow, setOpenNow] = useState(true);
  let navigate = useNavigate();

  function renderDistance() {
    const DistanceNumbers = [1, 5, 10, 20, MaxDistance];
    const MAX = 4;
    const backgroundSize = {
      backgroundSize: `${(distanceSlider * 100) / MAX}% 100%`,
    };
    const distanceText =
      distance === MaxDistance
        ? "Any"
        : distance === 1
        ? `${distance} mile`
        : `${distance} miles`;
    return (
      <Distance>
        <h2>Distance</h2>
        {distanceText}
        <br></br>
        <DistanceSlider>
          <input
            type="range"
            min="0"
            max={MAX}
            onChange={(e) => {
              setDistance(DistanceNumbers[parseInt(e.target.value)]);
              setDistanceSlider(parseInt(e.target.value));
            }}
            style={backgroundSize}
            value={distanceSlider}
          />
        </DistanceSlider>
      </Distance>
    );
  }

  function handlePriceSelection(selection: number) {
    setPriceSelection((prevState) => {
      const { min, max, toggle } = prevState;
      if (selection === min && selection === max) {
        return { min: undefined, max: undefined, toggle: false };
      }
      if (toggle) {
        if (min === undefined && max === undefined) {
          return { min: 1, max: selection, toggle: false };
        } else if (min && selection < min) {
          return { min: selection, max: max!, toggle: true };
        } else if (selection === max) {
          return { min: selection, max: selection, toggle: false };
        } else {
          return { min, max: selection, toggle: false };
        }
      } else {
        if (min === undefined && max === undefined) {
          return { min: 1, max: selection, toggle: false };
        } else if (max && selection > max) {
          return { min, max: selection, toggle: false };
        } else if (selection === min) {
          return { min: selection, max: selection, toggle: true };
        } else {
          return { min: selection, max, toggle: true };
        }
      }
    });
  }

  function renderPriceSelection() {
    const prices = [1, 2, 3, 4];
    return prices.map((price) => {
      let isSelected = false;
      if (priceSelection.min && priceSelection.max) {
        isSelected = price >= priceSelection.min && price <= priceSelection.max;
      }
      return (
        <img
          key={`price-input-${price}`}
          onClick={() => handlePriceSelection(price)}
          src={isSelected ? PriceIconFilled : PriceIcon}
        />
      );
    });
  }

  function geolocationSuccess(position: GeolocationPosition) {
    handleAdvancedSearch({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }

  function geolocationSuccessError() {
    navigate("error");
    console.log("Error: Geolocation server is down");
  }

  async function getLocation() {
    if (locationInput) {
      const data = await apiCall(API.getGoogleLocation, {
        address: locationInput,
      });
      handleAdvancedSearch(data);
    } else {
      if (!navigator.geolocation) {
        navigate("error");
        console.log("Error: Geolocation is not supported by your browser");
      } else {
        navigator.geolocation.getCurrentPosition(
          geolocationSuccess,
          geolocationSuccessError
        );
      }
    }
  }

  function handleAdvancedSearch(location: Geolocation) {
    let url: string;
    url = `/multiple-results/${location.lat}/${location.lng}/${keyword}/${
      priceSelection.min
    }/${priceSelection.max}/${convertMilesToMeters(distance)}/${openNow}`;
    routeChange(url);
  }

  function routeChange(url: string) {
    url ? navigate(url) : console.log("Error: Invalid URL");
  }

  return (
    <>
      {Header()}
      <AdvancedSearchWrapper>
        <fieldset>
          <legend>
            <h3>Advanced Search</h3>
          </legend>
          <Keyword>
            <h2>Keyword</h2>
            <PrimaryInput
              onChange={(event) => setKeyword(event.target.value)}
              className="keyword-input keyword"
              placeholder="vegan, thai, burgers, etc."
            />
          </Keyword>

          <Location>
            <a
              onClick={() =>
                setUseCurrentLocation((prevUseCurrentLocation) => {
                  if (prevUseCurrentLocation) setLocationInput("");
                  return !prevUseCurrentLocation;
                })
              }
            >
              <h2>Use Current Location</h2>
              <img src={useCurrentLocation ? GreenCheckIcon : GreyCheckIcon} />
            </a>
          </Location>
          {useCurrentLocation ? null : (
            <Location>
              <h2>Custom Location</h2>
              <SmallInput
                onChange={(event) => setLocationInput(event.target.value)}
                className="location-input location"
                placeholder="city, state, zip"
              />
            </Location>
          )}

          {renderDistance()}

          <Price>
            <h2>Price</h2>
            {renderPriceSelection()}
          </Price>

          <Open>
            <a onClick={() => setOpenNow(!openNow)}>
              <h2>Open Now</h2>
              <img src={openNow ? GreenCheckIcon : GreyCheckIcon} />
            </a>
          </Open>
          <Button type="button" onClick={() => getLocation()}>
            Search
          </Button>
        </fieldset>
      </AdvancedSearchWrapper>
    </>
  );
}
