import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';
import { connect } from 'react-redux';

class SingleAudit extends PureComponent {
  render() {
    const { title, description, sourceCodeUrl, disclosurePolicy,
      platform, statusName, createdAt, statusHistory } = this.props.auditDetail;
    return (
      <div className='SingleAudit'>
        <div className='SingleAudit-content container square'>
          <h1 className='SingleAudit-title'>{title}</h1>
          <div className='SingleAudit-divider'/>
          <p className='SingleAudit-description'>{description}</p>
          <div className='SingleAudit-details'>
            <div className='SingleAudit-details-elem'>
              <strong>Created at: </strong>
              <FormattedDate
                value={new Date(createdAt)}
                year='numeric'
                month='long'
                day='2-digit'
              />
            </div>
            <div className='SingleAudit-details-elem'>
              <strong>Status: </strong> <span>{statusName}</span>
            </div>
            <div className='SingleAudit-details-elem'>
              <strong>Source code: </strong> <span>{sourceCodeUrl}</span>
            </div>
            <div className='SingleAudit-details-elem'>
              <strong>Disclosure Policy: </strong> <span>{disclosurePolicy}</span>
            </div>
            <div className='SingleAudit-details-elem'>
              <strong>Platform: </strong> <span>{platform}</span>
            </div>
          </div>
          <div className='SingleAudit-history'>
            <h2 className='SingleAudit-history-title'>Audit status history</h2>
            <div className='SingleAudit-history-elements'>
              {statusHistory.length > 0 ? statusHistory.map((elem, index) => {
                if (elem.statusType === 'Status') {
                  return (
                    <div key={elem.statusName} className='SingleAudit-history-element'>
                      <div>
                        <span className='SingleAudit-history-element-count'>{index + 1}</span>
                        <span className='SingleAudit-history-element-detail'>{elem.statusName} by </span>
                        <span className='SingleAudit-history-element-author'>{elem.statusAuthor}</span>
                      </div>
                      <div>
                        <p className='SingleAudit-history-element-description'>
                          {elem.comment}
                        </p>
                      </div>
                    </div>
                  )
                }
                return (
                  <div key={elem.statusName} className='SingleAudit-history-element is-comment'>
                    <div>
                      <span className='SingleAudit-history-element-detail'>Commented by </span>
                      <span className='SingleAudit-history-element-author'>{elem.statusAuthor}</span>
                    </div>
                    <div>
                      <p className='SingleAudit-history-element-description'>
                        {elem.comment}
                      </p>
                    </div>
                  </div>
                );
              }) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateTopProps(state) {
  return {
    auditDetail: state.auditDetail,
  };
}

SingleAudit.propTypes = {
  auditDetail: PropTypes.object,
};

export default connect(mapStateTopProps)(SingleAudit);