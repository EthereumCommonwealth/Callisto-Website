import React from 'react';
import Header from '../components/commons/Header';

const NotFound = ({ match }) => (
  <div>
    <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    <div>
      Not Found
    </div>
  </div>
);

export default NotFound;
