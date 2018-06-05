import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import LangSelector from './LangSelector';

class Header extends Component {

  get menuElements() {
    return [
      { title: this.props.intl.formatMessage({ id: 'HeaderAbout' }), url: 'about' },
      { title: 'Roadmap', url: 'roadmap' },
      { title: 'Airdrop', url: 'airdrop' },
      { title: 'Wallets', url: 'wallets' },
      { title: 'Exchanges', url: 'exchanges' },
      { title: 'Mining', url: 'mining' },
      { title: 'Our Team', url: 'team' },
      { title: 'Blog', url: 'blog' },
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
              {menuElements.map((elem, index) =>
                (
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
                )
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
