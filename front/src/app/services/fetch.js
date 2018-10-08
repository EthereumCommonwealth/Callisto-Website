import axios from 'axios';
import Auth from './auth';

const fetch = () => {
  const authHeaders = (token) => {
    const csrftoken = Auth.csrftoken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    if (csrftoken) {
      headers['X-CSRFToken'] = csrftoken;
    }

    return headers;
  };

  const authenticated = () => {
    const token = Auth.token();
    const headers = authHeaders(token);

    return axios.create({ headers });
  };

  const isAuthenticated = () => {
    const token = Auth.token();

    return !!token;
  };

  return {
    ...axios,
    authenticated,
    isAuthenticated,
  };
};

export default fetch();
