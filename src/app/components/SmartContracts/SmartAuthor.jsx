import React from 'react';
import SectionHeading from '../commons/SectionHeading';
import { injectIntl } from 'react-intl';

const SmartAuthor = ({ intl }) => (
  <div className='SmartAuthor'>
    <div className='container'>
      <div className='SmartAuthor-head'>
        <SectionHeading
          title={intl.formatMessage({ id: 'SmartAuthorTitle' })}
          description={intl.formatMessage({ id: 'SmartAuthorDescription' })}
        />
      </div>
    </div>
  </div>
);

export default injectIntl(SmartAuthor);
