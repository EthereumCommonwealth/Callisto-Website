import axios from 'axios';
import * as U from '../constants/'

const blogPosts = () => {
  const fetch = axios.create({
    baseURL: U.BASE_BLOG_API_URL,
    headers: { accept: 'application/json' },
  });
  return fetch;
}
export default blogPosts();
