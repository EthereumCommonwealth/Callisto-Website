import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import StakingPromo from '../components/commons/StakingPromo';
import FaqContent from '../components/Faq/FaqContent';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';

const Faq = ({ match }) => {
  return (
    <Layout className='Faq' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <StakingPromo lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <FaqContent />
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </Layout>
  );

}

export default hot(module)(Faq);
