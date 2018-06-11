import React from 'react';
import { Element } from 'react-scroll';
import { injectIntl } from 'react-intl';
import SectionHeading from './commons/SectionHeading';

const Community = ({ intl }) => (
  <Element className='Community' name='community'>
    <div className='Community-content container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'JoinCommunity' })}
      />
      <div className='Community-list'>
        <a
          className='Community-list-element'
          href='https://github.com/EthereumCommonwealth'
          target='_blank'
        >
          <i className='fab fa-github' />
          <span className='Community-list-element-text'>
            Github
          </span>
        </a>
        <a
          className='Community-list-element'
          href='http://reddit.com/r/CallistoCrypto'
          target='_blank'
        >
          <i className='fab fa-reddit-alien' />
          <span className='Community-list-element-text'>
            Reddit
          </span>
        </a>
        <a
          className='Community-list-element'
          href='https://twitter.com/CallistoSupport'
          target='_blank'
        >
          <i className='fab fa-twitter' />
          <span className='Community-list-element-text'>
            Twitter
          </span>
        </a>
        <a
          className='Community-list-element'
          href='https://www.facebook.com/callistonetwork/'
          target='_blank'
        >
          <i className='fab fa-facebook-f' />
          <span className='Community-list-element-text'>
            Facebook
          </span>
        </a>
        <a
          className='Community-list-element'
          href='https://t.me/CallistoNet'
          target='_blank'
        >
          <i className='fab fa-telegram-plane' />
          <span className='Community-list-element-text'>
            Telegram
          </span>
        </a>
        <a
          className='Community-list-element'
          href='/'
          target='_blank'
        >
          <i className='fab fa-linkedin-in' />
          <span className='Community-list-element-text'>
            Linkedin
          </span>
        </a>
        <a
          className='Community-list-element'
          href='https://discord.gg/fGdPSA2'
          target='_blank'
        >
          <i className='fab fa-discord' />
          <span className='Community-list-element-text'>
            Discord
          </span>
        </a>
      </div>
    </div>
  </Element>
);

export default injectIntl(Community);
