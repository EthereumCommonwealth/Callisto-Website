import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import ColdStaking from '../containers/ColdStaking';
import SmartContract from '../containers/SmartContract';
import FinantialReport from '../containers/FinantialReport';
import Blog from '../containers/Blog';
import Tag from '../containers/Tag';
import Airdrop from '../containers/Airdrop';
import Faq from '../containers/Faq';
import CommunityGuidlines from '../containers/CommunityGuidlines';
import Notfound from '../containers/NotFound';

const Routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/faq/' component={Faq} />
      <Route exact path='/blog/' component={Blog} />
      <Route exact path='/blog/post/:slug/' component={Blog} />
      <Route exact path='/blog/topic/:slug/' component={Tag} />
      <Route exact path='/airdrop/' component={Airdrop} />
      <Route exact path='/cold-staking/' component={ColdStaking} />
      <Route exact path='/smart-contract/' component={SmartContract} />
      <Route exact path='/financial-report/' component={FinantialReport} />
      <Route exact path='/community-guidlines/' component={CommunityGuidlines} />
      <Route exact path='/:lang(es|en|id|ru)/' component={Home} />
      <Route exact path='/:lang(es|en|id|ru)/faq/' component={Faq} />
      <Route exact path='/:lang(es|en|id|ru)/blog/' component={Blog} />
      <Route exact path='/:lang(es|en|id|ru)/blog/post/:slug/' component={Blog} />
      <Route exact path='/:lang(es|en|id|ru)/blog/topic/:slug/' component={Tag} />
      <Route exact path='/:lang(es|en|id|ru)/airdrop/' component={Airdrop} />
      <Route exact path='/:lang(es|en|id|ru)/cold-staking/' component={ColdStaking} />
      <Route exact path='/:lang(es|en|id|ru)/smart-contract/' component={SmartContract} />
      <Route exact path='/:lang(es|en|id|ru)/financial-report/' component={FinantialReport} />
      <Route exact path='/:lang(es|en|id|ru)/community-guidlines/' component={CommunityGuidlines} />
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
