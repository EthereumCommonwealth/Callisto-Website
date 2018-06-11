import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import Hero from '../components/Hero';
import InfoContent from '../components/InfoContent';
import Roadmap from '../components/Roadmap';
import WalletsContent from '../components/WalletsContent';
import MarketStatus from '../components/MarketStatus';
import Mining from '../components/Mining';
import MiningPools from '../components/MiningPools';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Community from '../components/Community';
import Newsletter from '../components/Newsletter';
import Footer from '../components/commons/Footer';

const Home = ({ match }) => {
  return (
    <Layout className='Home' match={match}>
      <Header
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
        fromLanding
      />
      <Hero />
      <InfoContent />
      <Roadmap />
      <WalletsContent />
      <MarketStatus />
      <Mining />
      <MiningPools />
      <Team />
      <Blog />
      <Community />
      <Newsletter />
      <Footer
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
        fromLanding
      />
    </Layout>
  );

}

export default hot(module)(Home);
