import axios from 'axios';
import { apiServer } from './helpers';

declare module 'axios' {
  export interface AxiosRequestConfig {
    payload: any;
  }
}

async function getRestaurants(req: any): Promise<any>{
  try {
    const res = await axios.post(`${apiServer()}/api/restaurant`, { req }); 
    return(res.data)
  } catch (err) {
    console.log(err);
  }
}

async function getRestaurant(restaurantId: any) {
  try {
    const res = await axios.post(`${apiServer()}/api/restaurant/${restaurantId}`);
    return (res.data)
  } catch (err) {
    console.log(err);
  }
}

async function saveRestaurant(req: any) {
  try {
    const res = await axios.post(`${apiServer()}/api/restaurant/save`, req);
    return (res.data)
  } catch (err) {
    console.log(err);
  }
}

export {
  getRestaurants,
  getRestaurant,
  saveRestaurant
}