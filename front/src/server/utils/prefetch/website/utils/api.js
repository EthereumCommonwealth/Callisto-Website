import axios from 'axios';
import Web3 from 'web3';
import blogPosts from '../../../../../app/services/blogPosts';
import coinStats from '../../../../../app/services/coinStats';
import getTranslations from '../../../../getTranslations';
import * as Sentry from '@sentry/node';

export default {
  website: {
    getHome: async lang => {
      let internalData, messages;
      try {
        internalData = await axios.get(`${process.env.API_URL}home/?lang=${lang || 'en'}`);
        internalData = internalData.data;
        messages = internalData.translations.keys;
      } catch (err) {
        messages = getTranslations(lang);
        internalData = {
          teamMembers: [],
          miningPools: [],
          blockExplorers: [],
          wallets: [],
          exchanges: [],
          messages: {},
        };
        Sentry.captureException(err);
      }
      return {
        internalData,
        messages,
      };
    },
  },
  blog: {
    getPosts: async amount => {
      let posts;
      try {
        posts = await blogPosts.get(`posts?_embed&per_page=${amount}`);
      } catch (err) {
        posts = [];
        Sentry.captureException(err);
      }
      return posts;
    },
    getTags: async () => {
      let tags;
      try {
        tags = await blogPosts.get('tags');
      } catch (err) {
        tags = [];
        Sentry.captureException(err);
      }
      return tags;
    },
    getSinglePost: async id => {
      let singlePost;
      try {
        singlePost = await blogPosts.get(`posts/${id}?_embed`);
      } catch (err) {
        singlePost = {};
        Sentry.captureException(err);
      }
      return singlePost;
    },
    getSingleTag: async id => {
      let tags;
      try {
        tags = await blogPosts.get(`posts?tags=${id}`);
      } catch (error) {
        tags = [];
        Sentry.captureException(err);
      }
      return tags;
    }
  },
  market: {
    getTicker: async id => {
      let btcStats;
      try {
        btcStats = await coinStats.get(`ticker/${id}/`);
      } catch (err) {
        btcStats = 0;
        Sentry.captureException(err);
      }
      return btcStats;
    },
    getBalance: async () => {
      let balance;
      try {
        const web3 = new Web3(new Web3.providers.HttpProvider('https://clo-geth.0xinfra.com/'));
        balance = await web3.eth.getBalance('0xd813419749b3c2cdc94a2f9cfcf154113264a9d6');
        balance = web3.utils.fromWei(balance, 'ether');
      } catch (err) {
        balance = 0;
        Sentry.captureException(err);
      }
      return balance;
    },
    getTotalSuply: async () => {
      let totalSupply;
      try {
        totalSupply = await axios.get('https://explorer2.callisto.network/total');
        totalSupply = totalSupply.data;
      } catch (err) {
        totalSupply = 0;
        Sentry.captureException(err);
      }
      return totalSupply;
    }
  },
  audit: {
    getAudits: async () => {
      let audit;
      try {
        audit = await axios.get(`${process.env.AUDIT_URL}audit-request/create/`);
        audit = audit.data;
      } catch (err) {
        audit = {
          platform: [],
          csrf_token: null,
          completedAudits: 0,
          inProgress: 0,
        }
        Sentry.captureException(err);
      }
      return audit;
    }
  },
};
