import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LangSelector from './LangSelector';

class Header extends Component {

  get menuElements() {
    return [
      { title: 'About', url: '/about/' },
      { title: 'Roadmap', url: '/roadmap/' },
      { title: 'Airdrop', url: '/airdrop/' },
      { title: 'Wallets', url: '/wallets/' },
      { title: 'Exchanges', url: '/exchanges/' },
      { title: 'Mining', url: '/mining/' },
      { title: 'Our Team', url: '/team/' },
      { title: 'Blog', url: '/blog/' },
    ];
  }

  render() {
    const menuElements = this.menuElements;
    return (
      <header className='Header'>
        <div className='Header-content container'>
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
          <nav className='Header-menu'>
            <ul className='Header-menu-content'>
              {menuElements.map((elem, index) =>
                (
                  <li key={`menuElement-${index}`}>
                    <a
                      href={elem.url}
                      className='Header-menu-content-target'
                    >
                      {elem.title}
                    </a>
                  </li>
                )
              )}
              <LangSelector
                defaultSelected={this.props.lang}
                langList={['es', 'en', 'ru']}
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

export default Header;
