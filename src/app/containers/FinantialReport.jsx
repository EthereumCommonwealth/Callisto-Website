import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';

const FinantialReport = ({ match }) => {
  return (
    <Layout className='FinantialReport' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      Finantial Report
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </Layout>
  );

}

export default hot(module)(FinantialReport);
