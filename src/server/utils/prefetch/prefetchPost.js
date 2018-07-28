import blogPosts from '../../../app/services/blogPosts';
import coinStats from '../../../app/services/coinStats';
import getTranslations from '../../getTranslations';
import preparePosts from './preparePosts';
import handleRender from '../handleRender';

const getSlug = (id, posts) => {
  const filtered = posts.filter(elem => elem.id === id);
  return filtered.length > 0 ? filtered[0].slug : '';
}

const getPost = (slug, posts) => {
  const filtered = posts.filter(elem => elem.slug === slug);
  return filtered.length > 0 ? filtered[0].id : [];
}

const getTags = (topics, tags) => {
  const postTags = [];
  for (let i = 0; i < tags.length; i++) {
    if (topics.indexOf(tags[i].id) !== -1) {
      postTags.push({
        id: tags[i].id,
        name: tags[i].name,
        slug: tags[i].slug,
      });
    }
  }
  return postTags;
}

const prepareRelated = (relatedPosts, posts) => {
  const related = [];
  for (let i = 0; i < relatedPosts.length; i++) {
    related.push({
      id: relatedPosts[i].id,
      title: relatedPosts[i].title,
      description: relatedPosts[i].excerpt,
      slug: getSlug(relatedPosts[i].id, posts),
    });
  }
  return related;
}

const preparePost = (post, baseImageUrl, posts, tags) => {
  return {
    id: post.id,
    title: post.title.rendered,
    description: post.excerpt.rendered,
    content: post.content.rendered,
    date: post.date,
    link: post.link,
    slug: post.slug,
    cover: `${baseImageUrl}/${post.better_featured_image.media_details.file}`,
    url: `https://callisto.network/blog/post/${post.slug}/`,
    relatedPosts: prepareRelated(post['jetpack-related-posts'], posts),
    topics: getTags(post.tags, tags),
    // author: author.data,
  }
}

const prefetchPost = async (req, res, next) => {
  try {
    const posts = await blogPosts.get('posts?_embed&per_page=50');
    const tags = await blogPosts.get('tags');
    const btcStats = await coinStats.get('ticker/1/');
    const cloStats = await coinStats.get('ticker/2757/');
    const preparedPosts = preparePosts(posts.data);
    const postId = getPost(req.params.slug, preparedPosts);
    const singlePost = await blogPosts.get(`posts/${postId}`);
    // const author = await blogPosts.get(`users/${singlePost.author}}`)
    const messages = getTranslations(req.params.lang);
    const baseImageUrl = 'https://news.callisto.network/wp-content/uploads';
    const initialState = {
      blogPosts: preparedPosts,
      blogTags: tags.data,
      marketStats: {
        btcPrice: btcStats.data.data.quotes.USD.price,
        cloPrice: cloStats.data.data.quotes.USD.price,
        volume: cloStats.data.data.quotes.USD.volume_24h,
        marketCap: cloStats.data.data.quotes.USD.market_cap,
      },
      singlePost: preparePost(singlePost.data, baseImageUrl, posts.data, tags.data),
      faq: [],
      tagPosts: [],
      messages,
    };

    const blogMessages = {
      title: singlePost.data.title.rendered,
      description: singlePost.data.excerpt.rendered,
      image: `${baseImageUrl}/${singlePost.data.better_featured_image.media_details.file}`,
      url: `https://callisto.network/blog/post/${singlePost.data.slug}/`,
      slug: singlePost.data.slug,
    }

    handleRender(req, res, initialState, blogMessages, 'blog')
  } catch (err) {
    next(err);
  }
}

export default prefetchPost;
