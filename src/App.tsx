import React, { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@soy-libs/uikit'
import SuspenseWithChunkError from './components/SuspenseWithChunkError';
import PageLoader from './components/PageLoader'
import GlobalStyle from './style/Global'
import history from './routerHistory'
import Footer from 'components/Footer';

const Home = lazy(() => import('./pages/Home'));

const App: React.FC = () => {

    return (
        <Router history={history}>
            <ResetCSS />
            <GlobalStyle />
            <SuspenseWithChunkError fallback={<PageLoader />}>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </Switch>
            </SuspenseWithChunkError>
            <Footer/>
        </Router>
    )
}

export default React.memo(App)
