import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style/Global';
import Providers from './Providers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'inter-ui';
import './i18n';
import './App.scss';
import App from 'App';
import { ResetCSS } from '@soy-libs/uikit';

ReactDOM.render(
    <StrictMode>
        <Providers>
            <ResetCSS />
            <GlobalStyle />
            <App />
        </Providers>
    </StrictMode>,
    document.getElementById('root')
);
