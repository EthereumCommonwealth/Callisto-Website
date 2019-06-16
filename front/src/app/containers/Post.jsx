import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import BlogTags from '../components/Blog/BlogTags';
import PostDetails from '../components/Blog/PostDetails';
import HardForkPromo from '../components/commons/HardForkPromo';

const Post = ({ match }) => {
  return (
    <Layout className='Blog' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <HardForkPromo />
      <BlogTags />
      <PostDetails />
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </Layout>
  );

}

export default hot(module)(Post);
