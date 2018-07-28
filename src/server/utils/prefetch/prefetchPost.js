import blogPosts from '../../../app/services/blogPosts';
import coinStats from '../../../app/services/coinStats';
import getTranslations from '../../getTranslations';
import preparePosts from './preparePosts';
import handleRender from '../handleRender';

const getPost = (slug, posts) => {
  const filtered = posts.filter(elem => elem.slug === slug);
  return filtered.length > 0 ? filtered[0].id : [];
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
    const postComments = await blogPosts.get(`comments/?post=${postId}`);
    // const author = await blogPosts.get(`users/${singlePost.author}}`)
    const baseImageUrl = 'https://news.callisto.network/wp-content/uploads';
    const messages = getTranslations(req.params.lang);

    handleRender(req, res, {
      title: singlePost.data.title.rendered,
      description: singlePost.data.excerpt.rendered,
      image: `${baseImageUrl}/${singlePost.data.better_featured_image.media_details.file}`,
      url: `https://callisto.network/blog/post/${singlePost.data.slug}/`,
      slug: singlePost.data.slug,
    }, {
      blogPosts: preparedPosts,
      blogTags: tags.data,
      marketStats: {
        btcPrice: btcStats.data.data.quotes.USD.price,
        cloPrice: cloStats.data.data.quotes.USD.price,
        volume: cloStats.data.data.quotes.USD.volume_24h,
        marketCap: cloStats.data.data.quotes.USD.market_cap,
      },
      singlePost: {
        id: singlePost.data.id,
        title: singlePost.data.title.rendered,
        description: singlePost.data.excerpt.rendered,
        content: singlePost.data.content.rendered,
        date: singlePost.data.date,
        link: singlePost.data.link,
        slug: singlePost.data.slug,
        cover: `${baseImageUrl}/${singlePost.data.better_featured_image.media_details.file}`,
        comments: postComments.data,
        url: `https://callisto.network/blog/post/${singlePost.data.slug}/`,
        // author: author.data,
      },
      faq: [],
      tagPosts: [],
      messages,
    }, true)
  } catch (err) {
    next(err);
  }
}

export default prefetchPost;
