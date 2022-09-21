import axios from 'axios';
import { apiServer } from './helpers';

declare module 'axios' {
  export interface AxiosRequestConfig {
    payload: any;
  }
}

const apiFlag = false;

export async function getRestaurants(req: any) {
  if (!apiFlag) {
    return undefined;
  }
    try {
      const res = await axios.get(`${apiServer()}/api/restaurant`, req);
      return res.data;
    } catch (err) {
      console.log(err);
    }
}

export async function getRestaurant(placeId: any) {
  if (!apiFlag) {
    return undefined;
  }
  try {
    const res = await axios.get(`${apiServer()}/api/restaurant/${placeId}`);
    return (res.data)
  } catch (err) {
    console.log(err);
  }
}

export async function saveRestaurant(req: any) {
  if (!apiFlag) {
    return undefined;
  }
  try {
    const res = await axios.post(`${apiServer()}/api/restaurant/save`, req);
    return (res)
  } catch (err) {
    console.log(err);
  }
}

export async function createReview(req: any) {
  if (!apiFlag) {
    return undefined;
  }
  try {
    const res = await axios.post(`${apiServer()}/api/review`, req);
    return (res)
  } catch (err) {
    console.log(err);
  }
}

export async function updateReview(reviewId: string, req: any) {
  if (!apiFlag) {
    return undefined;
  }
  try {
    const res = await axios.put(`${apiServer()}/api/review/${reviewId}`, req);
    return (res)
  } catch (err) {
    console.log(err);
  }
}

export async function deleteReview(reviewId: string) {
  if (!apiFlag) {
    return undefined;
  }
  try {
    const res = await axios.delete(`${apiServer()}/api/review/${reviewId}`);
    return (res)
  } catch (err) {
    console.log(err);
  }
}

export async function getReview(reviewId: string) {
  if (!apiFlag) {
    return undefined;
  }
  try {
    const res = await axios.get(`${apiServer()}/api/review/${reviewId}`);
    return (res)
  } catch (err) {
    console.log(err);
  }
}

export async function getReviewsByUser(userId: string) {
  if (!apiFlag) {
    return undefined;
  }
  try {
    const res = await axios.get(`${apiServer()}/api/review/user/${userId}`);
    return (res)
  } catch (err) {
    console.log(err);
  }
}

export async function getReviewsByRestaurant(placeId: string) {
  if (!apiFlag) {
    return undefined;
  }
  try {
    const res = await axios.get(`${apiServer()}/api/review/restaurant/${placeId}`);
    return (res)
  } catch (err) {
    console.log(err);
  }
}