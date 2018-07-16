import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import FaqCategory from './FaqCategory';

const FaqContent = ({ faq }) => (
  <div className='FaqContent'>
    <div className='FaqContent-content container'>
      <div />
      <div className='FaqContent-elements'>
        <h1 className='FaqContent-elements-title'>
          <FormattedMessage id='FaqTitle' />
        </h1>
        <span className='FaqContent-elements-subtitle'>
          <FormattedMessage id='FaqDescription' /> <a href='mailto:contact@callisto.com'>
            contact@callisto.com
          </a>
        </span>
        <div className='FaqContent-elements-categories'>
          {faq.map((category) => <FaqCategory key={category.id} {...category} />)}
        </div>
      </div>
    </div>
  </div>
);

function mapStateTopProps(state) {
  return {
    faq: state.faq,
  };
}

FaqContent.propTypes = {
  faq: PropTypes.array,
};

export default connect(mapStateTopProps)(FaqContent)
