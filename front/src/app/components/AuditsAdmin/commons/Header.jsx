import React, { PureComponent } from 'react';

class Header extends PureComponent {
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
        </div>
      </header>
    );
  }
}

export default Header;
