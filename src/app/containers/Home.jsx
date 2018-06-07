import React from 'react';
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

const Home = ({ match }) => {
  return (
    <Layout className='Home' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <Hero />
      <InfoContent />
      <Roadmap />
      <WalletsContent />
      <MarketStatus />
      <Mining />
      <MiningPools />
      <Team />
    </Layout>
  );

}

export default Home;
