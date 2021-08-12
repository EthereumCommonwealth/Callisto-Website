import React, { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@soy-libs/uikit'
import Footer from 'components/Footer';
import SuspenseWithChunkError from './components/SuspenseWithChunkError';
import PageLoader from './components/PageLoader'
import GlobalStyle from './style/Global'
import history from './routerHistory'

const Home = lazy(() => import('./pages/Home'));
const Bridge = lazy(() => import('./pages/Bridge'));

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
                    <Route path="/clo-bnb-bridge">
                        <Bridge />
                    </Route>
                </Switch>
            </SuspenseWithChunkError>
            <Footer/>
        </Router>
    )
}

export default React.memo(App)
