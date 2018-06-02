import React from 'react';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';

const Home = ({ match }) => {
  console.log(match);
  return (
    <Layout className='Home' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </Layout>
  );

}

export default Home;
