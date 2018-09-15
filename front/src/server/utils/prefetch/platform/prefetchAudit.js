import axios from 'axios';
import handlePlatformRender from '../../render/platform/handlePlatformRender';

const prefetchAudit = async (req, res, next) => {
  try {
    let audit;
    try {
      audit = await axios.get(`${process.env.AUDIT_URL}audit-request/get/${req.params.id}-${req.params.slug}`);
      audit = audit.data;
    } catch (e) {
      audit = {};
    }
    const initialState = {
      audit,
    };
    handlePlatformRender(req, res, initialState);
  } catch (err) {
    next(err);
  }
}

export default prefetchAudit;
