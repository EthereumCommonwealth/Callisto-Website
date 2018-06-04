import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = ({ title, description }) => [
  <h3 key={`SectionHeading-${title}-0`} className='SectionHeading-title'>{title}</h3>,
  <hr key={`SectionHeading-${title}-1`} className='SectionHeading-divider' />,
  <p key={`SectionHeading-${title}-2`} className='SectionHeading-text'>
    {description}
  </p>,
];

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

SectionHeading.defaultProps = {
  description: '',
};

export default SectionHeading;
