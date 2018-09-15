import axios from 'axios';

export function userLogin(credentials, csrftoken) {
  return (dispatch) => {
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios({
      method: 'post',
      url: 'http://192.168.64.13:8001/login/',
      credentials: 'include',
      headers: { 'X-CSRFToken': csrftoken },
      data: credentials,
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
