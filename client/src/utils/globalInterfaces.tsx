export interface UserData {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  message?: string;
  fav_restaurants?: [FavRestaurantData];
  reviews?: [ReviewData];
}

export interface SingleGoogleResultData {
  business_status: string;
  formatted_address: string;
  formatted_phone_number: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  name: string;
  opening_hours: {
    open_now: true;
    weekday_text: [string];
  };
  photos: [GoogleResultPhoto];
  place_id: string;
  price_level: number;
  rating: number;
  reviews: [GoogleResultReview];
  types: [string];
  url: string;
  user_ratings_total: number;
  vicinity: string;
  website: string;
}

export interface MultipleGoogleResultData {
  business_status: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  name: string;
  opening_hours: {
    open_now: true;
  };
  photos: [GoogleResultPhoto];
  place_id: string;
  price_level: number;
  rating: number;
  types: [string];
  user_ratings_total: number;
  vicinity: string;
}

export interface FavRestaurantData {
  lat: number;
  lng: number;
  name: string;
  photo: string;
  place_id: string;
  price_level: number;
  rating: number;
  types: [string];
  vicinity: string;
}

export interface ReviewData {
  place_id: string;
  ratings: [StarRating];
  review_text: string;
}

export interface StarRating {
  name: string;
  rating_number: number;
}

export interface GoogleResultPhoto {
  photo_reference: string;
  height: number;
  html_attributions: string;
  width: number;
}

export interface GoogleResultReview {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}
