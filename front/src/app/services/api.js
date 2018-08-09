import axios from 'axios';

const api = () => {
  const fetch = axios.create({
    baseURL: process.env.API_URL,
    headers: { accept: 'application/json' },
  });
  return fetch;
}
export default api();
