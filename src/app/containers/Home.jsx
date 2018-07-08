import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import Newsletter from '../components/commons/Newsletter';
import Hero from '../components/Home/Hero';
import InfoContent from '../components/Home/InfoContent';
import Roadmap from '../components/Home/Roadmap';
import WalletsContent from '../components/Home/WalletsContent';
import MarketStatus from '../components/Home/MarketStatus';
import Mining from '../components/Home/Mining';
import MiningPools from '../components/Home/MiningPools';
import Team from '../components/Home/Team';
import BlogOverview from '../components/Home/BlogOverview';
import Community from '../components/Home/Community';
import Footer from '../components/commons/Footer';

const Home = ({ match }) => {
  return (
    <Layout className='Home' match={match}>
      <Header
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
        fromLanding
      />
      <Hero />
      <InfoContent
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
      />
      <Roadmap />
      <WalletsContent />
      <MarketStatus />
      <Mining />
      <MiningPools />
      <Team />
      <BlogOverview />
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
