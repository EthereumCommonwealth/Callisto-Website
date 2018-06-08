import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import SectionHeading from './commons/SectionHeading';
import ExchangeList from './ExchangeList';

class MarketStatus extends PureComponent {
  render() {
    const { marketStats } = this.props;
    return (
      <Element className='MarketStatus' name='exchanges'>
        <div className='container'>
          <SectionHeading
            title='Exchanges'
            description='Meet the people that are going to take your business to the next level'
          />
          <div className='MarketStatus-pricing'>
            <div className='MarketStatus-pricing-element'>
              <div className='MarketStatus-pricing-element-icon'>
                <i className='fas fa-caret-up'/>
              </div>
              <div className='MarketStatus-pricing-element-details'>
                <span className='MarketStatus-pricing-element-title'>
                  Price
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
                  Volume
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
                  Market Cap
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
          </div>
        </div>
        <ExchangeList />
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

export default connect(mapStateTopProps, null)(MarketStatus);
