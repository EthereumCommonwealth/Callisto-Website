import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

const StakingDescription = ({ intl }) => (
  <div className='StakingDescription'>
    <div className='container'>
      <div className='StakingDescription-content'>
        <div className='StakingDescription-row left-row'>
          <div className='StakingDescription-row-info'>
            <h3 className='StakingDescription-row-info-title'>
              <FormattedMessage id='StakingDescriptionWhatIsTitle' />
            </h3>
            <p className='StakingDescription-row-info-text'>
              <FormattedMessage id='StakingDescriptionWhatIsText' />
            </p>
          </div>
          <div className='StakingDescription-image'>
            <figure className='StakingDescription-image-figure'>
              <img src='/image/cold-staking/what-is.svg' alt='What is Cold Staking'/>
            </figure>
          </div>
        </div>
        <div className='StakingDescription-row right-row'>
          <div className='StakingDescription-image'>
            <figure className='StakingDescription-image-figure is-absolute'>
              <img src='/image/cold-staking/earn-money.svg' alt='Earn money with Cold Staking'/>
            </figure>
          </div>
          <div className='StakingDescription-row-info'>
            <h3 className='StakingDescription-row-info-title'>
              <FormattedMessage id='StakingDescriptionMoneyTitle' />
            </h3>
            <p className='StakingDescription-row-info-text'>
              <FormattedMessage id='StakingDescriptionMoneyText' />
            </p>
            <p className='StakingDescription-row-info-text-secondary'>
              <FormattedMessage id='StakingDescriptionMoneySecondText' />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default injectIntl(StakingDescription);
