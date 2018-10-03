import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AuditDetail extends PureComponent {

  state = {
    commensOpen: false,
  }

  handleCommentsBoxChange = event => {
    event.preventDefault();
    this.setState({ commensOpen: !this.state.commensOpen });
  }

  render() {
    const { details, user, index } = this.props;

    if (details.statusType === 'Status') {
      return (
        <div className='SingleAudit-history-element'>
          <div>
            <span className='SingleAudit-history-element-count'>{index + 1}</span>
            <span className='SingleAudit-history-element-detail'>{details.statusName} by </span>
            <span className='SingleAudit-history-element-author'>{details.statusAuthor}</span>
          </div>
          <div>
            <p className='SingleAudit-history-element-description'>
              {details.comment}
            </p>
          </div>
          {user && user.user_id && !this.state.commensOpen ?
            (
              <a className='SingleAudit-submit-comment' onClick={this.handleCommentsBoxChange}>
                Add Comment
              </a>
            ) : null}
          {user && user.user_id && this.state.commensOpen ?
            (
              <div className='SingleAudit-submit-area'>
                <textarea className='SingleAudit-submit-area-input' />
                <div className='SingleAudit-submit-area-btns'>
                  <a className='SingleAudit-submit-area-go' >
                    Submit comment
                  </a>
                  <a
                    className='SingleAudit-submit-area-cancel'
                    onClick={this.handleCommentsBoxChange}
                  >
                    Cancel
                  </a>
                </div>
              </div>
            ) : null}
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
