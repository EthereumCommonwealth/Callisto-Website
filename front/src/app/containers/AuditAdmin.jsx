import React from 'react';
import { hot } from 'react-hot-loader';
import { IntlProvider } from 'react-intl';
import Header from '../components/AuditsAdmin/commons/Header';
import AuditsList from '../components/AuditsAdmin/AuditsList';

const AuditAdmin = () => {
  return (
    <IntlProvider locale='en' messages={{}}>
      <div className='AuditAdmin'>
        <Header />
        <AuditsList />
      </div>
    </IntlProvider>
  );

}

export default hot(module)(AuditAdmin);
