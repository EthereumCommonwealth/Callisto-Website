import axios from 'axios';
import api from './utils/api';
import preparePosts from './utils/preparePosts';
import prepareMarket from './utils/prepareMarket';
import handleRender from '../../render/website/handleRender';

const getArticles = async (category) => {
  const articles = await axios.get(`solutions/folders/${category.id}/articles/`, {
    baseURL: 'https://callistonetwork.freshdesk.com/api/v2/',
    headers: { accept: 'application/json' },
    auth: {
      username: process.env.FRESHBOOKS_API,
      password: 'x',
    }
  });
  return {
    id: category.id,
    name: category.name,
    articles: articles.data,
  };
}

const prepareFaq = async (faq) => {
  const elements = [];
  try {
    for (let i = 0; i < faq.length; i++) {
      const article = await getArticles(faq[i])
      elements.push(article);
    }
  } catch (err) {
    Sentry.captureException(err);
  }
  return elements;
}

const getFAQ = async () => {
  let faqObj;
  try {
    try {
      const faq = await axios.get('solutions/categories/43000034228/folders/', {
        baseURL: 'https://callistonetwork.freshdesk.com/api/v2/',
        headers: { accept: 'application/json' },
        auth: {
          username: process.env.FRESHBOOKS_API,
          password: 'x',
        }
      });
      faqObj = await prepareFaq(faq.data);
    } catch (err) {
      faqObj = [];
      Sentry.captureException(err);
    }
  } catch (err) {
    faqObj = [];
    Sentry.captureException(err);
  }
  return faqObj;
}

const prefetchFaq = async (req, res, next) => {
  try {
    const posts = await api.blog.getPosts(3);
    const tags = await api.blog.getTags();
    const btcStats = await api.market.getTicker('bitcoin');
    const cloStats = await api.market.getTicker('callisto');
    const homeData = await api.website.getHome(req.params.lang);
    const balance = await api.market.getBalance();
    const audit = await api.audit.getAudits();
    const faq = await getFAQ();
    const internalData = homeData.internalData;
    const messages = homeData.messages;
    const initialState = {
      teamMembers: internalData.teamMembers,
      miningPools: internalData.miningPools,
      blockExplorers: internalData.blockExplorers,
      wallets: internalData.wallets,
      walletsColdStacking: internalData.walletsColdStacking,
      exchanges: internalData.exchanges,
      blogPosts: posts.data && posts.data.length > 0 ? preparePosts(posts.data) : posts,
      blogTags: tags.data && tags.data.length > 0 ? tags.data : tags,
      marketStats: prepareMarket(btcStats, cloStats, balance),
      tagPosts: [],
      faq: faq,
      singlePost: {},
      messages,
      audit,
    };
    handleRender(req, res, initialState, messages)
  } catch (err) {
    next(err);
  }
}

export default prefetchFaq;
