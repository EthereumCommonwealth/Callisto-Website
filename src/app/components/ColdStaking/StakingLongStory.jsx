import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

const StakingLongStory = ({ intl }) => (
  <div className='StakingLongStory'>
    <div className='container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'StakingLongStoryTitle' })}
        description={intl.formatMessage({ id: 'StakingLongStoryDescription' })}
      />
      <div className='StakingLongStory-content'>
        <div className='StakingLongStory-element'>
          <figure className='StakingLongStory-element-figure'>
            <img
              src='/image/cold-staking/long-sort-short/send-clo.svg'
              alt='Send CLO'
            />
          </figure>
          <span className='StakingLongStory-element-step'>1</span>
          <p className='StakingLongStory-element-text'>
            <FormattedMessage id='StakingLongStorySend' />
          </p>
        </div>
        <div className='StakingLongStory-element'>
          <figure className='StakingLongStory-element-figure'>
            <img
              src='/image/cold-staking/long-sort-short/calendar.svg'
              alt='Wait'
            />
          </figure>
          <span className='StakingLongStory-element-step'>2</span>
          <p className='StakingLongStory-element-text'>
            <FormattedMessage id='StakingLongStoryWait' />
          </p>
        </div>
        <div className='StakingLongStory-element'>
          <figure className='StakingLongStory-element-figure'>
            <img
              src='/image/cold-staking/long-sort-short/staking-contract.svg'
              alt='Invoke Withdrawal'
            />
          </figure>
          <span className='StakingLongStory-element-step'>3</span>
          <p className='StakingLongStory-element-text'>
            <FormattedMessage id='StakingLongStoryInvoke' />
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default injectIntl(StakingLongStory);
