import axios from 'axios';

const createAudit = (req, res) => {
  axios.defaults.xsrfCookieName = 'csrftoken'
  axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  axios({
    method: 'post',
    url: `${process.env.AUDIT_URL}audit-request/create/`,
    credentials: 'include',
    headers: {
      'X-CSRFToken': req.body.csrf_token,
      'Cookie': `csrftoken=${req.body.csrf_token};`,
    },
    data: {
      title: req.body.title,
      description: req.body.description,
      sourceCodeUrl: req.body.sourceCode,
      disclosurePolicy: req.body.email,
      platform: req.body.platform,
      media: req.body.media,
      contact: req.body.contact,
      policiesText: req.body.policiesText,
    },
  })
    .then(() => res.status(200).send({ succes: true }))
    .catch(err => {
      console.log('Error', err);
      res.status(404);
    });
}

export default createAudit;
