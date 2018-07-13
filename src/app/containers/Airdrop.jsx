import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import AirdropHero from '../components/Airdrop/AirdropHero';
import AirdropDescription from '../components/Airdrop/AirdropDescription';
import Footer from '../components/commons/Footer';

const Airdrop = ({ match }) => {
  return (
    <Layout className='Airdrop' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <AirdropHero />
      <AirdropDescription />
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </Layout>
  );

}

export default hot(module)(Airdrop);
