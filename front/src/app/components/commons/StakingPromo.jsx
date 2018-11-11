import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class StakingPromo extends Component {

  state = { promoEnded: false };

  render() {
    const { promoEnded } = this.state;
    if (promoEnded) { return null; }
    return (
      <div className='StakingPromo'>
        <div className='StakingPromo-content container'>
          <div className='StakingPromo-text'>
            <h2 className='StakingPromo-text-title'>
              How to Stake CLO
            </h2>
            <FormattedMessage id='StakingHeroDescription' />
          </div>
        </div>
        <a
          href='https://callisto.network/blog/post/cold-staking-a-step-by-step-tutorial/'
          className='StakingPromo-anchor'
          target='_blank'
        />
      </div>
    )
  }
}

export default StakingPromo;
