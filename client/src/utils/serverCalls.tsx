import axios from 'axios';
import { apiServer } from './helpers';

declare module 'axios' {
  export interface AxiosRequestConfig {
    payload: any;
  }
}

export async function getRestaurants(req: any) {
  try {
    const res = await axios.post(`${apiServer()}/api/restaurant`, { 
      latitude: req.latitude,
      longitude: req.longitude,
      maxPrice: req.maxPrice,
      minPrice: req.minPrice,
      keyword: req.keyword,
      openNow: req.openNow,
      // TODO: use this to setup pagination
      // pageToken: req.pageToken,
      radius: req.radius,
      type: 'restaurant',
     }); 
    return(res)
  } catch (err) {
    console.log(err);
  }
}

export async function getRestaurant(placeId: any) {
  try {
    const res = await axios.post(`${apiServer()}/api/restaurant/${placeId}`);
    return (res)
  } catch (err) {
    console.log(err);
  }
}

export async function saveRestaurant(req: any) {
  try {
    const res = await axios.post(`${apiServer()}/api/restaurant/save`, req);
    return (res)
  } catch (err) {
    console.log(err);
  }
}

export async function createReview(req: any) {
  try {
    const res = await axios.post(`${apiServer()}/api/review`, req);
    return (res)
  } catch (err) {
    console.log(err);
  }
}

export async function updateReview(reviewId: string, req: any) {
  try {
    const res = await axios.put(`${apiServer()}/api/review/${reviewId}`, req);
    return (res)
  } catch (err) {
    console.log(err);
  }
}

export async function deleteReview(reviewId: string) {
  try {
    const res = await axios.delete(`${apiServer()}/api/review/${reviewId}`);
    return (res)
  } catch (err) {
    console.log(err);
  }
}

export async function getReview(reviewId: string) {
  try {
    const res = await axios.get(`${apiServer()}/api/review/${reviewId}`);
    return (res)
  } catch (err) {
    console.log(err);
  }
}

export async function getReviewsByUser(userId: string) {
  try {
    const res = await axios.get(`${apiServer()}/api/review/user/${userId}`);
    return (res)
  } catch (err) {
    console.log(err);
  }
}

export async function getReviewsByRestaurant(placeId: string) {
  try {
    const res = await axios.get(`${apiServer()}/api/review/restaurant/${placeId}`);
    return (res)
  } catch (err) {
    console.log(err);
  }
}