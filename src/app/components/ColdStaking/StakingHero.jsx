import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

const StakingHero = ({ intl }) => (
  <div className='StakingHero'>
    <div className='StakingHero-content container'>
      <div className='StakingHero-content-left'>
        <h1
          className='StakingHero-content-left-title'
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'SmartContractTitle' })
          }}
        />
        <p className='StakingHero-content-left-description'>
          <FormattedMessage id='SmartHeroDescription' />
        </p>
        <div className='StakingHero-btns'>
          <a
            href='https://whitepaper.callisto.network/'
            target='_blank'
            className='btn btn-green'
          >
            <FormattedMessage id='SmartHeroAudit' />
          </a>
          <a
            href='https://whitepaper.callisto.network/'
            target='_blank'
            className='btn btn-transparent-green'
          >
            <FormattedMessage id='SmartHeroBecomeAuditor' />
          </a>
        </div>
      </div>
      <div className='StakingHero-content-right'>
        Counter Here
      </div>
    </div>
  </div>
);

StakingHero.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(StakingHero);
