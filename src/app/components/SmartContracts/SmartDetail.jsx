import React from 'react';
import { injectIntl } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

const SmartDetail = ({ intl }) => (
  <div className='SmartDetail'>
    <div className='container'>
      <SectionHeading
        title={intl.formatMessage({
          id: 'DescriptionAudit',
          defaultMessage: 'How to do Smart Contract Audit For Free With Callisto Network'
        })}
        description={intl.formatMessage({
          id: 'SmartDetailSubtitle',
          defaultMessage: 'Here is our workflow:',
        })}
      />
      <div className='SmartDetail-content'>
        <div />
        <div className='SmartDetail-content-grid'>
          <div className='SmartDetail-content-grid-row two-columns'>
            <div className='SmartDetail-content-grid-detail'>
              <span className='SmartDetail-content-grid-detail-text'>
                Customer submit audit request
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
            <div />
            <div className='SmartDetail-content-grid-detail'>
              <span className='SmartDetail-content-grid-detail-text'>
                Security manager verify request
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
            <div />
            <div className='SmartDetail-content-grid-detail has-line'>
              <span className='SmartDetail-content-grid-detail-text'>
                Auditors pickup request
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
                Multiple auditors check smart-contract code
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
                Security manager collect and verify reports from auditors
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
            <div />
            <div className='SmartDetail-content-grid-detail'>
              <span className='SmartDetail-content-grid-detail-text'>
                Customer notified of results
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
                Security manager collect and verify reports from auditors
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
    </div>
  </div>
);

export default injectIntl(SmartDetail);
