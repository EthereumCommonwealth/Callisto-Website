import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import NewHero from '../components/Home/NewHero';
import Community from '../components/Home/Community';
import Newsletter from '../components/commons/Newsletter';
import Footer from '../components/commons/Footer';

const Home = ({ match }) => {
  return (
    <Layout className='Home' match={match}>
      <Header
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
        fromLanding
      />
      <NewHero lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <Community
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
      />
      <Newsletter />
      <Footer
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
        fromLanding
      />
    </Layout>
  );

}

export default hot(module)(Home);
