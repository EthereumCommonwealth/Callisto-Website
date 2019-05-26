import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

const Newsletter = ({ intl }) => (
  <div className='Newsletter'>
    <div className='Newsletter-content container'>
      <div id='mc_embed_signup'>
        <h2 className='Newsletter-text'>
          <FormattedMessage id='NewsletterTitle' />
        </h2>
        <form
          action={`
            https://network.us18.list-manage.com/subscribe/
            post?u=dcb90634d3c123520c47ae053&amp;id=6dbdcbff40
          `}
          method='post' id='mc-embedded-subscribe-form'
          name='mc-embedded-subscribe-form'
          className='Newsletter-form validate'
          target='_blank'
        >
          <div className='mc-field-group'>
            <label htmlFor='EMAIL'>
              <input
                className='Newsletter-form-input required email'
                type='email'
                placeholder={intl.formatMessage({ id: 'NewsletterPlaceholder' })}
                name='EMAIL'
                id='mce-EMAIL'
                required
              />
            </label>
          </div>
          <div id='mce-responses' className='clear'>
            <div className='response' id='mce-error-response' style={{ display: 'none' }} />
            <div className='response' id='mce-success-response' style={{ display: 'none' }} />
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'>
            <label htmlFor='b_dcb90634d3c123520c47ae053_6dbdcbff40' />
            <input
              type='text'
              name='b_dcb90634d3c123520c47ae053_6dbdcbff40'
              tabIndex='-1'
              value=''
              readOnly
            />
          </div>
          <div>
            <input
              type='submit'
              className='Newsletter-form-submit btn btn-blue'
              name='subscribe'
              id='mc-embedded-subscribe'
              value={intl.formatMessage({ id: 'NewsletterSubmit' })}
            />
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default injectIntl(Newsletter);
