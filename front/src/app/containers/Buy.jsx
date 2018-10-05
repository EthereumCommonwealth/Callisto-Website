import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import BuyHero from '../components/Buy/BuyHero';
import BuyContent from '../components/Buy/BuyContent';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';

const Buy = ({ match }) => {
  return (
    <Layout className='Faq' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <BuyHero />
      <BuyContent />
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </Layout>
  );

}

export default hot(module)(Buy);
