import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

const HowToStake = ({ intl }) => (
  <section className='HowToStake'>
    <div className='HowToStake-content container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'HowToStakeTitle' })}
        description={intl.formatMessage({ id: 'HowToStakeDescription' })}
      />
      <div className='HowToStake-main'>
        <div className='HowToStake-video sixteen-nine'>
          <iframe
            className='content'
            src='https://www.youtube.com/embed/syDN3o5cJBM'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <div className='HowToStake-anchor'>
          <p className='HowToStake-anchor-text'>
            <FormattedMessage id='CheckBlogPost' />
          </p>
          <a
            href='https://callisto.network/blog/post/cold-staking-a-step-by-step-tutorial/'
            target='_blank'
            className='btn btn-green'
          >
            <FormattedMessage id='ReadMore' />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default injectIntl(HowToStake);
