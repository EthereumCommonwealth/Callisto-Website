import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { injectIntl, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import SectionHeading from '../commons/SectionHeading';
import SingleWallet from '../commons/SingleWallet';

const HowWorks = ({ intl, marketStats, wallets }) => (
  <div className='HowWorks' name='howworks'>
    <div className='HowWorks-content container'>
      <SectionHeading title={intl.formatMessage({ id: 'HowWorks', defaultMessage: 'How does it works?' })} />
      <div className='HowWorks-video sixteen-nine'>
        <iframe
          className='content'
          title='Calisto Network Cold Staking'
          src='https://www.youtube.com/embed/hjRE6u-XeAU'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          loading='lazy'
        />
      </div>
      <Element className='HowWorks-step' name='exchanges'>
        <SectionHeading
          step={1}
          title={intl.formatMessage({ id: 'HowWorksStepOne', defaultMessage: 'Where to buy CLO?' })}
          description={intl.formatMessage({ id: 'HowWorksStepOneSubtitle', defaultMessage: 'You can buy or trade CLO in these exchanges:' })}
        />
        <div className='HowWorks-step-content'>
          <div className='HowWorks-exchanges'>
            <div className='HowWorks-exchanges-left'>
              <figure className='HowWorks-exchanges-content-figure bitfinex-logo'>
                <a href='https://www.bitfinex.com' target='_blank' rel='noopener noreferrer'>
                  <img src='/image/exchanges/bitfinex_black.svg' className='lazyload' alt='bitfinex' />
                </a>
              </figure>
              <figure className='HowWorks-exchanges-content-figure'>
                <a href='https://app.stex.com/?ref=14019577' target='_blank' rel='noopener noreferrer'>
                  <img src='/image/exchanges/stex.svg' className='lazyload' alt='stex' />
                </a>
              </figure>
              <figure className='HowWorks-exchanges-content-figure'>
                <a href='https://sistemkoin.com/' target='_blank' rel='noopener noreferrer'>
                  <img src='/image/exchanges/sistemkoin.png' className='lazyload' alt='sistemkoin' />
                </a>
              </figure>
            </div>
            <div>
              <span className='HowWorks-nextRelease'>
                <figure className='HowWorks-exchanges-content-figure'>
                  <a href='https://www.bitfinex.com' target='_blank' rel='noopener noreferrer'>
                    <img src='/image/exchanges/bitfinex_black.svg' className='lazyload' alt='bitfinex' />
                  </a>
                </figure>
              </span>
              <figure className='HowWorks-step-content-figure'>
                <img src='/image/exchanges-list-v2.svg' className='lazyload' alt='CLO supported exchanges'/>
              </figure>
            </div>
            <div className='HowWorks-exchanges-right'>
              <figure className='HowWorks-exchanges-content-figure'>
                <a href='https://hitbtc.com/exchange/CLO-to-BTC' target='_blank' rel='noopener noreferrer'>
                  <img src='/image/exchanges/hitBTC.png' className='lazyload' alt='hitBTC' />
                </a>
              </figure>
              <div className='HowWorks-exchanges-content-figure' />
              <div className='HowWorks-exchanges-content-figure' />
            </div>
          </div>
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
                  {(marketStats.cloPrice / marketStats.btcPrice).toFixed(8)} BTC
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
                  {(parseFloat(marketStats.volume)).toLocaleString()}
                </span>
                <span className='HowWorks-pricing-element-btcPrice'>
                  {parseFloat(marketStats.volume / marketStats.btcPrice).toFixed(2)} BTC
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
                  {(parseFloat(marketStats.marketCap)).toLocaleString()}
                </span>
                <span className='HowWorks-pricing-element-btcPrice'>
                  {(parseFloat(marketStats.marketCap / marketStats.btcPrice).toFixed(2))} BTC
                </span>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <div className='HowWorks-step last'>
        <SectionHeading
          step={2}
          title={intl.formatMessage({ id: 'HowWorksStepTwo', defaultMessage: 'How to stake??' })}
          description={intl.formatMessage({ id: 'HowWorksStepTwoSubtitle', defaultMessage: 'Wallets that supports Cold Staking:' })}
        />
        <div className='HowWorks-wallets'>
          <div className='WalletsContent-list'>
            {wallets.length > 0 ? wallets.map(wallet => (
              <SingleWallet
                key={wallet.title}
                icon={wallet.icon}
                title={wallet.title}
                options={wallet.options}
                fromHome
              />
            )) : null}
          </div>
        </div>
      </div>
    </div>
  </div>
);

function mapStateTopProps(state) {
  return {
    marketStats: state.marketStats,
    exchanges: state.exchanges,
    wallets: state.walletsColdStacking,
  };
}

HowWorks.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(connect(mapStateTopProps)(HowWorks));
