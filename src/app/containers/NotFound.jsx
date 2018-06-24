import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import messages from '../constants/messages/enMessages';

addLocaleData([...en]);

const NotFound = ({ match }) => (
  <IntlProvider locale='en' messages={messages}>
    <div>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <div>
        Not Found
      </div>
      <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
    </div>
  </IntlProvider>
);

export default NotFound;
