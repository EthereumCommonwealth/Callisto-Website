import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import LangSelector from './LangSelector';

class Header extends PureComponent {

  state = {
    mobileMenuOpened: false,
  };

  handleMenuOpen = event => {
    event.preventDefault();
    this.setState({ mobileMenuOpened: !this.state.mobileMenuOpened });
    // this.setState({ mobileMenuOpened: !this.state.mobileMenuOpened }, () => {
    //   if (this.state.mobileMenuOpened) {
    //     document.body.classList = 'noScroll';
    //   } else {
    //     document.body.classList = '';
    //   }
    // });
  }

  get menuElements() {
    return [
      {
        title: this.props.intl.formatMessage({ id: 'Roadmap' }),
        url: !this.props.fromLanding ? '/#roadmap' : 'roadmap',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'Airdrop' }),
        url: this.props.lang === 'en' ? '/airdrop/' : `/${this.props.lang}/airdrop/`,
        type: 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'Wallers' }),
        url: !this.props.fromLanding ? '/#wallets' : 'wallets',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'Exchanges' }),
        url: !this.props.fromLanding ? '/#exchanges' : 'exchanges',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'Mining' }),
        url: !this.props.fromLanding ? '/#mining' : 'mining',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'ColdStaking' }),
        url: this.props.lang === 'en' ? '/cold-staking/' : `/${this.props.lang}/cold-staking/`,
        type: 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'Audit' }),
        url: this.props.lang === 'en' ? '/smart-contract/' : `/${this.props.lang}/smart-contract/`,
        type: 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'Team' }),
        url: !this.props.fromLanding ? '/#team' : 'team',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'Blog' }),
        url: this.props.lang === 'en' ? '/blog/' : `/${this.props.lang}/blog/`,
        type: 'router',
      },
    ];
  }

  render() {
    const menuElements = this.menuElements;
    return (
      <header className='Header'>
        <div className='Header-content container'>
          <Link to='/'>
            <figure className='Header-figure'>
              <img
                className='Header-logo-desktop'
                src='/image/callisto_logo_c.svg'
                alt='Callisto Logo'
              />
              <img
                className='Header-logo-mobile'
                src='/image/mini-logo.svg'
                alt='Callisto Logo'
              />
            </figure>
          </Link>
          <nav className='Header-menu'>
            <a className='Header-menu-mobile' onClick={this.handleMenuOpen}>
              <i className='fas fa-bars Header-menu-mobile-icon' />
            </a>
            {this.state.mobileMenuOpened ? (
              <div className='Header-menu-mobile-content'>
                <div className='Header-menu-mobile-content-square'>
                  <div className='Header-menu-mobile-content-top'>
                    <LangSelector
                      defaultSelected={this.props.lang}
                      langList={['es', 'en', 'id', 'ru']}
                    />
                    <a className='Header-menu-mobile' onClick={this.handleMenuOpen}>
                      <i className='fas fa-times Header-menu-mobile-icon' />
                    </a>
                  </div>
                  <ul className='Header-menu-mobile-content-middle'>
                    {menuElements.map((elem, index) => {
                      if (elem.type === 'scroll') {
                        return (
                          <li key={`menuElement-${index}`}>
                            <ScrollTo
                              className='Header-menu-content-target'
                              to={elem.url}
                              spy={true}
                              smooth={true}
                              offset={0}
                              duration={500}
                              onClick={this.handleMenuOpen}
                            >
                              {elem.title}
                            </ScrollTo>
                          </li>
                        );
                      } else if (elem.type === 'router') {
                        return (
                          <li key={`menuElement-${index}`}>
                            <Link
                              className='Header-menu-content-target'
                              to={elem.url}
                            >
                              {elem.title}
                            </Link>
                          </li>
                        );
                      }
                      return null
                    }
                    )}
                  </ul>
                  <div className='Header-menu-mobile-content-bottom'>
                    <span className='Header-menu-mobile-content-bottom-copy'>
                      <FormattedMessage id='FooterCopy' />
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
            <ul className='Header-menu-content'>
              {menuElements.map((elem, index) => {
                if (elem.type === 'scroll') {
                  return (
                    <li key={`menuElement-${index}`}>
                      <ScrollTo
                        className='Header-menu-content-target'
                        to={elem.url}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        {elem.title}
                      </ScrollTo>
                    </li>
                  );
                } else if (elem.type === 'router') {
                  return (
                    <li key={`menuElement-${index}`}>
                      <Link
                        className='Header-menu-content-target'
                        to={elem.url}
                      >
                        {elem.title}
                      </Link>
                    </li>
                  );
                }
                return null
              }
              )}
              <LangSelector
                defaultSelected={this.props.lang}
                langList={['es', 'en', 'id', 'ru']}
              />
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default injectIntl(Header);
