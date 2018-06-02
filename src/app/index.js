import React from 'react';
import { hydrate } from 'react-dom';
import { Router } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers/rootReducer';
import routes from './routes/';
import 'styles/index.styl';
import 'styles/fontawesome/svg-with-js/js/fontawesome-all.js';

if (typeof window !== 'undefined') {
  let composeEnhancers;
  const preloadedState = window.__PRELOADED_STATE__;
  if (process.env.NODE_ENV === 'production') {
    composeEnhancers = compose;
  } else composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  delete window.__PRELOADED_STATE__

  const routeMiddleware = routerMiddleware(createBrowserHistory());

  const store = createStore(rootReducer, preloadedState,
    composeEnhancers(
      applyMiddleware(
        routeMiddleware,
        thunk,
      ),
    ),
  );
  const history = syncHistoryWithStore(createBrowserHistory(), store);

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        { routes }
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}
