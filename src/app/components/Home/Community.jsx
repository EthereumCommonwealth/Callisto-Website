import React, { PureComponent } from 'react';
import { Element } from 'react-scroll';
import { injectIntl } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

class Community extends PureComponent {
  get telegramUrl() {
    switch (this.props.lang) {
      case 'ru':
        return 'https://t.me/Callisto_Russian';
      case 'id':
        return 'https://t.me/CallistoIndo';
      default:
        return 'https://t.me/CallistoNet';
    }
  }

  render() {
    return (
      <Element className='Community' name='community'>
        <div className='Community-content container'>
          <SectionHeading
            title={this.props.intl.formatMessage({ id: 'JoinCommunity' })}
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
              href={this.telegramUrl}
              target='_blank'
            >
              <i className='fab fa-telegram-plane' />
              <span className='Community-list-element-text'>
                Telegram chat
              </span>
            </a>
            <a
              className='Community-list-element'
              href='https://t.me/CallistoNetworkNews'
              target='_blank'
            >
              <i className='fab fa-telegram-plane' />
              <span className='Community-list-element-text'>
                Telegram channel
              </span>
            </a>
            <a
              className='Community-list-element'
              href='https://www.linkedin.com/company/callisto-network/  '
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
  }
}

export default injectIntl(Community);
