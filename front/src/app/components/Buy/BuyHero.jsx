import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

const BuyHero = ({ intl, openModal }) => (
  <div className='BuyHero'>
    <div className='BuyHero-content container'>
      <div className='BuyHero-content-left'>
        <h1
          className='BuyHero-content-left-title'
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'BuyHeroTitle', defaultMessage: 'Buy CLO directly' })
          }}
        />
      </div>
      <div className='BuyHero-content-right'>
        <figure className='BuyHero-content-right-figure'>
          <img src='/image/buy/hero-image.svg' alt='BuyHero Art'/>
        </figure>
      </div>
    </div>
  </div>
);

BuyHero.propTypes = {
  intl: PropTypes.object,
  openModal: PropTypes.func,
};

export default injectIntl(BuyHero);
