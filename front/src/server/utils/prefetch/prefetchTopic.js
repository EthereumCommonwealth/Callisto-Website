import axios from 'axios';
import blogPosts from '../../../app/services/blogPosts';
import coinStats from '../../../app/services/coinStats';
import getTranslations from '../../getTranslations';
import preparePosts from './preparePosts';
import handleRender from '../handleRender';

const getTag = (slug, tags) => {
  const filtered = tags.filter(elem => elem.slug === slug);
  return filtered.length > 0 ? filtered[0].id : false;
}

const prefetchTopic = async (req, res, next) => {
  try {
    let posts, tags, btcStats, cloStats, internalData;
    try {
      posts = await blogPosts.get('posts?_embed&per_page=50');
    } catch (err) {
      posts = [];
    }
    try {
      tags = await blogPosts.get('tags');
    } catch (err) {
      tags = [];
    }
    try {
      btcStats = await coinStats.get('ticker/1/');
    } catch (e) {
      btcStats = 0;
    }
    try {
      cloStats = await coinStats.get('ticker/2757/');
    } catch (e) {
      cloStats = 0;
    }
    try {
      internalData = await axios.get(`${process.env.API_URL}/home/`);
      internalData = internalData.data;
    } catch (e) {
      internalData = {
        teamMembers: [],
        miningPools: [],
        blockExplorers: [],
        wallets: [],
        exchanges: [],
      };
    }
    const tagId = getTag(req.params.slug, tags.data);
    const messages = getTranslations(req.params.lang);
    if (tagId) {
      const tagPosts = await blogPosts.get(`posts?tags=${tagId}`);
      const initialState = {
        teamMembers: internalData.teamMembers,
        miningPools: internalData.miningPools,
        blockExplorers: internalData.blockExplorers,
        wallets: internalData.wallets,
        exchanges: internalData.exchanges,
        blogPosts: posts.data && posts.data.length > 0 ? preparePosts(posts.data) : posts,
        blogTags: tags.data && tags.data.length > 0 ? tags.data : tags,
        marketStats: {
          btcPrice: btcStats.data ? btcStats.data.data.quotes.USD.price : 0,
          cloPrice: cloStats.data ? cloStats.data.data.quotes.USD.price : 0,
          volume: cloStats.data ? cloStats.data.data.quotes.USD.volume_24h : 0,
          marketCap: cloStats.data ? cloStats.data.data.quotes.USD.market_cap : 0,
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
    } else {
      res.redirect('/not-found');
    }
  } catch (err) {
    next(err);
  }
}

export default prefetchTopic;
