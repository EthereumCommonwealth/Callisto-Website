import React from 'react';
import SectionHeading from '../commons/SectionHeading';
import CheckElement from '../commons/CheckElement';
import { injectIntl } from 'react-intl';

const AuditorsCheck = ({ intl }) => (
  <div className='AuditorsCheck'>
    <div className='container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'AuditorsCheckTitle' })}
        description={intl.formatMessage({ id: 'AuditorsCheckDescription' })}
      />
      <div className='AuditorsCheck-holder'>
        <CheckElement
          text={intl.formatMessage({ id: 'AuditorsCheckMultipleAuditors' })}
          img='/image/smart-contracts/check-elements/multiple-auditors.svg'
        />
        <CheckElement
          text={intl.formatMessage({ id: 'AuditorsCheckOverall' })}
          img='/image/smart-contracts/check-elements/overall-architecture.svg'
        />
        <CheckElement
          text={intl.formatMessage({ id: 'AuditorsCheckTechnical' })}
          img='/image/smart-contracts/check-elements/technical-analysis.svg'
        />
        <CheckElement
          text={intl.formatMessage({ id: 'AuditorsCheckIdentifyVulnerabilities' })}
          img='/image/smart-contracts/check-elements/identify-vulnerabilities.svg'
        />
        <CheckElement
          text={intl.formatMessage({ id: 'AuditorsCheckIdentifyBugs' })}
          img='/image/smart-contracts/check-elements/identify-bugs.svg'
        />
        <CheckElement
          text={intl.formatMessage({ id: 'AuditorsCheckOptimization' })}
          img='/image/smart-contracts/check-elements/optimization-code.svg'
        />
      </div>
    </div>
  </div>
);

export default injectIntl(AuditorsCheck);
