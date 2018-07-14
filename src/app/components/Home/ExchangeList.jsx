import React from 'react';
import { FormattedMessage } from 'react-intl';

const ExchangeList = () => (
  <div className='ExchangeList container'>
    <p className='ExchangeList-text'>
      <FormattedMessage id='ExchangesList' />
    </p>
    <div className='ExchangeList-content'>
      <figure className='ExchangeList-content-figure'>
        <a href='https://bitebtc.com/trade/clo_btc' target='_blank'>
          <img src='/image/exchanges/biteBTC.svg' alt='BiteBTC' />
        </a>
      </figure>
      <figure className='ExchangeList-content-figure'>
        <a href='http://stocks.exchange/' target='_blank'>
          <img src='/image/exchanges/stocksExchange.svg' alt='Stocks Exchange' />
        </a>
      </figure>
      <figure className='ExchangeList-content-figure'>
        <a href='https://www.ooobtc.com/' target='_blank'>
          <img src='/image/exchanges/ooobtc.svg' alt='OOOBTC' />
        </a>
      </figure>
      <figure className='ExchangeList-content-figure'>
        <a href='https://www.hqex.io/' target='_blank'>
          <img src='/image/exchanges/hqex.png' alt='HQEX' />
        </a>
      </figure>
      <figure className='ExchangeList-content-figure'>
        <a href='https://exrates.me/dashboard' target='_blank'>
          <img src='/image/exchanges/exrates.svg' alt='Exrates' />
        </a>
      </figure>
      <figure className='ExchangeList-content-figure'>
        <img src='/image/exchanges/hitBTC.png' alt='HitBTC' />
        <span className='ExchangeList-content-soon'>
          <FormattedMessage id='ComingSoon' />
        </span>
      </figure>
    </div>
  </div>
);

export default ExchangeList;
