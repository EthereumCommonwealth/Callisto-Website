import React from 'react';

const InfoContent = () => (
  <section className='InfoContent'>
    <div className='InfoContent-content container'>
      <div className='InfoContent-content-top'>
        <div className='InfoContent-content-top-element square'>
          <figure className='InfoContent-content-top-figure'>
            <img src='/image/cold-staking.svg' alt='CLO Cold Staking' />
          </figure>
          <h4 className='InfoContent-content-top-title'>First Cold Staking Coin</h4>
          <p className='InfoContent-content-top-text'>
            Callisto improvements can be applied to Ethereum Classic.
            Callisto is NOT a testnet or a hardfork of Ethereum Classic.
            Callisto Network is developed by Ethereum Commonwealth, one of three
            ETC development teams.
          </p>
          <a href='/' className='InfoContent-content-top-anchor'>
            <i className='fas fa-arrow-right'/> Read more
          </a>
        </div>
        <div className='InfoContent-content-top-element square'>
          <figure className='InfoContent-content-top-figure'>
            <img src='/image/smart-contract.svg' alt='CLO Smart Contracts' />
          </figure>
          <h4 className='InfoContent-content-top-title'>
            Free security audit and fine tuned audit process
          </h4>
          <p className='InfoContent-content-top-text'>
            Callisto improvements can be applied to Ethereum Classic.
            Callisto is NOT a testnet or a hardfork of Ethereum Classic.
            Callisto Network is developed by Ethereum Commonwealth, one of three
            ETC development teams.
          </p>
          <a href='/' className='InfoContent-content-top-anchor'>
            <i className='fas fa-arrow-right'/> Read more
          </a>
        </div>
      </div>
      <div className='InfoContent-content-bottom'>
        <div className='InfoContent-content-bottom-element square'>
          <h5 className='InfoContent-content-bottom-title'>
            On-chain governance system
          </h5>
          <p className='InfoContent-content-bottom-text'>
            Callisto improvements can be applied to Ethereum Classic.
            Callisto is NOT a testnet or a hardfork of Ethereum Classic.
          </p>
        </div>
        <div className='InfoContent-content-bottom-element square'>
          <h5 className='InfoContent-content-bottom-title'>
            Scalability of CLO and ETC networks
          </h5>
          <p className='InfoContent-content-bottom-text'>
            Callisto is NOT a testnet or a hardfork of Ethereum Classic.
          </p>
        </div>
        <div className='InfoContent-content-bottom-element square'>
          <h5 className='InfoContent-content-bottom-title'>
            Financial transparency
          </h5>
          <p className='InfoContent-content-bottom-text'>
            Callisto Read our indicators
          </p>
          <a href='/' className='btn btn-transparent-green'>Financial report</a>
        </div>
      </div>
    </div>
  </section>
);

export default InfoContent;
