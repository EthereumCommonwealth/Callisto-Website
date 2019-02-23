import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';
import { connect } from 'react-redux';
import axios from 'axios';
import auth from '../../services/auth';
import AuditDetail from './AuditDetail';

class SingleAudit extends PureComponent {

  state = {
    commensOpen: false,
  }

  handleCommentsBoxChange = event => {
    event.preventDefault();
    this.setState({ commensOpen: !this.state.commensOpen });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('/comment-submit/', {
      csrf_token: this.props.csrftoken,
      jwt: auth.token(),
      commentDetails: {
        auditId: this.props.auditDetail.id,
        comment: event.target.auditComment.value,
      }
    })
      .then(() => document.location.reload())
      .catch(err => console.log(err))
  }

  render() {
    const { title, description, sourceCodeUrl, disclosurePolicy,
      platform, statusName, createdAt, statusHistory, finalReport } = this.props.auditDetail;
    const { user } = this.props;

    return (
      <div className='SingleAudit'>
        <div className='SingleAudit-content container square'>
          <h4 className='SingleAudit-title'>{title}</h4>
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
          {finalReport !== '' ?
            (
              <div>
                <a href={finalReport} className='SingleAudit-submit-comment' download>Download your report here.</a>
              </div>
            ) : null
          }
          <div className='SingleAudit-history'>
            <h2 className='SingleAudit-history-title'>Audit status history</h2>
            <div className='SingleAudit-history-elements'>
              {statusHistory.length > 0 ? statusHistory.map((elem, index) => (
                <AuditDetail
                  details={elem}
                  user={user}
                  key={`${elem.statusName}-${index}`}
                  index={index}
                  csrftoken={this.props.csrftoken}
                />
              )) : null}
            </div>
            {user && user.user_id && !this.state.commensOpen ?
              (
                <a className='SingleAudit-submit-comment' onClick={this.handleCommentsBoxChange}>
                  Add Comment
                </a>
              ) : null}
            {user && user.user_id && this.state.commensOpen ?
              (
                <form className='SingleAudit-submit-area' onSubmit={this.handleSubmit}>
                  <textarea
                    className='SingleAudit-submit-area-input'
                    name='auditComment'
                    required
                  />
                  <div className='SingleAudit-submit-area-btns'>
                    <input type='submit' className='SingleAudit-submit-area-go' value='Submit comment' />
                    <a
                      className='SingleAudit-submit-area-cancel'
                      onClick={this.handleCommentsBoxChange}
                    >
                      Cancel
                    </a>
                  </div>
                </form>
              ) : null}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateTopProps(state) {
  return {
    auditDetail: state.auditDetail,
    user: state.user,
    csrftoken: state.audit.csrf_token,
  };
}

SingleAudit.propTypes = {
  auditDetail: PropTypes.object,
  user: PropTypes.object,
  csrftoken: PropTypes.string,
};

export default connect(mapStateTopProps)(SingleAudit);
