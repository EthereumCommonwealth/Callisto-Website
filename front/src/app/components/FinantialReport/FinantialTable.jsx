import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

const FinantialTable = ({ intl }) => (
  <div className='FinantialTable'>
    <div className='container'>
      <SectionHeading title={intl.formatMessage({ id: 'FinantialTableTitle' })} />
      <div className='FinantialTable-address'>
        <FormattedMessage id='FinantialTableWalletAddress'/>
        <br />
        <span className='FinantialTable-address-text'>
          0x74682Fc32007aF0b6118F259cBe7bCCC21641600
        </span>
      </div>
      <iframe
        className='FinantialTable-frame'
        src='https://cloudflare-ipfs.com/ipfs/QmbXgrCu8H21uVuQNjtqTHo4zBF8kB5NMK6GYL32JVD8qx'
        frameBorder='0'
        loading='lazy'
      />
    </div>
  </div>
);

export default injectIntl(FinantialTable);
