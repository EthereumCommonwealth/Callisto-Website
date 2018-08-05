import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

const ReportAbuse = ({ intl }) => (
  <section className='ReportAbuse'>
    <div className='ReportAbuse-content container'>
      <div />
      <div className='ReportAbuse-content-holder'>
        <h2 className='ReportAbuse-holder-title'>
          <FormattedMessage id='ReportAbuseTitle' />
        </h2>
        <p
          className='ReportAbuse-holder-text'
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'ReportAbuseDescription' })
          }}
        />
        <p
          className='ReportAbuse-holder-text secondary'
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'ReportAbuseSecondary' })
          }}
        />
        <h3 className='ReportAbuse-holder-subtitle'>
          <FormattedMessage id='Consequences' />
        </h3>
        <p
          className='ReportAbuse-holder-text secondary'
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'ConsequencesText' })
          }}
        />
        <h3 className='ReportAbuse-holder-subtitle'>
          <FormattedMessage id='AddressingGrievances' />
        </h3>
        <p
          className='ReportAbuse-holder-text secondary'
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'GrievancesText' })
          }}
        />
      </div>
      <div />
    </div>
  </section>
);

ReportAbuse.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(ReportAbuse);
