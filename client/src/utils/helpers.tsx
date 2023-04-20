import { GoogleResultPhoto, Restaurant } from "./globalInterfaces";

export function apiServer() {
  const url = window.location.href;
  const slice = url.slice(0, 21);
  if (slice === "http://localhost:3000") {
    return "http://localhost:3001";
  } else if (slice === "https://dragon-fruit-") {
    return "https://dragon-fruit-app.herokuapp.com";
  } else if (slice === "https://healthy-eatin") {
    return "https://healthy-eating-project-359101.uc.r.appspot.com";
  }
}

export function convertMetersToMiles(meters: number) {
  return meters * 0.000621371192;
}

export function convertMilesToMeters(miles: number) {
  return miles * 1609.344;
}

export function isEmail(str: string): boolean {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(str);
}

export const STAR_RATING_NAMES = [
  "Overall",
  "Vegan",
  "Vegetarian",
  "Pescatarian",
  "Gluten Free",
  "Dairy Free",
  "Nut Free",
];

export const REVIEW_TONES = [
  "Funny",
  "Sassy",
  "Angry",
  "Excited",
  "Happy",
  "Sad",
];

export function BuildRestaurantObject(restaurantData: Restaurant): Restaurant {
  // TODO - better error handling here
  if (!restaurantData.geometry) return {} as Restaurant;
  return {
    name: restaurantData.name,
    place_id: restaurantData.place_id,
    business_status: restaurantData.business_status,
    formatted_address: restaurantData.formatted_address,
    formatted_phone_number: restaurantData.formatted_phone_number,
    geometry: {
      location: {
        lat: restaurantData.geometry.location.lat,
        lng: restaurantData.geometry.location.lng,
      },
    },
    photos: [
      {
        photo_reference: restaurantData.photos[0].photo_reference,
      } as GoogleResultPhoto,
    ],
    price_level: restaurantData.price_level,
    rating: restaurantData.rating,
    types: restaurantData.types,
    url: restaurantData.url,
    website: restaurantData.website,
    vicinity: restaurantData.vicinity,
    user_ratings_total: restaurantData.user_ratings_total,
  };
}
