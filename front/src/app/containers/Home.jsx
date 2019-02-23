import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import NewHero from '../components/Home/NewHero';
import Community from '../components/Home/Community';
import Newsletter from '../components/commons/Newsletter';
import RealtimeMetrics from '../components/Home/RealtimeMetrics';
import HowWorks from '../components/Home/HowWorks';
import Footer from '../components/commons/Footer';

const Home = ({ match }) => {
  return (
    <Layout className='Home' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <NewHero lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <RealtimeMetrics />
      <HowWorks />
      <Community lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <Newsletter />
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </Layout>
  );

}

export default hot(module)(Home);
