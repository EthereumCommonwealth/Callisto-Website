import React from 'react';
import { Element } from 'react-scroll';
import SectionHeading from './commons/SectionHeading';
import SingleWallet from './commons/SingleWallet';

const WalletsContent = () => (
  <Element className='WalletsContent' name='wallets'>
    <div className='WalletsContent-container container'>
      <SectionHeading
        title='Wallets'
        description='These wallets support Callisto Network'
      />
      <div className='WalletsContent-list'>
        <SingleWallet
          icon='/image/windows.svg'
          title='Windows'
          options={[
            { name: 'Geth', url: '/' },
            { name: 'Parity', url: '/' },
          ]}
        />
        <SingleWallet
          icon='/image/apple.svg'
          title='OSX'
          options={[
            { name: 'Geth', url: '/' },
            { name: 'Parity', url: '/' },
          ]}
        />
        <SingleWallet
          icon='/image/linux.svg'
          title='Linux'
          options={[
            { name: 'Geth', url: '/' },
            { name: 'Parity', url: '/' },
          ]}
        />
        <SingleWallet
          icon='/image/playstore.svg'
          title='Android'
          options={[
            { name: 'Coinomi', url: 'https://coinomi.com/' },
            { name: 'Guarda', url: 'https://guarda.co/' },
            { name: 'Trust Wallet', url: 'https://trustwalletapp.com/' },
          ]}
        />
        <SingleWallet
          icon='/image/applestore.svg'
          title='iOS'
          options={[{ name: 'Coinomi', url: 'https://coinomi.com/' }]}
        />
        <SingleWallet
          icon='/image/web.svg'
          title='Web'
          options={[
            { name: 'Classic Ether Wallet', url: 'https://ethereumproject.github.io/etherwallet/' },
            { name: 'Guarda', url: 'https://guarda.co/' },
          ]}
        />
      </div>
    </div>
  </Element>
);

export default WalletsContent;
