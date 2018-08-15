import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

const Description = ({ intl }) => (
  <div className='Description'>
    <div className='container'>
      <div className='Description-content'>
        <div className='Description-row left-row'>
          <div className='Description-row-info'>
            <h3 className='Description-row-info-title'>
              <FormattedMessage id='DescriptionWhatIsTitle' />
            </h3>
            <p className='Description-row-info-text'>
              <FormattedMessage id='DescriptionWhatIsFirstText' />
            </p>
            <p className='Description-row-info-subtitle'>
              <FormattedMessage id='DescriptionWhatIsSecondText' />
            </p>
            <p className='Description-row-info-text'>
              <FormattedMessage id='DescriptionWhatIsThirdText' />
            </p>
          </div>
          <div />
        </div>
        <div className='Description-row right-row'>
          <div />
          <div className='Description-row-info'>
            <h3 className='Description-row-info-title'>
              <FormattedMessage id='DescriptionSecurityTitle' />
            </h3>
            <p className='Description-row-info-text'>
              <FormattedMessage id='DescriptionSecurityFirstText' />
            </p>
            <p className='Description-row-info-subtitle'>
              <FormattedMessage id='DescriptionSecuritySecondText' />
            </p>
            <p className='Description-row-info-text'>
              <FormattedMessage id='DescriptionSecurityThirdText' />
            </p>
          </div>
        </div>
        <div className='Description-row left-row'>
          <div className='Description-row-info'>
            <h3 className='Description-row-info-title'>
              <FormattedMessage id='DescriptionSolutionTitle' />
            </h3>
            <p className='Description-row-info-text'>
              <FormattedMessage id='DescriptionSolutionFirstText' />
            </p>
          </div>
          <div />
        </div>
      </div>
      <SectionHeading title={intl.formatMessage({ id: 'DescriptionAudit' })} />
      <div className='Description-autdit'>
        <p className='Description-autdit-text'>
          <FormattedMessage id='DescriptionAuditText' />
        </p>
      </div>
    </div>
  </div>
);

export default injectIntl(Description);
