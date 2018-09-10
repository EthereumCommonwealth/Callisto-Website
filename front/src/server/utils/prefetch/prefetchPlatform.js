import axios from 'axios';
import handlePlatformRender from '../render/platform/handlePlatformRender';

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
      auditsList,
    };
    handlePlatformRender(req, res, initialState);
  } catch (err) {
    next(err);
  }
}

export default prefetchData;
