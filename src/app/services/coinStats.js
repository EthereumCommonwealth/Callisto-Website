import axios from 'axios';
import * as U from '../constants/'

const coinStats = () => {
  const fetch = axios.create({
    baseURL: U.BASE_MARKET_API_URL,
    headers: { accept: 'application/json' },
  });
  return fetch;
}
export default coinStats();
