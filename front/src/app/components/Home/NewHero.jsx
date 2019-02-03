import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';

class NewNewHero extends Component {

  calculePrice = () => {
    const { marketStats } = this.props;
    return (marketStats.stakingBalance * marketStats.cloUSDPrice).toLocaleString();
  }

  render() {
    const { marketStats } = this.props;
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
          </div>
          <div className='NewHero-content-right'>
            <div className='NewHero-details'>
              <h2 className='NewHero-details-title'>
                Ammount Staked
              </h2>
              <p className='NewHero-details-subtitle'>
                {marketStats.stakingBalance.toLocaleString()} <span className='orange'>CLO</span> -
              </p>
              <p className='NewHero-details-subtitle-dollars'>
                {this.calculePrice()} <span className='orange'>USD</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewNewHero.propTypes = {
  intl: PropTypes.object,
  marketStats: PropTypes.object,
};

function mapStateTopProps(state) {
  return {
    marketStats: state.marketStats,
  };
}

export default injectIntl(connect(mapStateTopProps, null)(NewNewHero));
