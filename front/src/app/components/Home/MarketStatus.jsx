import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

class MarketStatus extends PureComponent {

  render() {
    const { marketStats } = this.props;
    return (
      <Element className='MarketStatus' name='exchanges'>
        <div className='container'>
          <SectionHeading
            title={this.props.intl.formatMessage({ id: 'MarketStatusTitle' })}
            description={this.props.intl.formatMessage({ id: 'MarketStatusDescription' })}
          />
          <div className='MarketStatus-pricing'>
            <div className='MarketStatus-pricing-element'>
              <div className='MarketStatus-pricing-element-icon'>
                <i className='fas fa-caret-up'/>
              </div>
              <div className='MarketStatus-pricing-element-details'>
                <span className='MarketStatus-pricing-element-title'>
                  <FormattedMessage id='Price' />
                </span>
                <span className='MarketStatus-pricing-element-dollarPrice'>
                  <span className='MarketStatus-pricing-element-symbol'>
                    $
                  </span>
                  {marketStats.cloPrice}
                </span>
                <span className='MarketStatus-pricing-element-btcPrice'>
                  {(marketStats.cloPrice / marketStats.btcPrice).toFixed(10)} btc
                </span>
              </div>
            </div>
            <div className='MarketStatus-pricing-element'>
              <div className='MarketStatus-pricing-element-icon'>
                <i className='fas fa-signal'/>
              </div>
              <div className='MarketStatus-pricing-element-details'>
                <span className='MarketStatus-pricing-element-title'>
                  <FormattedMessage id='Volume' />
                </span>
                <span className='MarketStatus-pricing-element-dollarPrice'>
                  <span className='MarketStatus-pricing-element-symbol'>
                    $
                  </span>
                  {(marketStats.volume).toLocaleString()}
                </span>
                <span className='MarketStatus-pricing-element-btcPrice'>
                  {(marketStats.volume / marketStats.btcPrice).toFixed(10)} btc
                </span>
              </div>
            </div>
            <div className='MarketStatus-pricing-element'>
              <div className='MarketStatus-pricing-element-icon'>
                <i className='fas fa-chart-line'/>
              </div>
              <div className='MarketStatus-pricing-element-details'>
                <span className='MarketStatus-pricing-element-title'>
                  <FormattedMessage id='MarketCap' />
                </span>
                <span className='MarketStatus-pricing-element-dollarPrice'>
                  <span className='MarketStatus-pricing-element-symbol'>
                    $
                  </span>
                  {(marketStats.marketCap).toLocaleString()}
                </span>
                <span className='MarketStatus-pricing-element-btcPrice'>
                  {((marketStats.marketCap / marketStats.btcPrice).toFixed(10))} btc
                </span>
              </div>
            </div>
            <div className='MarketStatus-pricing-element'>
              <div className='MarketStatus-pricing-element-icon'>
                <i className='fas fa-chart-line'/>
              </div>
              <div className='MarketStatus-pricing-element-details'>
                <span className='MarketStatus-pricing-element-title'>
                  <FormattedMessage id='AmmountonStaking' defaultMessage='Ammount on Staking' />
                </span>
                <span className='MarketStatus-pricing-element-dollarPrice'>
                  {marketStats.stakingBalance.toLocaleString()}
                  <span className='MarketStatus-pricing-element-symbol'>
                    CLO
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

function mapStateTopProps(state) {
  return {
    marketStats: state.marketStats,
  };
}

MarketStatus.propTypes = {
  marketStats: PropTypes.object,
};

export default injectIntl(connect(mapStateTopProps, null)(MarketStatus));
