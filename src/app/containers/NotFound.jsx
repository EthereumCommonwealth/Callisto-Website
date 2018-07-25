import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import en from 'react-intl/locale-data/en';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';

addLocaleData([...en]);

const NotFound = ({ match, messages }) => (
  <IntlProvider locale='en' messages={messages}>
    <div>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <div className='container'>
        <div className='NotFound'>
          <h1>404</h1>
          <h4>Page not found</h4>
          <h5>Try from our <a href='/'>home page</a></h5>
        </div>
      </div>
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </div>
  </IntlProvider>
);

function mapStateTopProps(state) {
  return {
    messages: state.messages,
  };
}

export default connect(mapStateTopProps)(NotFound);
