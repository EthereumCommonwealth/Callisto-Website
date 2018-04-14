import React from 'react'
import { Link } from 'react-scroll'
import logo from '../images/Callisto_new.png'

const Header = () => (
  <header className="Header">
    <div className="Header-content container">
      <figure className="Header-figure">
        <img
          src={logo}
          alt="Callisto"
          className="Header-figure-img"
        />
      </figure>
      <nav className="Header-nav">
        <ul className="Header-nav-ul">
          <li className="Header-nav-ul-element">
            <Link
              activeClass="active"
              className="Header-nav-ul-element-anchor"
              to="Airdrop"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
            >
              Airdrop
            </Link>
          </li>
          <li className="Header-nav-ul-element">
            <Link
              activeClass="active"
              className="Header-nav-ul-element-anchor"
              to="About"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
            >
              About Callisto
            </Link>
          </li>
          <li className="Header-nav-ul-element">
            <Link
              activeClass="active"
              className="Header-nav-ul-element-anchor"
              to="Exchanges"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
            >
              Exchanges
            </Link>
          </li>
          <li className="Header-nav-ul-element">
            <Link
              activeClass="active"
              className="Header-nav-ul-element-anchor"
              to="Team"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
            >
              Our Team
            </Link>
          </li>
          <li className="Header-nav-ul-element">
            <Link
              activeClass="active"
              className="Header-nav-ul-element-anchor"
              to="Wallets"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
            >
              Wallets
            </Link>
          </li>
          <li className="Header-nav-ul-element">
            <Link
              activeClass="active"
              className="Header-nav-ul-element-anchor"
              to="PoolSupport"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
            >
              Pool
            </Link>
          </li>
          <li className="Header-nav-ul-element">
            <a
              className="Header-nav-ul-element-anchor"
              href="https://news.callisto.network/"
              target="_blank"
            >
              News
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
