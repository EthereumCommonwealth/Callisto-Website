import React, { PureComponent } from 'react';
import { Element } from 'react-scroll';
import SectionHeading from './commons/SectionHeading';
import ExchangeList from './ExchangeList';
import endpoints from '../constants/endpoints';
import * as U from '../constants/'

class MarketStatus extends PureComponent {
  state = {
    price: 0,
    volume: 0,
    marketCap: 0,
    btcPrice: 0,
  };

  componentDidMount() {
    endpoints.getStats(U.BTC_ID)
      .then((res) => this.setState({ btcPrice: res.data.quotes.USD.price }))
      .then(() => {
        endpoints.getStats(U.CLO_ID)
          .then(res => {
            const { USD } = res.data.quotes;
            this.setState({
              price: USD.price,
              volume: USD.volume_24h,
              marketCap: USD.market_cap,
            });
          })
          .catch(err => console.log('Error on market status get.', err))
      })
      .catch(err => console.log('Error on market status get.', err))
  }

  render() {
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
                  {this.state.price}
                </span>
                <span className='MarketStatus-pricing-element-btcPrice'>
                  {(this.state.price / this.state.btcPrice).toFixed(10)} btc
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
                  {(this.state.volume).toLocaleString()}
                </span>
                <span className='MarketStatus-pricing-element-btcPrice'>
                  {(this.state.volume / this.state.btcPrice).toFixed(10)} btc
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
                  {(this.state.marketCap).toLocaleString()}
                </span>
                <span className='MarketStatus-pricing-element-btcPrice'>
                  {((this.state.marketCap / this.state.btcPrice).toFixed(10))} btc
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

export default MarketStatus;
