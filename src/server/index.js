import webpack from 'webpack';
import fs from 'fs';
import nodeMailer from 'nodemailer';
import axios from 'axios';
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

const getTranslations = (lang) => {
  return JSON.parse(fs.readFileSync(`${__dirname}/public/translations/${lang ? lang : 'en'}_translations.json`, 'utf8'));
}

const preparePosts = (posts) => {
  const elements = posts.map((elem) => {
    const baseImageUrl = 'https://news.callisto.network/wp-content/uploads';
    return {
      id: elem.id,
      title: elem.title.rendered,
      description: elem.excerpt.rendered,
      date: elem.date,
      link: elem.link,
      slug: elem.slug,
      cover: `${baseImageUrl}/${elem.better_featured_image.media_details.file}`,
    }
  });
  return elements;
}

const getArticles = async (category) => {
  const articles = await axios.get(`solutions/folders/${category.id}/articles/`, {
    baseURL: 'https://callistonetwork.freshdesk.com/api/v2/',
    headers: { accept: 'application/json' },
    auth: {
      username: process.env.FRESHBOOKS_API,
      password: 'x',
    }
  });
  return {
    id: category.id,
    name: category.name,
    articles: articles.data,
  };
}

const prepareFaq = async (faq) => {
  const elements = [];
  try {
    for (let i = 0; i < faq.length; i++) {
      const article = await getArticles(faq[i])
      elements.push(article);
    }
  } catch (e) {
    console.log(e);
  }
  return elements;
}

const getTag = (slug, tags) => {
  const filtered = tags.filter(elem => elem.slug === slug);
  return filtered.length > 0 ? filtered[0].id : [];
}

const getPost = (slug, posts) => {
  const filtered = posts.filter(elem => elem.slug === slug);
  return filtered.length > 0 ? filtered[0].id : [];
}

const getFAQ = async () => {
  let faqObj;
  try {
    const faq = await axios.get('solutions/categories/43000034228/folders/', {
      baseURL: 'https://callistonetwork.freshdesk.com/api/v2/',
      headers: { accept: 'application/json' },
      auth: {
        username: process.env.FRESHBOOKS_API,
        password: 'x',
      }
    });
    faqObj = await prepareFaq(faq.data);
  } catch (e) {
    console.log(e);
  }
  return faqObj;
}

const prefetchFaq = async (req, res, next) => {
  try {
    const posts = await blogPosts.get('posts?_embed&per_page=50');
    const tags = await blogPosts.get('tags');
    const btcStats = await coinStats.get('ticker/1/');
    const cloStats = await coinStats.get('ticker/2757/');
    const faq = await getFAQ();
    const messages = getTranslations(req.params.lang);
    handleRender(req, res, messages, {
      blogPosts: preparePosts(posts.data),
      blogTags: tags.data,
      marketStats: {
        btcPrice: btcStats.data.data.quotes.USD.price,
        cloPrice: cloStats.data.data.quotes.USD.price,
        volume: cloStats.data.data.quotes.USD.volume_24h,
        marketCap: cloStats.data.data.quotes.USD.market_cap,
      },
      tagPosts: [],
      faq: faq,
      singlePost: {},
      messages,
    })
  } catch (err) {
    next(err);
  }
}

const prefetchData = async (req, res, next) => {
  try {
    const posts = await blogPosts.get('posts?_embed&per_page=50');
    const tags = await blogPosts.get('tags');
    const btcStats = await coinStats.get('ticker/1/');
    const cloStats = await coinStats.get('ticker/2757/');
    const messages = getTranslations(req.params.lang);
    handleRender(req, res, messages, {
      blogPosts: preparePosts(posts.data),
      blogTags: tags.data,
      marketStats: {
        btcPrice: btcStats.data.data.quotes.USD.price,
        cloPrice: cloStats.data.data.quotes.USD.price,
        volume: cloStats.data.data.quotes.USD.volume_24h,
        marketCap: cloStats.data.data.quotes.USD.market_cap,
      },
      tagPosts: [],
      faq: [],
      singlePost: {},
      messages,
    })
  } catch (err) {
    next(err);
  }
}

