import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';
import { injectIntl, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import LangSelector from './LangSelector';
import { langsArray } from '../../constants/';

class Footer extends PureComponent {

  get menuFirstColumn() {
    return [
      {
        title: this.props.intl.formatMessage({ id: 'Wallets' }),
        url: !this.props.fromLanding ? '/about/#wallets' : 'wallets',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'Pool' }),
        url: !this.props.fromLanding ? '/about/#pool' : 'pool',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'BlockExplorers' }),
        url: !this.props.fromLanding ? '/about/#pool' : 'pool',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'Exchanges' }),
        url: !this.props.fromLanding ? '/about/#exchanges' : 'exchanges',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'OfficiallyChecker' }),
        url: 'https://checker.callisto.network',
        type: 'anchor',
      },
    ];
  }

  get menuSecondColumn() {
    return [
      {
        title: this.props.intl.formatMessage({ id: 'CommunityGuidlines' }),
        url: '/community-guidelines/',
        type: 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'Blog' }),
        url: '/blog/',
        type: 'anchor',
      },
      {
        title: this.props.intl.formatMessage({ id: 'FooterFAQ' }),
        url: '/faq/',
        type: 'anchor',
      },
      {
        title: this.props.intl.formatMessage({ id: 'Forum', defaultMessage: 'Forum' }),
        url: 'https://forum.callisto.network/',
        type: 'anchor',
      },
    ];
  }

  get menuThirdColumn() {
    return [
      {
        title: this.props.intl.formatMessage({ id: 'About' }),
        url: '/about/',
        type: 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'Airdrop' }),
        url: '/airdrop/',
        type: 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'OurTeam' }),
        url: !this.props.fromLanding ? '/about/#team' : 'team',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'FinancialReport' }),
        url: '/financial-report/',
        type: 'router',
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
              src='/image/callisto_logo_c.svg'
              alt='Callisto Logo'
            />
          </figure>
          <div className='Footer-top-list'>
            <span className='Footer-top-list-title'>
              <FormattedMessage id='NetworkEcosystem' />
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
                    rel='noopener noreferrer'
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
              <FormattedMessage id='CommunityHelp' />
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
                    rel='noopener noreferrer'
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
                    rel='noopener noreferrer'
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
                langList={langsArray}
                toTop
              />
            </div>
            <div className='Footer-bottom-content-links'>
              <a
                href='https://github.com/EthereumCommonwealth/Callisto-Media-Kit'
                target='_blank'
                rel='noopener noreferrer'
                className='Footer-bottom-content-element'
              >
                <FormattedMessage id='Mediakit' />
              </a>
              <a href='mailto:support@callisto.network' className='Footer-bottom-content-element'>
                support.callisto.network
              </a>
              {/* <Link to='/privacy-policy' className='Footer-bottom-content-element'>
                <FormattedMessage id='PrivacyPolicy' />
              </Link>
              <Link to='/terms' className='Footer-bottom-content-element'>
                <FormattedMessage id='Terms' />
              </Link> */}
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
