import axios from 'axios';
import Web3 from "web3";
import blogPosts from '../../../../app/services/blogPosts';
import coinStats from '../../../../app/services/coinStats';
import preparePosts from './preparePosts';
import handleRender from '../../render/website/handleRender';

const prefetchData = async (req, res, next) => {
  try {
    let posts, btcStats, cloStats, internalData, audit, balance;
    try {
      posts = await blogPosts.get('posts?_embed&per_page=3');
    } catch (err) {
      posts = [];
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
    const messages = internalData.translations.keys;
    const initialState = {
      teamMembers: internalData.teamMembers,
      miningPools: internalData.miningPools,
      blockExplorers: internalData.blockExplorers,
      wallets: internalData.wallets,
      exchanges: internalData.exchanges,
      blogPosts: posts.data && posts.data.length > 0 ? preparePosts(posts.data) : posts,
      blogTags: [],
      marketStats: {
        btcPrice: btcStats.data ? btcStats.data.data.quotes.USD.price : 0,
        cloPrice: cloStats.data ? cloStats.data.data.quotes.USD.price : 0,
        volume: cloStats.data ? cloStats.data.data.quotes.USD.volume_24h : 0,
        marketCap: cloStats.data ? cloStats.data.data.quotes.USD.market_cap : 0,
        stakingBalance: parseFloat(balance),
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
