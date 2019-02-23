import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';
import { connect } from 'react-redux';

const HowWorks = ({ intl, marketStats }) => (
  <div className='HowWorks'>
    <div className='HowWorks-content container'>
      <SectionHeading title={intl.formatMessage({ id: 'HowWorks', defaultMessage: 'How does it works?' })} />
      <div className='HowWorks-video sixteen-nine'>
        <iframe
          className='content'
          src='https://www.youtube.com/embed/hjRE6u-XeAU'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <div className='HowWorks-step'>
        <SectionHeading
          step={1}
          title={intl.formatMessage({ id: 'HowWorksStepOne', defaultMessage: 'Where to buy CLO?' })}
          subtitle={intl.formatMessage({ id: 'HowWorksStepOneSubtitle', defaultMessage: 'You can buy or trade CLO in these exchanges:' })}
        />
        <div className='HowWorks-step-content'>
          <figure className='HowWorks-step-content-figure'>
            <img src='/image/exchanges-list.svg' alt='CLO supported exchanges'/>
          </figure>
          <div className='HowWorks-pricing'>
            <div className='HowWorks-pricing-element'>
              <div className='HowWorks-pricing-element-icon'>
                <i className='fas fa-caret-up'/>
              </div>
              <div className='HowWorks-pricing-element-details'>
                <span className='HowWorks-pricing-element-title'>
                  <FormattedMessage id='Price' />
                </span>
                <span className='HowWorks-pricing-element-dollarPrice'>
                  <span className='HowWorks-pricing-element-symbol'>
                    $
                  </span>
                  {marketStats.cloPrice}
                </span>
                <span className='HowWorks-pricing-element-btcPrice'>
                  {(marketStats.cloPrice / marketStats.btcPrice).toFixed(10)} btc
                </span>
              </div>
            </div>
            <div className='HowWorks-pricing-element'>
              <div className='HowWorks-pricing-element-icon'>
                <i className='fas fa-signal'/>
              </div>
              <div className='HowWorks-pricing-element-details'>
                <span className='HowWorks-pricing-element-title'>
                  <FormattedMessage id='Volume' />
                </span>
                <span className='HowWorks-pricing-element-dollarPrice'>
                  <span className='HowWorks-pricing-element-symbol'>
                    $
                  </span>
                  {(marketStats.volume).toLocaleString()}
                </span>
                <span className='HowWorks-pricing-element-btcPrice'>
                  {(marketStats.volume / marketStats.btcPrice).toFixed(10)} btc
                </span>
              </div>
            </div>
            <div className='HowWorks-pricing-element'>
              <div className='HowWorks-pricing-element-icon'>
                <i className='fas fa-chart-line'/>
              </div>
              <div className='HowWorks-pricing-element-details'>
                <span className='HowWorks-pricing-element-title'>
                  <FormattedMessage id='MarketCap' />
                </span>
                <span className='HowWorks-pricing-element-dollarPrice'>
                  <span className='HowWorks-pricing-element-symbol'>
                    $
                  </span>
                  {(marketStats.marketCap).toLocaleString()}
                </span>
                <span className='HowWorks-pricing-element-btcPrice'>
                  {((marketStats.marketCap / marketStats.btcPrice).toFixed(10))} btc
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='HowWorks-step'>
        <SectionHeading
          step={2}
          title={intl.formatMessage({ id: 'HowWorksStepTwo', defaultMessage: 'How to stake??' })}
          subtitle={intl.formatMessage({ id: 'HowWorksStepTwoSubtitle', defaultMessage: 'Wallets that supports Cold Staking:' })}
        />
      </div>
    </div>
  </div>
);

function mapStateTopProps(state) {
  return {
    marketStats: state.marketStats,
  };
}

HowWorks.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(connect(mapStateTopProps)(HowWorks));
