import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import Countdown from 'react-countdown-now';

class StakingHero extends Component {

  renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className='StakingHero-details'>
          <div className='HowToStake-video sixteen-nine'>
            <iframe
              className='content'
              src='https://www.youtube.com/embed/fbXqCtA1ZT8'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
        </div>
      );
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
                Cold Staking address
              </h2>
              <p className='StakingHero-counter-subtitleDescription'>
                <strong>
                  0xd813419749b3c2cDc94A2F9Cfcf154113264a9d6
                </strong>
              </p>
              <div className='StakingHero-counter-elements'>
                <Countdown
                  date={new Date(Date.UTC(2018, 10, 12, 0, 0, 0))}
                  renderer={this.renderer}
                />
              </div>
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
