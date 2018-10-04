import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AuditDetail extends PureComponent {

  render() {
    const { details, index } = this.props;

    if (details.statusType === 'Status') {
      return (
        <div className='SingleAudit-history-element'>
          <div>
            <span className='SingleAudit-history-element-count'>{index + 1}</span>
            <span className='SingleAudit-history-element-detail'>{details.statusName} by </span>
            <span className='SingleAudit-history-element-author'>{details.statusAuthor ? details.statusAuthor : 'Auditor'}</span>
          </div>
          <div>
            <p className='SingleAudit-history-element-description'>
              {details.comment}
            </p>
          </div>
        </div>
      )
    }
    return (
      <div className='SingleAudit-history-element is-comment'>
        <div>
          <span className='SingleAudit-history-element-detail'>Commented by </span>
          <span className='SingleAudit-history-element-author'>{details.statusAuthor}</span>
        </div>
        <div>
          <p className='SingleAudit-history-element-description'>
            {details.comment}
          </p>
        </div>
      </div>
    );
  }
}

AuditDetail.propTypes = {
  auditDetail: PropTypes.object,
};

export default AuditDetail;
