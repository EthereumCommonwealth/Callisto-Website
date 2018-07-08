import React from 'react';
import PropTypes from 'prop-types';

const SingleWorkflow = ({ step, text }) => (
  <div className='StakingWorkflow-step'>
    <div className='StakingWorkflow-step-content'>
      <span className='StakingWorkflow-step-number'>{step}</span>
      <p className='StakingWorkflow-step-text'>
        {text}
      </p>
    </div>
  </div>
);

SingleWorkflow.propTypes = {
  step: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default SingleWorkflow;
