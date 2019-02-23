import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SectionHeading = ({ title, description, isSubtitle, step }) => {
  const titleClass = classNames('SectionHeading-title', { 'is-subtitle': isSubtitle });
  return [
    <div key={`SectionHeading-${title}-0`} className='SectionHeading-step'>
      {step ? <span className='SectionHeading-step-number'>{step}</span> : null}
    </div>,
    <h3 key={`SectionHeading-${title}-1`} className={titleClass}>{title}</h3>,
    <hr key={`SectionHeading-${title}-2`} className='SectionHeading-divider' />,
    <p key={`SectionHeading-${title}-3`} className='SectionHeading-text'>
      {description ? description : null}
    </p>,
  ];
}

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isSubtitle: PropTypes.bool,
  step: PropTypes.number,
};

SectionHeading.defaultProps = {
  description: '',
  isSubtitle: false,
};

export default SectionHeading;
