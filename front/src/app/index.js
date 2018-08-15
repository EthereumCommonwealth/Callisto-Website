import React from 'react';
import { hydrate } from 'react-dom';
import { Router } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers/rootReducer';
import routes from './routes/';
import 'styles/index.styl';

if (typeof window !== 'undefined') {
  let composeEnhancers;
  const preloadedState = window.__PRELOADED_STATE__;
  if (process.env.NODE_ENV === 'production') {
    composeEnhancers = compose;
  } else composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  delete window.__PRELOADED_STATE__

  const store = createStore(rootReducer, preloadedState,
    composeEnhancers(applyMiddleware(thunk)),
  );

  const history = createBrowserHistory();

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        { routes }
      </Router>
    </Provider>,
    document.getElementById('callisto-network')
  );
}
