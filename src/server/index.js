import webpack from 'webpack';
import fs from 'fs';
import express from 'express';
import dotenv from 'dotenv';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import R from 'ramda';
import rootReducer from '../app/reducers/rootReducer.js';
import initialState from '../app/initialState.js';
import { renderToString } from 'react-dom/server';
import Routes from '../app/routes/serverRoutes.js';

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
  app.use(express.static(__dirname + '/public'));
  app.get('*', handleRender);
} else {
  app.use(express.static(__dirname + '/public'));
  app.get('*', handleRender);
}

function setHeaders(target) {
  switch (target) {
    case '/en/':
    case '/en':
      return {
        title: 'Callisto Network: a Blockchain technology, Cryptocurrency and Smart-Contracts',
        description: 'Callisto Network is a blockchain platform with its own cryptocurrency (CLO) that is based on Ethereum protocol',
        url: 'https://callisto.network/',
      }
    case '/es/':
    case '/es':
      return {
        title: 'Callisto Network: Tecnología Blockchain, Criptomoneda y Contratos inteligentes',
        description: 'Callisto Network es una plataforma de blockchain con su propia Criptomoneda (CLO) que esta basada en el protocolo Ethereum',
        url: 'https://callisto.network/es/',
      }
    default:
      return {
        title: 'Callisto Network: a Blockchain technology, Cryptocurrency and Smart-Contracts',
        description: 'Callisto Network is a blockchain platform with its own cryptocurrency (CLO) that is based on Ethereum protocol',
        url: 'https://callisto.network/',
      }
  }
}

function handleRender(req, res) {
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
  res.send(renderFullPage(html, preloadedState, setHeaders(req.originalUrl)));

}

function renderFullPage(html, preloadedState, headers) {
  return (`
    <!doctype html>
      <html>
        <head>
          <title>${headers.title}</title>
          <meta name="title" content="${headers.title}">
          <meta name="description" content="${headers.description}">
          <meta property="og:url" content="${headers.url}" />
          <meta property="og:title" content="{headers.title}" />
          <meta property="og:description" content="${headers.description}" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="CallistoSupport" />
          <meta name="twitter:title" content="${headers.title}" />
          <meta name="twitter:description" content="${headers.description}" />
          <meta name="google-site-verification" content="4vOPk-f3ZKRulW2kk0HxXcR1ok_7XeHVw9oG4M8dcGU" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0,
            maximum-scale=1, minimum-scale=1, shrink-to-fit=no">
          <link rel="stylesheet" href="/main.css" />
        </head>
        <body>
           <div id="callisto-network">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
        <script src="/main.js"></script>
        </body>
    </html>
  `);

}

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Callisto Network running on por: ${port} 🚀`)
})
