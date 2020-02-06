import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { FormattedMessage, injectIntl } from 'react-intl';

class NewNewHero extends Component {

  render() {
    return (
      <div className='NewHero'>
        <div className='NewHero-content container'>
          <div className='NewHero-content-left'>
            <h1 className='NewHero-content-left-title'>
              <FormattedMessage id='StakingDescriptionWhatIsTitle' />
            </h1>
            <p className='NewHero-content-left-description'>
              <FormattedMessage id='StakingDescriptionWhatIsText' />
            </p>
            <div className='NewHero-btns'>
              <a
                href='https://changenow.io/exchange?amount=1&from=btc&link_id=501c1d32f1b390&to=clo'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-green'
              >
                <FormattedMessage id='BuyNow' defaultMessage='Buy now!' />
              </a>
              <a
                href='https://whitepaper.callisto.network/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-transparent-green'
              >
                <FormattedMessage id='WhitePaper' />
              </a>
            </div>
          </div>
          <div className='NewHero-content-right'>
            <figure className='NewHero-content-right-figure'>
              <img src='/image/new-hero-image.svg' alt='Hero Art'/>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

NewNewHero.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(NewNewHero);
