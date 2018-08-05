import React from 'react';
import SectionHeading from '../commons/SectionHeading';
import SingleWorkflow from './SingleWorkflow';
import { injectIntl } from 'react-intl';

const StakingWorkflow = ({ intl }) => (
  <div className='StakingWorkflow'>
    <div className='container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'StakingWorkflowTitle' })}
      />
      <div className='StakingWorkflow-content'>
        <SingleWorkflow
          step={1}
          text={intl.formatMessage({ id: 'WorkflowFirstStep' })}
        />
        <SingleWorkflow
          step={2}
          text={intl.formatMessage({ id: 'WorkflowSecondStep' })}
        />
        <SingleWorkflow
          step={3}
          text={intl.formatMessage({ id: 'WorkflowThirdStep' })}
        />
        <SingleWorkflow
          step={4}
          text={intl.formatMessage({ id: 'WorkflowFourthStep' })}
        />
        <SingleWorkflow
          step={5}
          text={intl.formatMessage({ id: 'WorkflowFifthStep' })}
        />
        <SingleWorkflow
          step={6}
          text={intl.formatMessage({ id: 'WorkflowSixthStep' })}
        />
        <SingleWorkflow
          step={7}
          text={intl.formatMessage({ id: 'WorkflowSeventhStep' })}
        />
        <SingleWorkflow
          step={8}
          text={intl.formatMessage({ id: 'WorkflowEighthStep' })}
        />
        <SingleWorkflow
          step={9}
          text={intl.formatMessage({ id: 'WorkflowNinethStep' })}
        />
      </div>
    </div>
  </div>
);

export default injectIntl(StakingWorkflow)
