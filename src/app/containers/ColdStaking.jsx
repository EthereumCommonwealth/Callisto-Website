import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';

const ColdStaking = ({ match }) => {
  return (
    <Layout className='ColdStaking' match={match}>
      <Header
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
        fromLanding
      />
      Cold Staking Here
      <Footer
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
        fromLanding
      />
    </Layout>
  );

}

export default hot(module)(ColdStaking);
