import api from './utils/api';
import prepareMarket from './utils/prepareMarket';
import handleRender from '../../render/website/handleRender';

const prefetchData = async (req, res, next) => {
  try {
    const btcStats = await api.market.getTicker('bitcoin');
    const cloStats = await api.market.getTicker('callisto');
    const homeData = await api.website.getHome(req.params.lang)
    const balance = await api.market.getBalance();
    const audit = await api.audit.getAudits();
    const internalData = homeData.internalData;
    const messages = homeData.messages;
    const initialState = {
      teamMembers: internalData.teamMembers,
      miningPools: internalData.miningPools,
      blockExplorers: internalData.blockExplorers,
      wallets: internalData.wallets,
      exchanges: internalData.exchanges,
      walletsColdStacking: internalData.walletsColdStacking,
      blogPosts: [],
      blogTags: [],
      marketStats: prepareMarket(btcStats, cloStats, balance),
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
