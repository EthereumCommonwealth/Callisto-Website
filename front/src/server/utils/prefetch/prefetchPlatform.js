import axios from 'axios';
import handlePlatformRender from '../handlePlatformRender';

const prefetchData = async (req, res, next) => {
  try {
    let auditsList;
    try {
      auditsList = await axios.get(`${process.env.AUDIT_URL}audit-request/list/`);
      auditsList = auditsList.data;
    } catch (e) {
      auditsList = [];
    }
    const initialState = {
      teamMembers: [],
      miningPools: [],
      blockExplorers: [],
      wallets: [],
      exchanges: [],
      blogPosts: [],
      blogTags: [],
      marketStats: {},
      tagPosts: [],
      faq: [],
      singlePost: {},
      auditsList,
    };
    handlePlatformRender(req, res, initialState);
  } catch (err) {
    next(err);
  }
}

export default prefetchData;
