import axios from 'axios';

const loginCheck = (req, res) => {
  axios.defaults.xsrfCookieName = 'csrftoken'
  axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  axios({
    method: 'post',
    url: `${process.env.AUDIT_URL}audit-request/auth-check/`,
    credentials: 'include',
    headers: {
      'X-CSRFToken': req.body.csrf_token,
      'Cookie': `csrftoken=${req.body.csrf_token};`,
      Authorization: `Bearer ${req.body.jwt}`,
    },
  })
    .then( response => res.status(200).send({ auth: response.data }))
    .catch(err => {
      console.log('Error', err);
      res.status(404);
    });
}

export default loginCheck;
