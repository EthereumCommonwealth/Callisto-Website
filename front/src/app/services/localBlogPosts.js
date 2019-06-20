import axios from 'axios';
import * as U from '../constants/'

const localBlogPosts = () => {
  const fetch = axios.create({
    baseURL: U.BASE_LOCAL_BLOG_API_URL,
    headers: { accept: 'application/json' },
  });
  return fetch;
}
export default localBlogPosts();
