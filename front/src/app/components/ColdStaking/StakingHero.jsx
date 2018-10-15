import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import Countdown from 'react-countdown-now';

class StakingHero extends Component {

  renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return 'Completed';
    }
    return (
      <div className='StakingHero-counter-holder'>
        <div>
          <div className='StakingHero-counter-holder-square'>
            <span className='StakingHero-counter-holder-number'>
              {days}
            </span>
          </div>
          <span className='StakingHero-counter-text'>
            <FormattedMessage id='days' />
          </span>
        </div>
        <div>
          <div className='StakingHero-counter-holder-square'>
            <span className='StakingHero-counter-holder-number'>
              {hours}
            </span>
          </div>
          <span className='StakingHero-counter-text'>
            <FormattedMessage id='hours' />
          </span>
        </div>
        <div>
          <div className='StakingHero-counter-holder-square'>
            <span className='StakingHero-counter-holder-number'>
              {minutes}
            </span>
          </div>
          <span className='StakingHero-counter-text'>
            <FormattedMessage id='minutes' />
          </span>
        </div>
        <div>
          <div className='StakingHero-counter-holder-square'>
            <span className='StakingHero-counter-holder-number'>
              {seconds}
            </span>
          </div>
          <span className='StakingHero-counter-text'>
            <FormattedMessage id='seconds' />
          </span>
        </div>
      </div>
    );
  };

  render() {
    const { intl } = this.props;
    return (
      <div className='StakingHero'>
        <div className='StakingHero-content container'>
          <div className='StakingHero-content-left'>
            <h1
              className='StakingHero-content-left-title'
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: 'StakingHeroTitle' })
              }}
            />
            <p className='StakingHero-content-left-description'>
              <FormattedMessage id='StakingHeroDescription' />
            </p>
            <div className='StakingHero-btns'>
              <a
                href='https://callisto.network/blog/post/callisto-network-cold-staking-protocol/'
                target='_blank'
                className='btn btn-green'
              >
                <FormattedMessage id='StakingHeroProtocolBtn' />
              </a>
            </div>
          </div>
          <div className='StakingHero-content-right'>
            <div className='StakingHero-counter square'>
              <h2 className='StakingHero-counter-title'>
                <FormattedMessage id='ComingSoon'/>
              </h2>
              <p className='StakingHero-counter-description'>
                <FormattedMessage id='StakingHeroCounterText'/>
              </p>
              <div className='StakingHero-counter-elements'>
                <Countdown
                  date={1541894400000}
                  renderer={this.renderer}
                />
              </div>
              <p className='StakingHero-counter-date'>
                <FormattedMessage id='StakingHeroCounterDate'/>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StakingHero.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(StakingHero);
