import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const BuyMineBanner = () => (
  <div className='BuyMineBanner'>
    <div className='container'>
      <div className='BuyMineBanner-btns'>
        <Link to='/' className='btn btn-green'>
          <FormattedMessage id='BuySome'/> CLO
        </Link>
        <Link to='/' className='btn btn-transparent-green'>
          <FormattedMessage id='MineSome'/> CLO
        </Link>
      </div>
    </div>
  </div>
);

export default BuyMineBanner;
