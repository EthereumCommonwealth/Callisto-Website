import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

const Testimonials = ({ inProgress, completedAudits }) => (
  <div className='Testimonials'>
    <div className='container'>
      <div className='Testimonials-content'>
        <div className='Testimonials-element square'>
          <span className='Testimonials-element-title'>
            <FormattedMessage id='AuditsInProgress' defaultMessage='Audits in progress:' />
          </span>
          <span className='Testimonials-element-description'>+{Number(inProgress) + 20}</span>
          <a
            className='Testimonials-element-anchor'
            href='https://github.com/EthereumCommonwealth/Auditing/issues?q=is%3Aopen+is%3Aissue'
            target='_blank'
            rel='noopener noreferrer'
          />
        </div>
        <div className='Testimonials-element square'>
          <span className='Testimonials-element-title'>
            <FormattedMessage id='CompletedAudits' defaultMessage='Completed Audits:' />
          </span>
          <span className='Testimonials-element-description'>+ {Number(completedAudits) + 150}</span>
          <a
            className='Testimonials-element-anchor'
            href='https://github.com/EthereumCommonwealth/Auditing/issues?q=is%3Aissue+is%3Aclosed'
            target='_blank'
            rel='noopener noreferrer'
          />
        </div>
      </div>
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    completedAudits: state.audit.completedAudits,
    inProgress: state.audit.inProgress,
  };
}

export default connect(mapStateToProps)(Testimonials);
