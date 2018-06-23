import React from 'react';
import { FormattedMessage } from 'react-intl';

const ExchangeList = () => (
  <div className='ExchangeList container'>
    <p className='ExchangeList-text'>
      <FormattedMessage id='ExchangesList' />
    </p>
    <div className='ExchangeList-content'>
      <figure className='ExchangeList-content-figure'>
        <img src='/image/exchanges/biteBTC.svg' alt='BiteBTC' />
      </figure>
      <figure className='ExchangeList-content-figure'>
        <img src='/image/exchanges/stocksExchange.svg' alt='Stocks Exchange' />
      </figure>
      <figure className='ExchangeList-content-figure'>
        <img src='/image/exchanges/ooobtc.svg' alt='OOOBTC' />
      </figure>
      <figure className='ExchangeList-content-figure'>
        <img src='/image/exchanges/hqex.png' alt='HQEX' />
      </figure>
      <figure className='ExchangeList-content-figure'>
        <img src='/image/exchanges/hitBTC.png' alt='HitBTC' />
        <span className='ExchangeList-content-soon'>
          <FormattedMessage id='ComingSoon' />
        </span>
      </figure>
      <figure className='ExchangeList-content-figure'>
        <img src='/image/exchanges/exrates.svg' alt='Exrates' />
        <span className='ExchangeList-content-soon'>
          <FormattedMessage id='ComingSoon' />
        </span>
      </figure>
    </div>
  </div>
);

export default ExchangeList;
