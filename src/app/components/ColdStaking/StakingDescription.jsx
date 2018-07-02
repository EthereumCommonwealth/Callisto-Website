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
          <div />
        </div>
        <div className='StakingDescription-row right-row'>
          <div />
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
