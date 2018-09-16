import axios from 'axios';

export function userLogin(credentials, csrftoken) {
  return (dispatch) => {
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios('http://localhost:8001/audit-request/login/', {
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
          console.log(response.data)
        })
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
}

export default {
  userLogin,
}
