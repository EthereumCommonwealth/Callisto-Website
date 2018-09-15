import React from 'react';
import { hot } from 'react-hot-loader';
import { IntlProvider } from 'react-intl';
import Header from '../components/AuditsAdmin/commons/Header';
import SingleAudit from '../components/AuditsAdmin/SingleAudit';

const AuditDetail = () => {
  return (
    <IntlProvider locale='en' messages={{}}>
      <div className='AuditDetail'>
        <Header />
        <SingleAudit />
      </div>
    </IntlProvider>
  );

}

export default hot(module)(AuditDetail);
