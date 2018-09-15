import axios from 'axios';
import blogPosts from '../../../../app/services/blogPosts';
import coinStats from '../../../../app/services/coinStats';
import getTranslations from '../../../getTranslations';
import preparePosts from './preparePosts';
import handleRender from '../../render/website/handleRender';

const prefetchData = async (req, res, next) => {
  try {
    let posts, tags, btcStats, cloStats, internalData, audit;
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
      internalData = await axios.get(`${process.env.API_URL}home/`);
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
    try {
      audit = await axios.get(`${process.env.AUDIT_URL}audit-request/create/`);
      audit = audit.data;
    } catch (e) {
      audit = {
        platform: [],
        csrf_token: null,
      }
    }
    const messages = getTranslations(req.params.lang);
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
      tagPosts: [],
      faq: [],
      singlePost: {},
      messages,
      audit,
    };
    handleRender(req, res, initialState, messages);
  } catch (err) {
    next(err);
  }
}

export default prefetchData;
