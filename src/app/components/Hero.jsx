import React from 'react';

const Hero = () => (
  <div className='Hero'>
    <div className='Hero-content container'>
      <div className='Hero-content-left'>
        <h1 className='Hero-content-left-title'>
          Cryptocurrency  <br /> and Free Smart-Contract Security Audits
        </h1>
        <p className='Hero-content-left-description'>
          Callisto Network is a blockchain platform with its own cryptocurrency (CLO)
          that is based on Ethereum protocol, so any Callisto improvements can be applied
          to Ethereum Classic. Callisto is NOT a testnet or a hardfork of Ethereum Classic.
          Callisto Network is developed by Ethereum Commonwealth, one of three ETC
          development teams.
        </p>
        <a
          href='https://whitepaper.callisto.network/'
          target='_blank'
          className='btn btn-green'
        >
          White Paper
        </a>
      </div>
      <div className='Hero-content-right'>
        <figure className='Hero-content-right-figure'>
          <img src='/image/hero_image.svg' alt='Hero Art'/>
        </figure>
      </div>
    </div>
  </div>
);

export default Hero;
