import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ResetCSS } from '@pancakeswap-libs/uikit';
import GlobalStyle from './style/Global';
import 'bootstrap/dist/css/bootstrap.min.css';
import Providers from './Providers';
import 'inter-ui';
import './i18n';
import './App.css';
import App from 'App';

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
