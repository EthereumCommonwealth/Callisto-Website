import webpack from 'webpack';
import fs from 'fs';
import nodeMailer from 'nodemailer';
import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import favicon from 'express-favicon';
import R from 'ramda';
import { langs } from '../app/constants/';
import prefetchData from './utils/prefetch/prefetchData';
import prefetchPost from './utils/prefetch/prefetchPost';
import prefetchTopic from './utils/prefetch/prefetchTopic';
import prefetchFaq from './utils/prefetch/prefetchFaq';

const Env = (envVars) => {
  const ENV_NAMES = {
    development: 'development',
    staging: 'staging',
    production: 'production',
  }
  const current = envVars.NODE_ENV || ENV_NAMES.development
  const envIs = (name) => {
    return (checkName = current) => {
      return name === checkName
    }
  }
  const isProduction = envIs(ENV_NAMES.production)
  const isStaging = envIs(ENV_NAMES.staging)
  const isDevelopment = envIs(ENV_NAMES.development)
  return R.merge(envVars, {
    current,
    isProduction,
    isStaging,
    isDevelopment
  })
}

dotenv.config()
const ENV = Env(process.env)
const app = express()
const port = process.env.PORT || 3000
const email = process.env.EMAIL
const pass = process.env.PASS
const sendTo = process.env.SEND_TO

if (ENV.isDevelopment()) {
  console.log('Loading development server configs')
  const webpackConfig = require('../../webpack.config.js')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const serverConfig = {
    contentBase: 'http://localhost:' + port,
    port: port,
    quiet: false,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    inline: true,
    lazy: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    stats: { colors: true }
  }
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log('Loading server configs')
  app.use(helmet());
  app.disable('x-powered-by');
}
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*.css', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/', prefetchData);
app.get('/smart-contract-audit/', prefetchData);
app.get('/cold-staking/', prefetchData);
app.get('/financial-report/', prefetchData);
app.get('/blog/post/:slug/', prefetchPost);
app.get('/blog/topic/:slug/', prefetchTopic);
app.get('/airdrop/', prefetchData);
app.get('/faq/', prefetchFaq);
app.get('/community-guidlines/', prefetchData);
app.get(`/:lang${langs}/`, prefetchData);
app.get(`/:lang${langs}/faq/`, prefetchFaq);
app.get(`/:lang${langs}/blog/`, prefetchData);
app.get(`/:lang${langs}/blog/post/:slug/`, prefetchPost);
app.get(`/:lang${langs}/blog/topic/:slug/`, prefetchTopic);
app.get(`/:lang${langs}/airdrop/`, prefetchData);
app.get(`/:lang${langs}/cold-staking/`, prefetchData);
app.get(`/:lang${langs}/smart-contract-audit/`, prefetchData);
app.get(`/:lang${langs}/financial-report/`, prefetchData);
app.get(`/:lang${langs}/community-guidlines/`, prefetchData);
app.post('/send-email', (req, res) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: pass,
    },
  });
  const mailOptions = {
    from: 'Callisto Website <hi@callisto.network.com>',
    to: sendTo,
    subject: 'Audit Request',
    html: `
      <p>A new Audit Request has been received.<p>
      <p>Description: </p>
      <p>${req.body.description}</p>
      <p>Source code: <a href='${req.body.sourceCode}' target='_blank'> Source code Link </a></p>
      <p>Email: <strong>${req.body.email}</strong></p>
      <p>Platform: <strong> ${req.body.platform} <strong/></p>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) res.status(501).send(error)
    res.status(200).send({
      succes: true,
    });
  });
});
app.get('*', prefetchData);

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Callisto Network running on por: ${port} 🚀`)
})
