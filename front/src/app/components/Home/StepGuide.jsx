import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

const StepGuide = ({ intl }) => (
  <div className='StepGuide'>
    <div className='StepGuide-content container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'StepGuideTitle', defaultMessage: 'Step by Step guide on how to stake in every platform:' })}
      />
      <div className='StepGuide-holder'>
        <div className='StepGuide-video sixteen-nine'>
          <iframe
            className='content'
            title='Guarda Wallet tutorial'
            src='https://www.youtube.com/embed/kM5ZYTlTU98'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <div className='StepGuide-video sixteen-nine'>
          <iframe
            className='content'
            title='Coinomi tutorial'
            src='https://www.youtube.com/embed/-jldPYhHAb0'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <div className='StepGuide-video sixteen-nine'>
          <iframe
            className='content'
            title='Trust Wallet tutorial'
            src='https://www.youtube.com/embed/HgInjG6ywtQ'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <div className='StepGuide-video sixteen-nine'>
          <iframe
            className='content'
            title='Callisto Oficcial Wallet tutorial'
            src='https://www.youtube.com/embed/syDN3o5cJBM'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <div className='StepGuide-video sixteen-nine'>
          <iframe
            className='content'
            title='Magnum Wallet tutorial'
            src='https://www.youtube.com/embed/O4XDpS09k-s'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </div>
);

StepGuide.propTypes = {
  intl: PropTypes.object,
}

export default injectIntl(StepGuide);
