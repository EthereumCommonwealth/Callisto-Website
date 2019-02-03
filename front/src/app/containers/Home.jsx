import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import NewHero from '../components/Home/NewHero';
import Team from '../components/Home/Team';
import ExchangeList from '../components/Home/ExchangeList';
import WalletsContent from '../components/Home/WalletsContent';
import Footer from '../components/commons/Footer';

const Home = ({ match }) => {
  return (
    <Layout className='Home' match={match}>
      <Header
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
        fromLanding
      />
      <NewHero lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <div className='ExchangeList-main'>
        <ExchangeList />
      </div>
      <WalletsContent />
      <Team />
      <Footer
        lang={match.params && match.params.lang ? match.params.lang : 'en'}
        fromLanding
      />
    </Layout>
  );

}

export default hot(module)(Home);
