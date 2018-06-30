import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import SmartHero from '../components/SmartContracts/SmartHero';
import Description from '../components/SmartContracts/Description';
import SmartDetail from '../components/SmartContracts/SmartDetail';
import AuditorsCheck from '../components/SmartContracts/AuditorsCheck';
import SmartAuthor from '../components/SmartContracts/SmartAuthor';
import Footer from '../components/commons/Footer';

const SmartContract = ({ match }) => {
  return (
    <Layout className='SmartContract' match={match}>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <SmartHero />
      <Description />
      <SmartDetail />
      <AuditorsCheck />
      <SmartAuthor />
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </Layout>
  );

}

export default hot(module)(SmartContract);
