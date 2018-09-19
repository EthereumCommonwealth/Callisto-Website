import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';

const Hero = ({ intl }) => (
  <div className='Hero'>
    <div className='Hero-content container'>
      <div className='Hero-content-left'>
        <h1
          className='Hero-content-left-title'
          dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: 'HeroTitle' }) }}
        />
        <p className='Hero-content-left-description'>
          <FormattedMessage id='HeroDescription' />
        </p>
        <div className='Hero-btns'>
          <a
            href='https://whitepaper.callisto.network/'
            target='_blank'
            className='btn btn-green'
          >
            <FormattedMessage id='WhitePaper' />
          </a>
          <Link
            to='/buy/'
            className='btn btn-transparent-green'
          >
            <FormattedMessage id='BuyClo' defaultMessage='Buy CLO' />
          </Link>
        </div>
      </div>
      <div className='Hero-content-right'>
        <figure className='Hero-content-right-figure'>
          <img src='/image/hero_image.svg' alt='Hero Art'/>
        </figure>
      </div>
    </div>
  </div>
);

Hero.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(Hero);
