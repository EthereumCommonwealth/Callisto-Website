import axios from 'axios';
import auth from '../services/auth';

export function userLogin(credentials, csrftoken) {
  return (dispatch) => {
    axios.post('/audit-login/', {
      credentials,
      csrf_token: csrftoken,
    })
      .then((response) => {
        auth.setToken(response.data.auth.jwt)
        dispatch({
          type: 'SET-CURRENT-USER',
          payload: response.data.auth.user,
        })
      })
      .catch(err => {
        console.log(err.response.data.error);
      });
  };
};

export function verifyToken(jwt, csrftoken) {
  return (dispatch) => {
    axios.post('/login-check/', {
      jwt,
      csrf_token: csrftoken,
    })
      .then((response) => {
        auth.setToken(response.data.auth.jwt)
        dispatch({
          type: 'SET-CURRENT-USER',
          payload: response.data.auth.user,
        })
      })
      .catch(err => {
        console.log('Error', err);
      });
  };
};

export function unsetUser() {
  return (dispatch) => {
    auth.deleteToken();
    dispatch({ type: 'UNSET-CURRENT-USER' })
  };
};

export default {
  userLogin,
  verifyToken,
  unsetUser,
}
