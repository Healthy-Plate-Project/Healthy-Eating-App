import axios from 'axios';
import { apiServer } from './helpers';

declare module 'axios' {
  export interface AxiosRequestConfig {
    payload: any;
  }
}

async function getRestaurants(req: any) {
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
    return(res.data.results)
  } catch (err) {
    console.log(err);
  }
}

export {
  getRestaurants,
}