import axios from 'axios';
import { apiServer } from './helpers';

declare module 'axios' {
  export interface AxiosRequestConfig {
    payload: any;
  }
}

async function getRestaurants(reviewId: any): Promise<any>{
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