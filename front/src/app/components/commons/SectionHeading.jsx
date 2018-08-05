import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SectionHeading = ({ title, description, isSubtitle }) => {
  const titleClass = classNames('SectionHeading-title', { 'is-subtitle': isSubtitle });
  return [
    <h3 key={`SectionHeading-${title}-0`} className={titleClass}>{title}</h3>,
    <hr key={`SectionHeading-${title}-1`} className='SectionHeading-divider' />,
    <p key={`SectionHeading-${title}-2`} className='SectionHeading-text'>
      {description ? description : null}
    </p>,
  ];
}

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isSubtitle: PropTypes.bool,
};

SectionHeading.defaultProps = {
  description: '',
  isSubtitle: false,
};

export default SectionHeading;
