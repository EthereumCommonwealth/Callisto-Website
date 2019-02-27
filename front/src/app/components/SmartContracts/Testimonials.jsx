import React from 'react';
import { injectIntl } from 'react-intl';

const Testimonials = ({ intl }) => (
  <div className='Testimonials'>
    <div className='container'>
      <div className='Testimonials-content'>
        <div className='Testimonials-element square'>
          <span className='Testimonials-element-title'>Audits in progress:</span>
          <span className='Testimonials-element-description'>13</span>
          <a
            className='Testimonials-element-anchor'
            href='https://github.com/EthereumCommonwealth/Auditing/issues?q=is%3Aopen+is%3Aissue'
            target='_blank'
          />
        </div>
        <div className='Testimonials-element square'>
          <span className='Testimonials-element-title'>Completed Audits:</span>
          <span className='Testimonials-element-description'>140</span>
          <a
            className='Testimonials-element-anchor'
            href='https://github.com/EthereumCommonwealth/Auditing/issues?q=is%3Aissue+is%3Aclosed'
            target='_blank'
          />
        </div>
      </div>
    </div>
  </div>
);

export default injectIntl(Testimonials);
