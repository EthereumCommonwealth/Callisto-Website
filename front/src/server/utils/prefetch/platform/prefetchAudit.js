import axios from 'axios';
import handlePlatformRender from '../../render/platform/handlePlatformRender';

const prefetchAudit = async (req, res, next) => {
  try {
    let auditDetail, audit;
    try {
      auditDetail = await axios.get(`${process.env.AUDIT_URL}audit-request/get/${req.params.id}-${req.params.slug}`);
      auditDetail = auditDetail.data;
    } catch (e) {
      auditDetail = {};
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
      auditDetail,
      audit,
    };
    handlePlatformRender(req, res, initialState);
  } catch (err) {
    next(err);
  }
}

export default prefetchAudit;
