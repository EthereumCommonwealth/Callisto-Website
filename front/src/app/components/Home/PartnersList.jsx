import React from 'react';
import { injectIntl } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

const PartnersList = ({ exchanges, intl }) => (
  <div className='PartnersList'>
    <div className='container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'OurPartners', defaultMessage: 'Our Partners' })}
      />
      <div className='PartnersList-content'>
        <figure className='PartnersList-content-figure'>
          <a href='https://www.dobitrade.com/' target='_blank'>
            <img src='/image/partners/dobi_logo.svg' alt='Dobitrade' />
          </a>
        </figure>
        <figure className='PartnersList-content-figure'>
          <a href='https://www.coinomi.com/' target='_blank'>
            <img src='/image/partners/coinomi-logo.png' alt='Coinomi' />
          </a>
        </figure>
        <figure className='PartnersList-content-figure'>
          <a href='https://entethalliance.org/' target='_blank'>
            <img src='/image/partners/eea.png' alt='Enterprise Ethereum Alliance' />
          </a>
        </figure>
        <figure className='PartnersList-content-figure'>
          <a href='http://getonexchange.com/' target='_blank'>
            <img src='/image/partners/goe.png' alt='Get on Exchange' />
          </a>
        </figure>
        <figure className='PartnersList-content-figure'>
          <a href='https://crynet.io/' target='_blank'>
            <img src='/image/partners/crynet.png' alt='Crynet' />
          </a>
        </figure>
        <figure className='PartnersList-content-figure'>
          <a href='https://www.smartcontractaudits.com/' target='_blank'>
            <img src='/image/partners/smart-contract-audits-logo.svg' alt='Smartcontractaudits' />
          </a>
        </figure>
      </div>
    </div>
  </div>
);

export default injectIntl(PartnersList);
