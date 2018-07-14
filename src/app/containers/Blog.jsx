import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import PostsList from '../components/Blog/PostsList';

const Blog = ({ match }) => {
  return (
    <Layout className='Blog' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <PostsList />
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </Layout>
  );

}

export default hot(module)(Blog);
