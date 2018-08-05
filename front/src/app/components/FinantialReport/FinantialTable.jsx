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
        src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTHbKD9_qqc2pzivkn-U6reX6pR3WF1-ryX-ZRNtCy54bg0q8JaM_VcoctRll1SgiX7t7UwN1BqOZN-/pubhtml?gid=1393329941&single=true'
        frameBorder='0'
      />
    </div>
  </div>
);

export default injectIntl(FinantialTable);
