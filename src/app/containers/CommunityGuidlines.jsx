import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import GuidlineHead from '../components/CommunityGuidlines/GuidlineHead';
import GuidlineBullets from '../components/CommunityGuidlines/GuidlineBullets';

const CommunityGuidlines = ({ match }) => {
  return (
    <Layout className='CommunityGuidlines' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <GuidlineHead />
      <GuidlineBullets />
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </Layout>
  );

}

export default hot(module)(CommunityGuidlines);
