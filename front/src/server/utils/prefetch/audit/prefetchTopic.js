import axios from 'axios';
import Web3 from "web3";
import blogPosts from '../../../../app/services/blogPosts';
import coinStats from '../../../../app/services/coinStats';
import getTranslations from '../../../getTranslations';
import preparePosts from './preparePosts';
import handleRender from '../../render/website/handleRender';

const getTag = (slug, tags) => {
  const filtered = tags.filter(elem => elem.slug === slug);
  return filtered.length > 0 ? filtered[0].id : false;
}

const prefetchTopic = async (req, res, next) => {
  try {
    let posts, tags, btcStats, cloStats, internalData, audit, balance, messages;
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
      internalData = await axios.get(`${process.env.API_URL}home/?lang=${req.params.lang}`);
      internalData = internalData.data;
      messages = internalData.translations.keys;
    } catch (e) {
      messages = getTranslations(req.params.lang);
      internalData = {
        teamMembers: [],
        miningPools: [],
        blockExplorers: [],
        wallets: [],
        exchanges: [],
        messages: {},
      };
    }
    try {
      const web3 = new Web3(new Web3.providers.HttpProvider("https://clo-geth.0xinfra.com/"));
      balance = await web3.eth.getBalance("0xd813419749b3c2cdc94a2f9cfcf154113264a9d6");
      balance = web3.utils.fromWei(balance, 'ether');
    } catch (e) {
      balance = 0;
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
    const tagId = getTag(req.params.slug, tags.data);
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
          totalSupply: cloStats.data ? cloStats.data.data.total_supply : 0,
          stakingBalance: parseFloat(balance),
        },
        tagPosts: preparePosts(tagPosts.data),
        faq: [],
        singlePost: {},
        messages,
        audit,
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
