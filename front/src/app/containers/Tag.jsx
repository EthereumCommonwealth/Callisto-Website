import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import StakingPromo from '../components/commons/StakingPromo';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import TagPosts from '../components/Blog/TagPosts';
import BlogTags from '../components/Blog/BlogTags';

const Tag = ({ match }) => {
  return (
    <Layout className='Tag' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <StakingPromo lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <BlogTags selectedTag={match.params.slug} />
      <TagPosts selectedTag={match.params.slug} />
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </Layout>
  );

}

export default hot(module)(Tag);
