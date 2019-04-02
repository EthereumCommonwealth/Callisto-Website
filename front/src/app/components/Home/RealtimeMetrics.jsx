import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class RealtimeMetrics extends Component {

  calculePrice = () => {
    const { marketStats } = this.props;
    return (marketStats.stakingBalance * marketStats.cloUSDPrice).toLocaleString();
  }

  render() {
    const { marketStats } = this.props;
    return (
      <div className='RealtimeMetrics'>
        <div className='RealtimeMetrics-content container'>
          <div className='RealtimeMetrics-title'>
            <h4>Real time metrics:</h4>
          </div>
          <div className='RealtimeMetrics-text'>
            <span className='RealtimeMetrics-text-detail'>Total Staked</span>
            <div className='RealtimeMetrics-metric'>
              <h3 className='RealtimeMetrics-metric-amount'>{marketStats.stakingBalance.toLocaleString()}</h3>
              <span className='RealtimeMetrics-metric-detail'>CLO</span>
            </div>
          </div>
          <div className='RealtimeMetrics-metric'>
            <h3 className='RealtimeMetrics-metric-amount'>{this.calculePrice()}</h3>
            <span className='RealtimeMetrics-metric-detail'>USD</span>
          </div>
          <div className='RealtimeMetrics-text'>
            <span className='RealtimeMetrics-text-detail'>Monthly interest rate</span>
            <div className='RealtimeMetrics-metric'>
              <h3 className='RealtimeMetrics-metric-amount orange'>
                3.6
              </h3>
              <span className='RealtimeMetrics-metric-detail orange'>%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    marketStats: state.marketStats,
  };
}

RealtimeMetrics.propTypes = {
  marketStats: PropTypes.object,
};

export default connect(mapStateTopProps)(RealtimeMetrics);
