import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import LangSelector from './LangSelector';

class Header extends PureComponent {

  get menuElements() {
    return [
      {
        title: this.props.intl.formatMessage({ id: 'HeaderAbout' }),
        url: !this.props.fromLanding ? '/' : 'about',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'HeaderRoadmap' }),
        url: !this.props.fromLanding ? '/' : 'roadmap',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'HeaderAirdrop' }),
        url: !this.props.fromLanding ? '/' : 'airdrop',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'HeaderWallers' }),
        url: !this.props.fromLanding ? '/' : 'wallets',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'HeaderExchanges' }),
        url: !this.props.fromLanding ? '/' : 'exchanges',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'HeaderMining' }),
        url: !this.props.fromLanding ? '/' : 'mining',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'HeaderTeam' }),
        url: !this.props.fromLanding ? '/' : 'team',
        type: this.props.fromLanding ? 'scroll' : 'router',
      },
      {
        title: this.props.intl.formatMessage({ id: 'HeaderBlog' }),
        url: !this.props.fromLanding ? '/' : 'blog',
        type: this.props.fromLanding ? 'scroll' : 'router',
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
                src='/image/clo-logo.svg'
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
