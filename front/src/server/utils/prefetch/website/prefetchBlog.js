import api from './utils/api';
import handleRender from '../../render/website/handleRender';
import preparePosts from './utils/preparePosts';
import prepareMarket from './utils/prepareMarket';

const prefetchBlog = async (req, res, next) => {
  try {
    const posts = await api.blog.getPosts(50);
    const btcStats = await api.market.getTicker(1);
    const cloStats = await api.market.getTicker(2757);
    const homeData = await api.website.getHome(req.params.lang);
    const balance = await api.market.getBalance();
    const totalSupply = await api.market.getTotalSuply();
    const audit = await api.audit.getAudits();
    const tags = await api.blog.getTags();
    const internalData = homeData.internalData;
    const messages = homeData.messages;
    const initialState = {
      teamMembers: internalData.teamMembers,
      miningPools: internalData.miningPools,
      blockExplorers: internalData.blockExplorers,
      wallets: internalData.wallets,
      exchanges: internalData.exchanges,
      blogPosts: posts.data && posts.data.length > 0 ? preparePosts(posts.data) : posts,
      blogTags: tags.data && tags.data.length > 0 ? tags.data : tags,
      marketStats: prepareMarket(btcStats, cloStats, totalSupply, balance),
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

export default prefetchBlog;
