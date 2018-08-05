import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

const FinalReport = ({ intl }) => (
  <div className='FinalReport'>
    <div className='container'>
      <div className='FinalReport-title'>
        <SectionHeading
          title={intl.formatMessage({ id: 'FinalReportTitle' })}
          description={intl.formatMessage({ id: 'FinalReportDescription' })}
        />
      </div>
      <p className='FinalReport-text'>
        <FormattedMessage id='FinalReportText' />
      </p>
    </div>
  </div>
);

export default injectIntl(FinalReport);
