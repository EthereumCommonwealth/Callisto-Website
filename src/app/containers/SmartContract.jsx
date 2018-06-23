import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import SmartHero from '../components/SmartContracts/SmartHero';
import Footer from '../components/commons/Footer';

const SmartContract = ({ match }) => {
  return (
    <Layout className='SmartContract' match={match}>
      <Header
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
        fromLanding
      />
      <SmartHero />
      <Footer
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
        fromLanding
      />
    </Layout>
  );

}

export default hot(module)(SmartContract);
