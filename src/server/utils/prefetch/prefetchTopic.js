import blogPosts from '../../../app/services/blogPosts';
import coinStats from '../../../app/services/coinStats';
import getTranslations from '../../getTranslations';
import preparePosts from './preparePosts';
import handleRender from '../handleRender';

const getTag = (slug, tags) => {
  const filtered = tags.filter(elem => elem.slug === slug);
  return filtered.length > 0 ? filtered[0].id : [];
}

const prefetchTopic = async (req, res, next) => {
  try {
    const posts = await blogPosts.get('posts?_embed&per_page=50');
    const tags = await blogPosts.get('tags');
    const btcStats = await coinStats.get('ticker/1/');
    const cloStats = await coinStats.get('ticker/2757/');
    const tagId = getTag(req.params.slug, tags.data);
    const tagPosts = await blogPosts.get(`posts?tags=${tagId}`);
    const messages = getTranslations(req.params.lang);

    const initialState = {
      blogPosts: preparePosts(posts.data),
      blogTags: tags.data,
      marketStats: {
        btcPrice: btcStats.data.data.quotes.USD.price,
        cloPrice: cloStats.data.data.quotes.USD.price,
        volume: cloStats.data.data.quotes.USD.volume_24h,
        marketCap: cloStats.data.data.quotes.USD.market_cap,
      },
      tagPosts: preparePosts(tagPosts.data),
      faq: [],
      singlePost: {},
      messages,
    };

    const topicMessages = {
      title: messages.homeTitle,
      description: messages.homeDescription,
      url: `https://callisto.network/blog/topic/${req.params.slug}/`,
      slug: req.params.slug,
    }

    handleRender(req, res, initialState, topicMessages, 'topic');
  } catch (err) {
    next(err);
  }
}

export default prefetchTopic;
