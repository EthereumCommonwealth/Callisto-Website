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
        src='https://ipfs-gateway.0xinfra.com/ipfs/QmSHFKCDvsKVMmApu9S7fGGiBBRXT3WMGurgtzV7i2fPD2'
        frameBorder='0'
      />
    </div>
  </div>
);

export default injectIntl(FinantialTable);
