import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

const GuidlineHead = ({ intl }) => (
  <section className='GuidlineHead'>
    <div className='GuidlineHead-content container'>
      <div />
      <div className='GuidlineHead-content-holder'>
        <div className='GuidlineHead-top'>
          <h1 className='GuidlineHead-top-title'>
            <FormattedMessage id='GuidlineHeadTitle' />
          </h1>
          <p
            className='GuidlineHead-top-text'
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: 'GuidlineHeadDescription' })
            }}
          />
          <a
            href='mailto:yograterol@callisto.network'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-green'
          >
            <FormattedMessage id='GuidlineHeadCTA' />
          </a>
        </div>
        <div className='GuidlineHead-bottom'>
          <h1 className='GuidlineHead-bottom-title'>
            <FormattedMessage id='GuidlineHeadBehavior' />
          </h1>
          <div className='GuidlineHead-bottom-list'>
            <div className='GuidlineHead-bottom-list-element'>
              <FormattedMessage id='Behavior1' />
            </div>
            <div className='GuidlineHead-bottom-list-element'>
              <FormattedMessage id='Behavior2' />
            </div>
            <div className='GuidlineHead-bottom-list-element'>
              <FormattedMessage id='Behavior3' />
            </div>
            <div className='GuidlineHead-bottom-list-element'>
              <FormattedMessage id='Behavior4' />
            </div>
            <div className='GuidlineHead-bottom-list-element'>
              <FormattedMessage id='Behavior5' />
            </div>
            <div className='GuidlineHead-bottom-list-element'>
              <FormattedMessage id='Behavior6' />
            </div>
          </div>
          <p className='GuidlineHead-bottom-subtitle'>
            <FormattedMessage id='GuidlineHeadBehaviorSubtitle' />
          </p>
        </div>
      </div>
      <div />
    </div>
  </section>
);

GuidlineHead.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(GuidlineHead);
