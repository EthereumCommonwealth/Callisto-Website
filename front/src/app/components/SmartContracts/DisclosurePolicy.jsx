import React from 'react';
import { injectIntl } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

const DisclosurePolicy = ({ intl }) => (
  <div className='DisclosurePolicy'>
    <div className='container'>
      <div className='DisclosurePolicy-title'>
        <SectionHeading
          title={intl.formatMessage({ id: 'DisclosurePolicyTitle' })}
          description={intl.formatMessage({ id: 'DisclosurePolicyDescription' })}
        />
      </div>
      <span className='DisclosurePolicy-badge'>
        <figure className='DisclosurePolicy-badge-figure'>
          <img src='/image/clo-badge.svg' alt='Callsito Badge' />
        </figure>
      </span>
    </div>
  </div>
);

export default injectIntl(DisclosurePolicy);
