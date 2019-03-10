import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import Newsletter from '../components/commons/Newsletter';
import Hero from '../components/Home/Hero';
import InfoContent from '../components/Home/InfoContent';
import Roadmap from '../components/Home/Roadmap';
import Mining from '../components/Home/Mining';
import MiningPools from '../components/Home/MiningPools';
import Team from '../components/Home/Team';
import PartnersList from '../components/Home/PartnersList';
import BlogOverview from '../components/Home/BlogOverview';
import Community from '../components/Home/Community';
import Footer from '../components/commons/Footer';
import Advisors from '../components/Home/Advisors';

const About = ({ match }) => {
  return (
    <Layout className='About' match={match}>
      <Header
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
        fromLanding
      />
      <Hero lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <InfoContent
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
      />
      <Roadmap />
      <Mining />
      <MiningPools />
      <Team />
      <Advisors />
      <PartnersList />
      <BlogOverview />
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

export default hot(module)(About);
