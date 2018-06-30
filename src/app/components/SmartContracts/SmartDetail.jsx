import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

const SmartDetail = ({ intl }) => (
  <div className='SmartDetail'>
    <div className='container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'SmartDetailTitle' })}
        description={intl.formatMessage({ id: 'SmartDetailSubtitle' })}
      />
      <div className='SmartDetail-content'>
        <div className='SmartDetail-content-grid-empty' />
        <div className='SmartDetail-content-grid'>
          <div className='SmartDetail-content-grid-row two-columns'>
            <div className='SmartDetail-content-grid-detail'>
              <span className='SmartDetail-content-grid-detail-text'>
                <FormattedMessage id='SmartDetailCustomerAudit' />
              </span>
              <figure className='SmartDetail-content-grid-detail-circle-right'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
            <div className='SmartDetail-content-grid-line'>
              <figure className='SmartDetail-content-grid-line arrow-bottom'>
                <img src='/image/diagram/curve-arrow.svg' alt='Grid Line Down' />
              </figure>
            </div>
          </div>
          <div className='SmartDetail-content-grid-row two-columns'>
            <div className='SmartDetail-content-grid-empty' />
            <div className='SmartDetail-content-grid-detail'>
              <span className='SmartDetail-content-grid-detail-text'>
                <FormattedMessage id='SmartDetailSecurityManager' />
              </span>
              <figure className='SmartDetail-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
              <figure className='SmartDetail-content-grid-detail-circle-bottom'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
          </div>
          <div className='SmartDetail-content-grid-row two-columns'>
            <div className='SmartDetail-content-grid-empty' />
            <div className='SmartDetail-content-grid-detail has-line'>
              <span className='SmartDetail-content-grid-detail-text'>
                <FormattedMessage id='SmartDetailAuditorsPickup' />
              </span>
              <figure className='SmartDetail-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
              <figure className='SmartDetail-content-grid-detail-circle-bottom'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
          </div>
          <div className='SmartDetail-content-grid-row one-column'>
            <div className='SmartDetail-content-grid-detail has-line'>
              <span className='SmartDetail-content-grid-detail-text'>
                <FormattedMessage id='SmartDetailMultipleAuditors' />
              </span>
              <figure className='SmartDetail-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
              <figure className='SmartDetail-content-grid-detail-circle-bottom'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
          </div>
          <div className='SmartDetail-content-grid-row two-columns'>
            <div className='SmartDetail-content-grid-detail has-line'>
              <span className='SmartDetail-content-grid-detail-text'>
                <FormattedMessage id='SmartDetailSecurityVerify' />
              </span>
              <figure className='SmartDetail-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
              <figure className='SmartDetail-content-grid-detail-circle-right'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
            <div className='SmartDetail-content-grid-line'>
              <figure className='SmartDetail-content-grid-line arrow-bottom'>
                <img src='/image/diagram/curve-arrow.svg' alt='Grid Line Down' />
              </figure>
            </div>
          </div>
          <div className='SmartDetail-content-grid-row two-columns'>
            <div className='SmartDetail-content-grid-empty' />
            <div className='SmartDetail-content-grid-detail'>
              <span className='SmartDetail-content-grid-detail-text'>
                <FormattedMessage id='SmartDetailCustomerNotified' />
              </span>
              <figure className='SmartDetail-content-grid-detail-triangle-top'>
                <img src='/image/diagram/triangle.svg' alt='Grid Triangle' />
              </figure>
              <figure className='SmartDetail-content-grid-detail-circle-bottom'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
          </div>
          <div className='SmartDetail-content-grid-row two-columns'>
            <div className='SmartDetail-content-grid-detail'>
              <span className='SmartDetail-content-grid-detail-text'>
                <FormattedMessage id='SmartDetailSecurityCollect' />
              </span>
              <figure className='SmartDetail-content-grid-detail-circle-right'>
                <img src='/image/diagram/circle.svg' alt='Grid Circle' />
              </figure>
            </div>
            <div className='SmartDetail-content-grid-line'>
              <figure className='SmartDetail-content-grid-line arrow-up'>
                <img src='/image/diagram/curve-arrow.svg' alt='Grid Line Down' />
              </figure>
            </div>
          </div>
        </div>
        <div />
      </div>
      <p className='SmartDetail-bottom'>
        <FormattedMessage id='SmartDetailBottomText' />
      </p>
    </div>
  </div>
);

export default injectIntl(SmartDetail);
