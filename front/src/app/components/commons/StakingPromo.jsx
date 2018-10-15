import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';

class StakingPromo extends Component {

  state = { promoEnded: false };

  renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return 'Completed';
    }
    return (
      <div className='StakingPromo-counter-holder'>
        <div className='StakingPromo-counter-holder-elem'>
          <div className='StakingPromo-counter-holder-square'>
            <span className='StakingPromo-counter-holder-number'>
              <strong>{days}</strong>
            </span>
          </div>
          <span className='StakingPromo-counter-text'>
            D
          </span>
        </div>
        <div className='StakingPromo-counter-holder-elem'>
          <div className='StakingPromo-counter-holder-square'>
            <span className='StakingPromo-counter-holder-number'>
              <strong>{hours}</strong>
            </span>
          </div>
          <span className='StakingPromo-counter-text'>
            h
          </span>
        </div>
        <div className='StakingPromo-counter-holder-elem'>
          <div className='StakingPromo-counter-holder-square'>
            <span className='StakingPromo-counter-holder-number'>
              <strong>{minutes}</strong>
            </span>
          </div>
          <span className='StakingPromo-counter-text'>
            m
          </span>
        </div>
        <div className='StakingPromo-counter-holder-elem'>
          <div className='StakingPromo-counter-holder-square'>
            <span className='StakingPromo-counter-holder-number'>
              <strong>{seconds}</strong>
            </span>
          </div>
          <span className='StakingPromo-counter-text'>
            s
          </span>
        </div>
      </div>
    );
  };

  render() {
    const { promoEnded } = this.state;
    if (promoEnded) { return null; }
    return (
      <div className='StakingPromo'>
        <div className='StakingPromo-content container'>
          <div className='StakingPromo-text'>
            <h2 className='StakingPromo-text-title'>
              <FormattedMessage id='StakingHeroTitle' />
            </h2>
            <FormattedMessage id='StakingHeroDescription' />
          </div>
          <div className='StakingPromo-countdown'>
            <Countdown
              date={1541894400000}
              renderer={this.renderer}
            />
          </div>
        </div>
        <Link
          to={this.props.lang === 'en' ? '/cold-staking/' : `/${this.props.lang}/cold-staking/`}
          className='StakingPromo-anchor'
        />
      </div>
    )
  }
}

export default StakingPromo;
