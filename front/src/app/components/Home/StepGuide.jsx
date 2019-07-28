import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';
import StepVideo from './StepVideo';

const StepGuide = ({ intl }) => (
  <div className='StepGuide'>
    <div className='StepGuide-content container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'StepGuideTitle', defaultMessage: 'Step by Step guide on how to stake in every platform:' })}
      />
      <div className='StepGuide-holder'>
        <StepVideo
          title='Guarda Wallet tutorial'
          src='https://www.youtube.com/embed/kM5ZYTlTU98'
        />
        <StepVideo
          title='Coinomi Wallet Tutorial'
          src='https://www.youtube.com/embed/-jldPYhHAb0'
        />
        <StepVideo
          title='Trust Wallet tutorial'
          src='https://www.youtube.com/embed/HgInjG6ywtQ'
        />
        <StepVideo
          title='Callisto Official Wallet tutorial'
          src='https://www.youtube.com/embed/syDN3o5cJBM'
        />
        <StepVideo
          title='Magnum Wallet tutorial'
          src='https://www.youtube.com/embed/O4XDpS09k-s'
        />
      </div>
    </div>
  </div>
);

StepGuide.propTypes = {
  intl: PropTypes.object,
}

export default injectIntl(StepGuide);
