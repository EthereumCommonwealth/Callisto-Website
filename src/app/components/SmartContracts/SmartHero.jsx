import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

const SmartHero = ({ intl }) => (
  <div className='SmartHero'>
    <div className='SmartHero-content container'>
      <div className='SmartHero-content-left'>
        <h1
          className='SmartHero-content-left-title'
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'SmartContractTitle' })
          }}
        />
        <p className='SmartHero-content-left-description'>
          <FormattedMessage id='SmartHeroDescription' />
        </p>
        <div className='SmartHero-btns'>
          <a
            href='https://whitepaper.callisto.network/'
            target='_blank'
            className='btn btn-green'
          >
            <FormattedMessage id='SmartHeroAudit' />
          </a>
          <a
            href='https://github.com/EthereumCommonwealth/Proposals/issues/2/'
            target='_blank'
            className='btn btn-transparent-green'
          >
            <FormattedMessage id='SmartHeroBecomeAuditor' />
          </a>
        </div>
      </div>
      <div className='SmartHero-content-right'>
        <figure className='SmartHero-content-right-figure'>
          <img src='/image/smart-contracts/hero-image.svg' alt='SmartHero Art'/>
        </figure>
      </div>
    </div>
  </div>
);

SmartHero.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(SmartHero);
