import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { renderToString } from 'react-dom/server';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import rootReducer from '../../../../app/reducers/rootReducer.js';
import Routes from '../../../../app/routes/serverRoutes.js';
import renderPlatform from './renderPlatform';

const handlePlatformRender = (req, res, initialState) => {
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
  res.send(renderPlatform(html, preloadedState, req.hashManifest));
}

export default handlePlatformRender;
