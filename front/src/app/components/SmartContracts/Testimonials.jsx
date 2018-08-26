import React from 'react';
import { injectIntl } from 'react-intl';

const Testimonials = ({ intl }) => (
  <div className='Testimonials'>
    <div className='container'>
      <div className='Testimonials-content'>
        <div className='Testimonials-element square'>
          <span className='Testimonials-element-title'>Audits in progress:</span>
          <span className='Testimonials-element-description'>7</span>
        </div>
        <div className='Testimonials-element square'>
          <span className='Testimonials-element-title'>Completed Audits:</span>
          <span className='Testimonials-element-description'>16</span>
        </div>
      </div>
    </div>
  </div>
);

export default injectIntl(Testimonials);
