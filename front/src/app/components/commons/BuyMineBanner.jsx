import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const BuyMineBanner = ({ lang }) => (
  <div className='BuyMineBanner'>
    <div className='container'>
      <div className='BuyMineBanner-btns'>
        <a
          href='https://github.com/EthereumCommonwealth/Proposals/issues'
          target='_blank'
          className='btn btn-green'
        >
          <FormattedMessage id='EarnSome'/> CLO
        </a>
        <Link
          to={lang === 'en' ? '/#pool' : `/${lang}/#pool`}
          className='btn btn-transparent-green'
        >
          <FormattedMessage id='MineSome'/> CLO
        </Link>
      </div>
    </div>
  </div>
);

export default BuyMineBanner;
