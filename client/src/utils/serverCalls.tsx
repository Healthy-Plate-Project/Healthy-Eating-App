import { apiServer } from "./helpers";

export const API = {
  // --------------------------------------------------------------------------------------------
  getUser: "user/get",
  // const data = await apiCall(API.getUser, {}, true);
  // returns the UserData object

  // --------------------------------------------------------------------------------------------
  loginWithEmail: "user/login",
  // body = {
  //   email: string, **REQUIRED**
  //   password: string, **REQUIRED**
  // }
  // const data = await apiCall(API.loginWithEmail, { email, password }, true);
  // returns the UserData object

  // --------------------------------------------------------------------------------------------
  loginWithUsername: "user/login",
  // body = {
  //   username: string, **REQUIRED**
  //   password: string, **REQUIRED**
  // }
  // const data = await apiCall(API.loginWithUsername, { email, password }, true);
  // returns the UserData object

  // --------------------------------------------------------------------------------------------
  signup: "user/signup",
  // body = {
  //   username: string, **REQUIRED**
  //   email: string, **REQUIRED**
  //   password: string, **REQUIRED**
  //   first_name: string, **REQUIRED**
  //   last_name: string, **REQUIRED**
  // }
  // const data = await apiCall(API.signup, body, true);
  // returns the newly created UserData object

  // --------------------------------------------------------------------------------------------
  logout: "user/logout",
  // const data = await apiCall(API.logout, {}, true);
  // returns an object with message saying it has logged out
  // --------------------------------------------------------------------------------------------
  getRestaurants: "restaurant/google/get/multiple",
  // body = {
  //   latitude: number, **REQUIRED**
  //   longitude: number, **REQUIRED**
  //   keyword: string, like "pizza" or "sushi", **OPTIONAL**
  //   max_price: number, between 1 and 4, **OPTIONAL**
  //   min_price: number, between 1 and 4, **OPTIONAL**
  //   radius: number, in meters, you can use convertMilesToMeters() and pass miles into it **OPTIONAL**
  //   open_now: boolean, **OPTIONAL**
  // }
  // const data = await apiCall(API.getRestaurants, body);
  // returns an array of google restaurant objects

  // --------------------------------------------------------------------------------------------
  getRestaurant: "restaurant/google/get/single",
  // body = {
  //   place_id: string, **REQUIRED**
  // }
  // const data = await apiCall(API.getRestaurant, { place_id });
  // returns a google restaurant object

  // --------------------------------------------------------------------------------------------
  getGooglePhoto: "photo/google/get",
  // body = {
  //   photo_reference: string **REQUIRED**
  //   max_width: number, between 1 and 1600 **OPTIONAL**
  //   max_height: number, between 1 and 1600 **OPTIONAL**
  // }
  // const url = await apiCall(API.getGooglePhoto, body);
  // returns a google photo url string to use as the src of an img tag

  // --------------------------------------------------------------------------------------------
  getGoogleLocation: "location/google/get",
  // body = {
  //   address: string, **REQUIRED**
  // }
  // const data = await apiCall(API.getGoogleLocation, { address });
  // returns a google location object

  // --------------------------------------------------------------------------------------------
  getReview: "review/get",
  // body = {
  //   _id: string, **REQUIRED**
  // }
  // const data = await apiCall(API.getReviews, { _id });
  // returns a review object

  // --------------------------------------------------------------------------------------------
  postReview: "review/post",
  // body = {
  //   user_id: string, **REQUIRED**
  //   restaurant: object, **REQUIRED** {
  //     name: string, **OPTIONAL**
  //     place_id: string, **REQUIRED**
  //     vicinity: string, **OPTIONAL**
  //     price_level: number, between 1 and 4, **OPTIONAL**
  //     lat: number, **OPTIONAL**
  //     lng: number, **OPTIONAL**
  //     photo_reference: string, **OPTIONAL**
  //     rating: number, between 1 and 5, **OPTIONAL**
  //     types: array of strings, like "mexican", "sushi", **OPTIONAL**
  //   }
  //   star_ratings: array of objects **OPTIONAL** = [{
  //     name: string, **OPTIONAL**
  //     rating: number, between 1 and 5, **OPTIONAL**
  //   }]
  //   review_text: string, **OPTIONAL**
  // }
  // const data = await apiCall(API.postReview, body);
  // returns an object with message, if review already exists, it will return a message saying it has updated the review

  // --------------------------------------------------------------------------------------------
  updateReview: "review/update",
  // body = {
  //   _id: string, **REQUIRED**
  //   user_id: string, **REQUIRED**
  //   place_id: string, **REQUIRED**
  //   star_ratings: array of objects **OPTIONAL** [{
  //     name: string, **OPTIONAL**
  //     rating: number, between 1 and 5, **OPTIONAL**
  //   }]
  //   review_text: string, **OPTIONAL**
  // }
  // const data = await apiCall(API.updateReview, body);
  // returns an object with message saying it has updated the review

  // --------------------------------------------------------------------------------------------
  deleteReview: "review/delete",
  // body = {
  //   _id: string, **REQUIRED**
  // }
  // const data = await apiCall(API.deleteReview, { _id });
  // returns an object with message saying it has deleted the review

  // --------------------------------------------------------------------------------------------
  getReviewsByUser: "review/user/get",
  // body = {
  //   user_id: string, **REQUIRED**
  // }
  // const data = await apiCall(API.getReviewsByUser, { user_id });
  // returns an array of review objects that match the user_id

  // --------------------------------------------------------------------------------------------
  getReviewsByRestaurant: "review/restaurant/get",
  // body = {
  //   place_id: string, **REQUIRED**
  // }
  // const data = await apiCall(API.getReviewsByRestaurant, { place_id });
  // returns an array of review objects that match the place_id

  // --------------------------------------------------------------------------------------------
  getSavedRestaurant: "restaurant/saved/get",
  // body = {
  //   place_id: string, **REQUIRED**
  // }
  // const data = await apiCall(API.getSavedRestaurant, { place_id });
  // returns a restaruant object

  // --------------------------------------------------------------------------------------------
  postSavedRestaurant: "restaurant/saved/post",
  // body = {
  //   name: string, **OPTIONAL**
  //   place_id: string, **REQUIRED**
  //   vicinity: string, **OPTIONAL**
  //   price_level: number, between 1 and 4, **OPTIONAL**
  //   lat: number, **OPTIONAL**
  //   lng: number, **OPTIONAL**
  //   photo_reference: string, **OPTIONAL**
  //   rating: number, between 1 and 5, **OPTIONAL**
  //   types: array of strings, like "mexican", "sushi", **OPTIONAL**
  // }
  // const data = await apiCall(API.postSavedRestaurant, body);
  // returns the restaurant object that was saved

  // --------------------------------------------------------------------------------------------
  updateSavedRestaurant: "restaurant/saved/put",
  // body = {
  //   name: string, **OPTIONAL**
  //   place_id: string, **REQUIRED**
  //   vicinity: string, **OPTIONAL**
  //   price_level: number, between 1 and 4, **OPTIONAL**
  //   lat: number, **OPTIONAL**
  //   lng: number, **OPTIONAL**
  //   photo_reference: string, **OPTIONAL**
  //   rating: number, between 1 and 5, **OPTIONAL**
  //   types: array of strings, like "mexican", "sushi", **OPTIONAL**
  // }
  // const data = await apiCall(API.updateSavedRestaurant, body);
  // returns an object with message saying it has updated the restaurant

  // --------------------------------------------------------------------------------------------
  deleteSavedRestaurant: "restaurant/saved/delete",
  // body = {
  //   place_id: string, **REQUIRED**
  // }
  // const data = await apiCall(API.deleteSavedRestaurant, { place_id });
  // returns an object with message saying it has deleted the restaurant

  // --------------------------------------------------------------------------------------------
  postFavRestaurantByUser: "user/fav/post",
  // body = {
  //   user_id: string, **REQUIRED**
  //   name: string, **OPTIONAL**
  //   place_id: string, **REQUIRED**
  //   vicinity: string, **OPTIONAL**
  //   price_level: number, between 1 and 4, **OPTIONAL**
  //   lat: number, **OPTIONAL**
  //   lng: number, **OPTIONAL**
  //   photo_reference: string, **OPTIONAL**
  //   rating: number, between 1 and 5, **OPTIONAL**
  //   types: array of strings, like "mexican", "sushi", **OPTIONAL**
  // }
  // const data = await apiCall(API.postFavRestaurantByUser, body);
  // returns the UserData object that was saved

  // --------------------------------------------------------------------------------------------
  deleteFavRestaurantByUser: "user/fav/delete",
  // body = {
  //   user_id: string, **REQUIRED**
  //   place_id: string, **REQUIRED**
  // }
  // const data = await apiCall(API.deleteFavRestaurantByUser, { user_id, place_id });
  // returns the UserData object that was updated

  // --------------------------------------------------------------------------------------------
  getChatResponse: "chatgpt/get",
  // body = {
  //   message: string, **REQUIRED**
  // }
  // const data = await apiCall(API.getChatResponse, { message });
  // returns an object with a message property
};

// Change this to false if you want to turn off api calls for testing
const apiFlag = true;

export async function apiCall(url: string, body: any, credentials?: boolean) {
  if (!apiFlag) return;
  try {
    let response;
    if (credentials) {
      response = await fetch(`${apiServer()}/api/${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });
    } else {
      response = await fetch(`${apiServer()}/api/${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
