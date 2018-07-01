import React from 'react';
import { FormattedMessage } from 'react-intl';

const OrderAudit = () => (
  <div className='OrderAudit'>
    <div className='container'>
      <div className='OrderAudit-btn'>
        <a href='#' className='btn btn-blue'>
          <FormattedMessage id='OrderAudit' />
        </a>
      </div>
    </div>
  </div>
);

export default OrderAudit;
