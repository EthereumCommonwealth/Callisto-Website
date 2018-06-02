import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';

const NotFound = () => (
  <Layout className='NotFound'>
    Page Not Found
  </Layout>
);

export default hot(module)(NotFound);
