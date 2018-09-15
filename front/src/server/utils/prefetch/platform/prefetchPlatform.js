import axios from 'axios';
import handlePlatformRender from '../../render/platform/handlePlatformRender';

const prefetchData = async (req, res, next) => {
  try {
    let auditsList, audit;
    try {
      auditsList = await axios.get(`${process.env.AUDIT_URL}audit-request/list/`);
      auditsList = auditsList.data;
    } catch (e) {
      auditsList = [];
    }
    try {
      audit = await axios.get(`${process.env.AUDIT_URL}audit-request/login/`);
      audit = {
        platform: [],
        csrf_token: audit.data.csrf_token,
      };
    } catch (e) {
      audit = {
        platform: [],
        csrf_token: null,
      }
    }
    const initialState = {
      auditsList,
      audit,
    };
    handlePlatformRender(req, res, initialState);
  } catch (err) {
    next(err);
  }
}

export default prefetchData;
