import React from 'react';
import PropTypes from 'prop-types';

const SingleWallet = ({ icon, title, options, fromHome }) => (
  <div className='SingleWallet square'>
    <figure className='SingleWallet-figure'>
      <img src={icon} className='lazyload' alt='Wallet Element'/>
    </figure>
    <span className='SingleWallet-title'>
      {title}
    </span>
    <div className='SingleWallet-list'>
      {options.map((wallet, index) => {
        return (
          <a
            key={`SingleWallet-${wallet.name}-${index}`}
            className='btn btn-green'
            href={wallet.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            {wallet.name} {wallet.cs && !fromHome ? '*' : null}
          </a>
        );
      })}
    </div>
  </div>
);

SingleWallet.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  fromHome: PropTypes.bool,
};

export default SingleWallet;
