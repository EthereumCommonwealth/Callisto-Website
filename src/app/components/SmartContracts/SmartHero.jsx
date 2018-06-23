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
            __html: intl.formatMessage({
              id: 'SmartContractTitle',
              defaultMessage: 'Smart Contract Audit',
            })
          }}
        />
        <p className='SmartHero-content-left-description'>
          <FormattedMessage
            id='SmartHeroDescription'
            defaultMessage='Full service smart contract audit solution'
          />
        </p>
        <div className='SmartHero-btns'>
          <a
            href='https://whitepaper.callisto.network/'
            target='_blank'
            className='btn btn-green'
          >
            <FormattedMessage
              id='SmartHeroAudit'
              defaultMessage='Audit a contract'
            />
          </a>
          <a
            href='https://whitepaper.callisto.network/'
            target='_blank'
            className='btn btn-transparent-green'
          >
            <FormattedMessage
              id='SmartHeroBecomeAuditor'
              defaultMessage='Become an auditor'
            />
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
