import React from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { injectIntl } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';
import SingleWallet from '../commons/SingleWallet';

const WalletsContent = ({ intl, wallets }) => (
  <Element className='WalletsContent' name='wallets'>
    <div className='WalletsContent-container container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'Wallets' })}
        description={intl.formatMessage({ id: 'WalletsDescription' })}
      />
      <div className='WalletsContent-list'>
        {wallets.length > 0 ? wallets.map(wallet => (
          <SingleWallet
            key={wallet.title}
            icon={wallet.icon}
            title={wallet.title}
            options={wallet.options}
          />
        )) : null}
      </div>
      <div className='WalletsContent-advice'>
          (*) Supports Cold Staking
      </div>
    </div>
  </Element>
);

function mapStateTopProps(state) {
  return {
    wallets: state.wallets,
  };
}

export default injectIntl(connect(mapStateTopProps)(WalletsContent));
