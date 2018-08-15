import React from 'react';
import PropTypes from 'prop-types';

const MiningElement = ({ title, content, description }) => (
  <div className='MiningElement'>
    <h5 className='MiningElement-title'>{title}</h5>
    <h4 className='MiningElement-content'>
      {content}
    </h4>
    {description ?
      <h4 className='MiningElement-description'>
        {description}
      </h4> : null
    }
  </div>
);

MiningElement.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  description: PropTypes.string,
};

MiningElement.defaultProps = {
  description: '',
}

export default MiningElement;
