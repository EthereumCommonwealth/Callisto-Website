import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

const AirdropHero = ({ intl }) => (
  <div className='AirdropHero'>
    <div className='AirdropHero-content container'>
      <div className='AirdropHero-content-left'>
        <h1
          className='AirdropHero-content-left-title'
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'AirdropHeroTitle' })
          }}
        />
        <p
          className='AirdropHero-content-left-description'
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'AirdropHeroDescription' })
          }}
        />
        <p
          className='AirdropHero-content-left-description secondary'
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'AirdropHeroSecondDescription' })
          }}
        />
      </div>
      <div className='AirdropHero-content-right'>
        <figure className='AirdropHero-content-right-figure'>
          <img src='/image/airdrop/airdrop-hero.svg' alt='AirdropHero Art'/>
        </figure>
      </div>
    </div>
  </div>
);

AirdropHero.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(AirdropHero);
