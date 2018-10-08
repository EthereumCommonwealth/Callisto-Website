import React, { PureComponent } from 'react';
import AuthSection from './AuthSection';

class Header extends PureComponent {
  state = {
    mobileMenuOpened: false,
  };

  handleMenuOpen = event => {
    event.preventDefault();
    this.setState({ mobileMenuOpened: !this.state.mobileMenuOpened });
  }

  render() {
    return (
      <header className='Header'>
        <div className='Header-content container'>
          <a href='/'>
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
          </a>
          <nav className='Header-menu'>
            <a className='Header-menu-mobile' onClick={this.handleMenuOpen}>
              <i className='fas fa-bars Header-menu-mobile-icon' />
            </a>
            {this.state.mobileMenuOpened ? (
              <div className='Header-menu-mobile-content'>
                <div className='Header-menu-mobile-content-square'>
                  <div className='Header-menu-mobile-content-top'>
                    <div />
                    <a className='Header-menu-mobile' onClick={this.handleMenuOpen}>
                      <i className='fas fa-times Header-menu-mobile-icon' />
                    </a>
                  </div>
                  <ul className='Header-menu-mobile-content-middle'>
                    <li>
                      <a href='/platform/' className='Header-menu-content-target'>
                        Audits List
                      </a>
                    </li>
                    <li><AuthSection /></li>
                  </ul>
                </div>
              </div>
            ) : null}
            <ul className='Header-menu-content'>
              <li>
                <a href='/platform/' className='Header-menu-content-target'>
                  Audits List
                </a>
              </li>
              <li><AuthSection /></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
