import React from 'react'

const Wallets = () => (
  <div className="square">
    <h2 className="title">
      Wallets
    </h2>
    <p className="pharagraph">
      These wallets will support Callisto Network at the time the mainnet is launched:
    </p>
    <br/><br/>
    <div className="Wallets">
      <a
        className="Buttons-element"
        target="_blank"
        href="https://ethereumproject.github.io/etherwallet/"
      >
        Classic Ether Wallet
      </a>
      <a
        className="Buttons-element"
        target="_blank"
        href="https://trustwalletapp.com/"
      >
        Trust Wallet App
      </a>
      <a
        className="Buttons-element"
        target="_blank"
        href="https://guarda.co/"
      >
        Guarda Wallet
      </a>
    </div>
    <p className="pharagraph">
      Any wallet that allows you to export your account is also compatible with Callisto.
    </p>
    <br/>
    <p className="pharagraph">
      Wallet compatibility does not guarantee that the wallet will support Callisto,
      but you can always export your account and use it with a wallet that supports
      Callisto Network.
    </p>
  </div>
)

export default Wallets
