import React from 'react';
import SectionHeading from '../commons/SectionHeading';
import { injectIntl, FormattedMessage } from 'react-intl';

const SmartAuthor = ({ intl }) => (
  <div className='SmartAuthor'>
    <div className='container'>
      <div className='SmartAuthor-head'>
        <SectionHeading
          title={intl.formatMessage({ id: 'SmartAuthorTitle' })}
          description={intl.formatMessage({ id: 'SmartAuthorDescription' })}
        />
      </div>
      <div className='SmartAuthor-steps'>
        <div className='SmartAuthor-step'>
          <div className='SmartAuthor-step-number'>
            <span className='SmartAuthor-step-number-elem'>1</span>
          </div>
          <p className='SmartAuthor-step-text'>
            <FormattedMessage id='SmartAuthorStepOne' />
          </p>
        </div>
        <div className='SmartAuthor-step'>
          <div className='SmartAuthor-step-number'>
            <span className='SmartAuthor-step-number-elem'>2</span>
          </div>
          <p className='SmartAuthor-step-text'>
            <FormattedMessage id='SmartAuthorStepTwo' />
          </p>
        </div>
        <div className='SmartAuthor-step'>
          <div className='SmartAuthor-step-number'>
            <span className='SmartAuthor-step-number-elem'>3</span>
          </div>
          <p className='SmartAuthor-step-text'>
            <FormattedMessage id='SmartAuthorStepThree' />
          </p>
        </div>
      </div>
      <p className='SmartAuthor-bottom'>
        <FormattedMessage id='SmartAuthorBottom' />
      </p>
    </div>
  </div>
);

export default injectIntl(SmartAuthor);
