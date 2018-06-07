import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import Header from '../components/commons/Header';
import messages from '../constants/messages';

addLocaleData([...en]);

const NotFound = ({ match }) => (
  <IntlProvider locale='en' messages={messages.en}>
    <div>
      <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      <div>
        Not Found
      </div>
    </div>
  </IntlProvider>
);

export default NotFound;
