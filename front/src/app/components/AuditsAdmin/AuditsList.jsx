import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';
import { connect } from 'react-redux';

const AuditsList = ({ auditsList }) => (
  <div className='AuditsList'>
    <div className='AuditsList-content container'>
      <div className='AuditsList-table-head'>
        <div className='AuditsList-table-head-elem'>Title</div>
        <div className='AuditsList-table-head-elem'>Platform</div>
        <div className='AuditsList-table-head-elem'>Status</div>
        <div className='AuditsList-table-head-elem'>Creation Date</div>
      </div>
      {auditsList.map(elem => (
        <div className='AuditsList-table-element' key={elem.createdAt}>
          <a href={`/platform/${elem.id}-${elem.slug}/`} className='AuditsList-table-element-anchor' />
          <div className='AuditsList-table-element-item'>{elem.title}</div>
          <div className='AuditsList-table-element-item'>{elem.platform}</div>
          <div className='AuditsList-table-element-item'>{elem.statusName}</div>
          <div className='AuditsList-table-element-item'>
            <FormattedDate
              value={new Date(elem.createdAt)}
              year='numeric'
              month='long'
              day='2-digit'
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

function mapStateTopProps(state) {
  return {
    auditsList: state.auditsList,
  };
}

AuditsList.propTypes = {
  auditsList: PropTypes.array,
};

export default connect(mapStateTopProps)(AuditsList)
