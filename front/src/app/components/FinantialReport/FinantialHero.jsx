import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

const FinantialHero = ({ intl }) => (
  <div className='FinantialHero'>
    <div className='FinantialHero-content container'>
      <div className='FinantialHero-content-left'>
        <h1
          className='FinantialHero-content-left-title'
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'FinantialHeroTitle' })
          }}
        />
        <p
          className='FinantialHero-content-left-description'
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'FinantialHeroDescription' })
          }}
        />
      </div>
      <div className='FinantialHero-content-right'>
        <figure className='FinantialHero-content-right-figure'>
          <img src='/image/finantial-report/hero-image.svg' alt='Finantial Report Art'/>
        </figure>
      </div>
    </div>
  </div>
);

FinantialHero.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(FinantialHero);
