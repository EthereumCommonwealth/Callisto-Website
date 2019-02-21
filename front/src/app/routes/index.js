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
import Post from '../containers/Post';
import AuditAdmin from '../containers/AuditAdmin';
import AuditDetail from '../containers/AuditDetail';
// import Buy from '../containers/Buy';
import CommunityGuidlines from '../containers/CommunityGuidlines';
import Notfound from '../containers/NotFound';
import { langs } from '../constants/';

const Routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/faq/' component={Faq} />
      {/* <Route exact path='/buy/' component={Buy} /> */}
      <Route exact path='/blog/' component={Blog} />
      <Route exact path='/blog/post/:slug/' component={Post} />
      <Route exact path='/blog/topic/:slug/' component={Tag} />
      <Route exact path='/airdrop/' component={Airdrop} />
      <Route exact path='/cold-staking/' component={ColdStaking} />
      <Route exact path='/smart-contract-audit/' component={SmartContract} />
      <Route exact path='/financial-report/' component={FinantialReport} />
      <Route exact path='/community-guidelines/' component={CommunityGuidlines} />
      <Route exact path={`/:lang${langs}/`} component={Home} />
      <Route exact path={`/:lang${langs}/faq/`} component={Faq} />
      {/* <Route exact path={`/:lang${langs}/buy/`} component={Buy} /> */}
      <Route exact path={`/:lang${langs}/blog/`} component={Blog} />
      <Route exact path={`/:lang${langs}/blog/post/:slug/`} component={Post} />
      <Route exact path={`/:lang${langs}/blog/topic/:slug/`} component={Tag} />
      <Route exact path={`/:lang${langs}/airdrop/`} component={Airdrop} />
      <Route exact path={`/:lang${langs}/cold-staking/`} component={ColdStaking} />
      <Route exact path={`/:lang${langs}/smart-contract-audit/`} component={SmartContract} />
      <Route exact path={`/:lang${langs}/financial-report/`} component={FinantialReport} />
      <Route exact path={`/:lang${langs}/community-guidelines/`} component={CommunityGuidlines} />
      {/* Audit URLS */}
      <Route exact path='/audits/' component={AuditAdmin} />
      <Route exact path='/audits/:id-:slug/' component={AuditDetail} />
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
