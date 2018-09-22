import axios from 'axios';

const login = (req, res) => {
  axios.defaults.xsrfCookieName = 'csrftoken'
  axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  axios({
    method: 'post',
    url: `${process.env.AUDIT_URL}audit-request/login/`,
    credentials: 'include',
    headers: {
      'X-CSRFToken': req.body.csrf_token,
      'Cookie': `csrftoken=${req.body.csrf_token};`,
    },
    data: {
      username: req.body.credentials.username,
      password: req.body.credentials.password,
    },
  })
    .then( response => res.status(200).send({ auth: response.data }))
    .catch(err => {
      if (err.response.status === 403) {
        res.status(403).send({ error: 'Invalid credentials' });
      } else {
        res.status(500).send({ error: 'Server Error' });
      }
    });
}

export default login;
