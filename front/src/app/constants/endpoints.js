import coinStats from '../services/coinStats';
import blogPosts from '../services/blogPosts';

function getStats(id) {
  return coinStats.get(`ticker/${id}/`)
    .then((res) => res.data)
    .catch((error) => console.log('Error getting CLO Stats', error));
}

function getBlogPosts() {
  return blogPosts.get('posts')
    .then((res) => res.data)
    .catch((error) => console.log('Error getting Blog Posts', error));
}

function getBlogTags() {
  return blogPosts.get('tags')
    .then((res) => res.data)
    .catch((error) => console.log('Error getting Blog Tags', error));
}

function getMedia(id) {
  return blogPosts.get(`media/${id}`)
    .then((res) => res.data)
    .catch((error) => console.log('Error getting Media', error));
}

export default {
  getStats,
  getBlogPosts,
  getBlogTags,
  getMedia,
};
