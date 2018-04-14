import React from 'react'
import { Element } from 'react-scroll'

const Wallets = () => (
  <Element className="Wallets" name="Wallets">
    <div className="container">
      <h2 className="Wallets-title">
        Wallets
      </h2>
      <p className="Wallets-description">
        These wallets will support Callisto Network at the time the mainnet is launched:
      </p>
      <div className="Wallets-list">
        <a
          className="Wallets-list-element"
          target="_blank"
          href="https://ethereumproject.github.io/etherwallet/"
        >
          Classic Ether Wallet
        </a>
        <a
          className="Wallets-list-element"
          target="_blank"
          href="https://trustwalletapp.com/"
        >
          Trust Wallet App
        </a>
        <a
          className="Wallets-list-element"
          target="_blank"
          href="https://guarda.co/"
        >
          Guarda Wallet
        </a>
        <a
          className="Wallets-list-element"
          target="_blank"
          href="https://coinomi.com/"
        >
          Coinomi Wallet
        </a>
      </div>
      <p className="Wallets-description">
        Any wallet that allows you to export your account is also compatible with Callisto.
      </p>
      <p className="Wallets-description">
        Wallet compatibility does not guarantee that the wallet will support Callisto,
        but you can always export your account and use it with a wallet that supports
        Callisto Network.
      </p>
    </div>
  </Element>
)

export default Wallets
