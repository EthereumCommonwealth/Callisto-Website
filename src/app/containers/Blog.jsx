import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';

const Blog = ({ match }) => {
  return (
    <Layout className='Blog' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      Blog
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </Layout>
  );

}

export default hot(module)(Blog);
