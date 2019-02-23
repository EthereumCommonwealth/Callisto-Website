import axios from 'axios';

const commentSubmit = (req, res) => {
  axios.defaults.xsrfCookieName = 'csrftoken'
  axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  axios({
    method: 'post',
    url: `${process.env.AUDIT_URL}audit-request/comment-audit/`,
    credentials: 'include',
    headers: {
      'X-CSRFToken': req.body.csrf_token,
      'Cookie': `csrftoken=${req.body.csrf_token};`,
      Authorization: `Bearer ${req.body.jwt}`,
    },
    data: {
      auditId: req.body.commentDetails.auditId,
      comment: req.body.commentDetails.comment,
    }
  })
    .then(() => res.status(200).send({ succes: true }))
    .catch(err => {
      console.log('Error', err);
      res.status(404);
    });
}

export default commentSubmit;
