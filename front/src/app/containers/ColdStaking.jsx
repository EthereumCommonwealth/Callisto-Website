import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import BuyMineBanner from '../components/commons/BuyMineBanner';
import StakingHero from '../components/ColdStaking/StakingHero';
import HowToStake from '../components/ColdStaking/HowToStake';
import StakingDescription from '../components/ColdStaking/StakingDescription';
import StakingHowWorks from '../components/ColdStaking/StakingHowWorks';
import StakingWorkflow from '../components/ColdStaking/StakingWorkflow';
import StakingLongStory from '../components/ColdStaking/StakingLongStory';
import Footer from '../components/commons/Footer';

const ColdStaking = ({ match }) => {
  return (
    <Layout className='ColdStaking' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <StakingHero />
      <StakingDescription />
      <HowToStake />
      <StakingHowWorks />
      <StakingWorkflow />
      <StakingLongStory />
      <BuyMineBanner
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
      />
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </Layout>
  );

}

export default hot(module)(ColdStaking);
