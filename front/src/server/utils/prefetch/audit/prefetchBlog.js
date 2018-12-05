import axios from 'axios';
import Web3 from "web3";
import getTranslations from '../../../getTranslations';
import blogPosts from '../../../../app/services/blogPosts';
import coinStats from '../../../../app/services/coinStats';
import handleRender from '../../render/website/handleRender';
import preparePosts from './preparePosts';

const prefetchBlog = async (req, res, next) => {
  try {
    let posts, tags, btcStats, cloStats, internalData, balance, messages;
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
      messages = getTranslations(req.params.lang);
    } catch (e) {
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
      tagPosts: [],
      faq: [],
      singlePost: {},
      messages,
    };
    handleRender(req, res, initialState, messages);
  } catch (err) {
    next(err);
  }
}

export default prefetchBlog;
