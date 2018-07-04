import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';
import { injectIntl, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import LangSelector from './LangSelector';

class Footer extends PureComponent {

  get menuFirstColumn() {
    return [
      {
        title: this.props.intl.formatMessage({ id: 'FooterWallets' }),
        url: !this.props.fromLanding ? '/' : 'wallets',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'FooterPool' }),
        url: !this.props.fromLanding ? '/' : 'pool',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'FooterBlockExplorers' }),
        url: !this.props.fromLanding ? '/' : 'pool',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'FooterExchanges' }),
        url: !this.props.fromLanding ? '/' : 'exchanges',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'FooterDocumentation' }),
        url: 'documentation',
        type: 'anchor',
      },
    ];
  }

  get menuSecondColumn() {
    return [
      {
        title: this.props.intl.formatMessage({ id: 'FooterCommunity' }),
        url: !this.props.fromLanding ? '/' : 'community',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'FooterBlog' }),
        url: '/blog',
        type: 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'FooterSupport' }),
        url: 'support',
        type: 'anchor'
      },
      {
        title: this.props.intl.formatMessage({ id: 'FooterFAQ' }),
        url: 'faq',
        type: 'anchor',
      },
      {
        title: this.props.intl.formatMessage({ id: 'FooterContact' }),
        url: 'contact',
        type: 'anchor'
      },
    ];
  }

  get menuThirdColumn() {
    return [
      {
        title: this.props.intl.formatMessage({ id: 'FooterAbout' }),
        url: !this.props.fromLanding ? '/' : 'about',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'FooterAirdrop' }),
        url: !this.props.fromLanding ? '/' : 'airdrop',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'FooterTeam' }),
        url: !this.props.fromLanding ? '/' : 'team',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
    ];
  }

  render() {
    const firstColumn = this.menuFirstColumn;
    const secondColumn = this.menuSecondColumn;
    const thirdColumn = this.menuThirdColumn;
    return (
      <footer className='Footer'>
        <div className='Footer-top container'>
          <figure className='Footer-figure'>
            <img
              className='Footer-logo'
              src='/image/clo-logo.svg'
              alt='Callisto Logo'
            />
          </figure>
          <div className='Footer-top-list'>
            <span className='Footer-top-list-title'>
              <FormattedMessage id='FooterSoftware' />
            </span>
            {firstColumn.map((elem) => {
              if (elem.type === 'router') {
                return (
                  <Link
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    to={elem.url}
                  >
                    {elem.title}
                  </Link>
                );
              } else if (elem.type === 'scroll') {
                return (
                  <ScrollTo
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    to={elem.url}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {elem.title}
                  </ScrollTo>
                );
              } else if (elem.type === 'anchor') {
                return (
                  <a
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    href={elem.url}
                    target='_blank'
                  >
                    {elem.title}
                  </a>
                )
              }
              return null;
            })}
          </div>
          <div className='Footer-top-list'>
            <span className='Footer-top-list-title'>
              <FormattedMessage id='FooterCommunityHelp' />
            </span>
            {secondColumn.map((elem) => {
              if (elem.type === 'router') {
                return (
                  <Link
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    to={elem.url}
                  >
                    {elem.title}
                  </Link>
                );
              } else if (elem.type === 'scroll') {
                return (
                  <ScrollTo
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    to={elem.url}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {elem.title}
                  </ScrollTo>
                );
              } else if (elem.type === 'anchor') {
                return (
                  <a
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    href={elem.url}
                    target='_blank'
                  >
                    {elem.title}
                  </a>
                )
              }
              return null;
            })}
          </div>
          <div className='Footer-top-list'>
            <span className='Footer-top-list-title'>Callisto</span>
            {thirdColumn.map((elem) => {
              if (elem.type === 'router') {
                return (
                  <Link
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    to={elem.url}
                  >
                    {elem.title}
                  </Link>
                );
              } else if (elem.type === 'scroll') {
                return (
                  <ScrollTo
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    to={elem.url}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {elem.title}
                  </ScrollTo>
                );
              } else if (elem.type === 'anchor') {
                return (
                  <a
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    href={elem.url}
                    target='_blank'
                  >
                    {elem.title}
                  </a>
                )
              }
              return null;
            })}
          </div>
        </div>
        <div className='Footer-bottom'>
          <div className='Footer-bottom-content container'>
            <div className='Footer-bottom-content-copy'>
              <span>
                <FormattedMessage id='FooterCopy' />
              </span>
            </div>
            <div className='Footer-bottom-content-lang'>
              <LangSelector
                defaultSelected={this.props.lang}
                langList={['es', 'en', 'id', 'ru']}
                toTop
              />
            </div>
            <div className='Footer-bottom-content-links'>
              <Link to='/brand-policy' className='Footer-bottom-content-element'>
                <FormattedMessage id='FooterBrandPolicy' />
              </Link>
              <Link to='/privacy-policy' className='Footer-bottom-content-element'>
                <FormattedMessage id='FooterPrivacyPolicy' />
              </Link>
              <Link to='/terms' className='Footer-bottom-content-element'>
                <FormattedMessage id='FooterTerms' />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default injectIntl(Footer);
