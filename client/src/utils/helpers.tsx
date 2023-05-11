import React from "react";
import { GoogleResultPhoto, Restaurant, ReviewData, StarRating } from "./globalInterfaces";
import { PriceIconStyled, Star } from "./helpersStyles";
import goldStar from "../assets/images/gold-star.png";
import halfGoldStar from "../assets/images/half-gold-star.png";
import dollarFilled from "../assets/images/green-dollar.svg";

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
  return Math.round(miles * 1609.344);
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

export function averageStarRating(star_ratings: StarRating[]): number {
  const sum = star_ratings.reduce(
    (accumulator, currentValue) => accumulator + currentValue.star_rating,
    0
  );
  return sum / star_ratings.length;
}

export function averageReviewDataStarRating(review_datas: ReviewData[]): number {
  let ratings = review_datas.map(review_data => {
    if(!review_data.star_ratings) return 0;
    const sum = review_data.star_ratings.reduce(
      (accumulator, currentValue) => accumulator + currentValue.star_rating,
      0
    );
    return sum / review_data.star_ratings.length;
  })
  const sum = ratings.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum / ratings.length;
}

export function renderRatingStars(
  star_rating: number | StarRating[] | undefined,
  restaurant_name: string
) {
  let rating: number = 0;
  if (!star_rating) {
    return [];
  } else if (typeof star_rating === "number") {
    rating = star_rating;
  } else if (Array.isArray(star_rating)) {
    averageStarRating(star_rating)
  }
  const roundedStarRating = Math.round(rating * 2) / 2;
  const integerPart = Math.floor(roundedStarRating);
  const hasHalfStar = roundedStarRating % 1 !== 0;
  const stars = [...Array(5)].map((_, i) => {
    const id = `${i + 1}-${restaurant_name}-Star-Rating`;
    if (i < integerPart) {
      return (
        <Star
          title={`${star_rating} stars`}
          className="stars"
          src={goldStar}
          alt={id}
          aria-label={id}
          key={id}
        />
      );
    }
    if (i === integerPart && hasHalfStar) {
      return (
        <Star
          title={`${star_rating} stars`}
          className="stars"
          src={halfGoldStar}
          alt={id}
          aria-label={id}
          key={id}
        />
      );
    }
    return null;
  });
  return stars;
}

export function priceLevel(price_level?: number): JSX.Element[] | undefined {
  if (!price_level) return;
  const array = [];
  for (let i = 1; i <= price_level; i++) {
    array.push(
      <PriceIconStyled
        src={dollarFilled}
        title={`# ${price_level} Price Level`}
      />
    );
  }
  return array;
}
