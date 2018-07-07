import React from 'react';
import SectionHeading from '../commons/SectionHeading';
import { injectIntl } from 'react-intl';

const StakingWorkflow = ({ intl }) => (
  <div className='StakingWorkflow'>
    <div className='container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'StakingWorkflowTitle' })}
      />
    </div>
  </div>
);

export default injectIntl(StakingWorkflow)
