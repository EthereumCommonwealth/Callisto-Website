import webpack from 'webpack';
import fs from 'fs';
import nodeMailer from 'nodemailer';
import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import React from 'react';
import favicon from 'express-favicon';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import R from 'ramda';
import rootReducer from '../app/reducers/rootReducer.js';
import { renderToString } from 'react-dom/server';
import Routes from '../app/routes/serverRoutes.js';
import headersInfo from './utils/headersInfo';
import renderPage from './utils/renderPage';
import blogPosts from '../app/services/blogPosts';
import coinStats from '../app/services/coinStats';

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

const preparePosts = (posts) => {
  const elements = posts.map((elem) => {
    const baseImageUrl = 'https://news.callisto.network/wp-content/uploads';
    return {
      id: elem.id,
      title: elem.title.rendered,
      description: elem.excerpt.rendered,
      date: elem.date,
      link: elem.link,
      cover: `${baseImageUrl}/${elem.better_featured_image.media_details.file}`,
    }
  });
  return elements;
}

const prefetchData = async (req, res, next) => {
  try {
    const posts = await blogPosts.get('posts?_embed/');
    const btcStats = await coinStats.get('ticker/1/');
    const cloStats = await coinStats.get('ticker/2757/');
    handleRender(req, res, {
      blogPosts: preparePosts(posts.data),
      marketStats: {
        btcPrice: btcStats.data.data.quotes.USD.price,
        cloPrice: cloStats.data.data.quotes.USD.price,
        volume: cloStats.data.data.quotes.USD.volume_24h,
        marketCap: cloStats.data.data.quotes.USD.market_cap,
      },
    })
  } catch (err) {
    next(err);
  }
}

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
app.get('/smart-contract/', prefetchData);
app.get('/cold-staking/', prefetchData);
app.get('/finantial-report/', prefetchData);
app.get('/blog/', prefetchData);
app.get('/airdrop/', prefetchData);
app.get('/faq/', prefetchData);
app.get('/community-guidlines/', prefetchData);
app.get('/:lang(es|en|id|ru)/', prefetchData);
app.get('/:lang(es|en|id|ru)/faq/', prefetchData);
app.get('/:lang(es|en|id|ru)/blog/', prefetchData);
app.get('/:lang(es|en|id|ru)/airdrop/', prefetchData);
app.get('/:lang(es|en|id|ru)/cold-staking/', prefetchData);
app.get('/:lang(es|en|id|ru)/smart-contract/', prefetchData);
app.get('/:lang(es|en|id|ru)/finantial-report/', prefetchData);
app.get('/:lang(es|en|id|ru)/community-guidlines/', prefetchData);
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
      <p>A new Audit Request bas been received.<p>
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

function handleRender(req, res, initialState) {
  const context = {}
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );
  const preloadedState = store.getState();
  res.send(renderPage(html, preloadedState, headersInfo(req.originalUrl)));
}

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Callisto Network running on por: ${port} 🚀`)
})
