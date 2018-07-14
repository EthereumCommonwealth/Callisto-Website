import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const OrderAudit = ({ openModal }) => (
  <div className='OrderAudit'>
    <div className='container'>
      <div className='OrderAudit-btn'>
        <a onClick={openModal} className='btn btn-blue'>
          <FormattedMessage id='OrderAudit' />
        </a>
      </div>
    </div>
  </div>
);

OrderAudit.propTypes = {
  openModal: PropTypes.func,
};

export default OrderAudit;
