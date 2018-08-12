import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

const ExchangeList = ({ exchanges }) => (
  <div className='ExchangeList container'>
    <p className='ExchangeList-text'>
      <FormattedMessage id='ExchangesList' />
    </p>
    <div className='ExchangeList-content'>
      {exchanges.length > 0 ?
        exchanges.map(exchange => (
          <figure key={exchange.name} className='ExchangeList-content-figure'>
            <a href={exchange.url} target='_blank'>
              <img src={exchange.logo} alt={exchange.name} />
            </a>
            {exchange.comming_soon ?
              (
                <span className='ExchangeList-content-soon'>
                  <FormattedMessage id='ComingSoon' />
                </span>
              ) : null
            }
          </figure>
        )) : null
      }
    </div>
  </div>
);

function mapStateTopProps(state) {
  return {
    exchanges: state.exchanges,
  };
}

export default connect(mapStateTopProps)(ExchangeList);