const prefetchTopic = async (req, res, next) => {
  try {
    const posts = await blogPosts.get('posts?_embed&per_page=50');
    const tags = await blogPosts.get('tags');
    const btcStats = await coinStats.get('ticker/1/');
    const cloStats = await coinStats.get('ticker/2757/');
    const tagId = getTag(req.params.slug, tags.data);
    const tagPosts = await blogPosts.get(`posts?tags=${tagId}`);
    const messages = getTranslations(req.params.lang);

    handleRender(req, res, messages, {
      blogPosts: preparePosts(posts.data),
      blogTags: tags.data,
      marketStats: {
        btcPrice: btcStats.data.data.quotes.USD.price,
        cloPrice: cloStats.data.data.quotes.USD.price,
        volume: cloStats.data.data.quotes.USD.volume_24h,
        marketCap: cloStats.data.data.quotes.USD.market_cap,
      },
      tagPosts: preparePosts(tagPosts.data),
      faq: [],
      singlePost: {},
      messages,
    });
  } catch (err) {
    next(err);
  }
}

const prefetchPost = async (req, res, next) => {
  try {
    const posts = await blogPosts.get('posts?_embed&per_page=50');
    const tags = await blogPosts.get('tags');
    const btcStats = await coinStats.get('ticker/1/');
    const cloStats = await coinStats.get('ticker/2757/');
    const preparedPosts = preparePosts(posts.data);
    const postId = getPost(req.params.slug, preparedPosts);
    const singlePost = await blogPosts.get(`posts/${postId}`);
    const postComments = await blogPosts.get(`comments/?post=${postId}`);
    // const author = await blogPosts.get(`users/${singlePost.author}}`)
    const baseImageUrl = 'https://news.callisto.network/wp-content/uploads';
    const messages = getTranslations(req.params.lang);

    handleRender(req, res, {
      title: singlePost.data.title.rendered,
      description: singlePost.data.excerpt.rendered,
      image: `${baseImageUrl}/${singlePost.data.better_featured_image.media_details.file}`,
      url: `https://callisto.network/blog/post/${singlePost.data.slug}/`,
    }, {
      blogPosts: preparedPosts,
      blogTags: tags.data,
      marketStats: {
        btcPrice: btcStats.data.data.quotes.USD.price,
        cloPrice: cloStats.data.data.quotes.USD.price,
        volume: cloStats.data.data.quotes.USD.volume_24h,
        marketCap: cloStats.data.data.quotes.USD.market_cap,
      },
      singlePost: {
        id: singlePost.data.id,
        title: singlePost.data.title.rendered,
        description: singlePost.data.excerpt.rendered,
        content: singlePost.data.content.rendered,
        date: singlePost.data.date,
        link: singlePost.data.link,
        slug: singlePost.data.slug,
        cover: `${baseImageUrl}/${singlePost.data.better_featured_image.media_details.file}`,
        comments: postComments.data,
        url: `https://callisto.network/blog/post/${singlePost.data.slug}/`,
        // author: author.data,
      },
      faq: [],
      tagPosts: [],
      messages,
    }, true)
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
app.get('/financial-report/', prefetchData);
app.get('/blog/post/:slug/', prefetchPost);
app.get('/blog/topic/:slug/', prefetchTopic);
app.get('/airdrop/', prefetchData);
app.get('/faq/', prefetchFaq);
app.get('/community-guidlines/', prefetchData);
app.get('/:lang(es|en|id|ru|de|zh|it|ko|tr|vi|cs)/', prefetchData);
app.get('/:lang(es|en|id|ru|de|zh|it|ko|tr|vi|cs)/faq/', prefetchFaq);
app.get('/:lang(es|en|id|ru|de|zh|it|ko|tr|vi|cs)/blog/', prefetchData);
app.get('/:lang(es|en|id|ru|de|zh|it|ko|tr|vi|cs)/blog/post/:slug/', prefetchPost);
app.get('/:lang(es|en|id|ru|de|zh|it|ko|tr|vi|cs)/blog/topic/:slug/', prefetchTopic);
app.get('/:lang(es|en|id|ru|de|zh|it|ko|tr|vi|cs)/airdrop/', prefetchData);
app.get('/:lang(es|en|id|ru|de|zh|it|ko|tr|vi|cs)/cold-staking/', prefetchData);
app.get('/:lang(es|en|id|ru|de|zh|it|ko|tr|vi|cs)/smart-contract/', prefetchData);
app.get('/:lang(es|en|id|ru|de|zh|it|ko|tr|vi|cs)/financial-report/', prefetchData);
app.get('/:lang(es|en|id|ru|de|zh|it|ko|tr|vi|cs)/community-guidlines/', prefetchData);
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

const handleRender = (req, res, messages, initialState, fromBlog = false) => {
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
  res.send(renderPage(html, preloadedState, headersInfo(req.originalUrl, messages, fromBlog)));
}

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Callisto Network running on por: ${port} 🚀`)
})
