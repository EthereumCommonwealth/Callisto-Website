import axios from 'axios';

export function userLogin(credentials, csrftoken) {
  return (dispatch) => {
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios('/clo-audit/audit-request/login/', {
      method: 'post',
      headers: {
        'X-CSRFToken': csrftoken,
        'content-type': 'multipart/form-data',
      },
      data: credentials,
      withCredentials: true,
    })
      .then((response) => {
        dispatch(() => {
          console.log(response.data);
          setCurrentUser(response.data);
        })
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
}

function setCurrentUser(payload) {
  return {
    type: 'SET-CURRENT-USER',
    payload,
  }
};

export default {
  userLogin,
}
