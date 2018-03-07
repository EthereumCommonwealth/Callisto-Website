import React from 'react'
import binance from '../images/binance.png'
import hitbtclogo from '../images/hitbtclogo.png'
const Buttons = () => (
  <div className="Buttons">
    <div className="margin-bottom square">
      <figure>
        <img
          className="image-in-square"
          src={binance}
          alt="Binance"
        />
      </figure>
    </div>
    <div className="margin-bottom square">
      <a
        href="https://blog.hitbtc.com/hitbtc-to-support-ethereum-classic-fork-callisto/"
        target="_blank"
      >
        <figure>
          <img
            className="image-in-square"
            src={hitbtclogo}
            alt="HitBTC"
          />
        </figure>
        <div className="hitbtc">
          <span className="hitbtc-text">HitBTC announcement</span>
        </div>
      </a>
    </div>
    <a
      className="Buttons-element"
      target="_blank"
      href="https://github.com/EthereumCommonwealth/go-callisto"
    >
      GO-Callisto (testnet) source code
    </a>
    <a
      className="Buttons-element"
      target="_blank"
      href="https://github.com/Dexaran/Security-DAO"
    >
      Security DAO source code
    </a>
    <a
      className="Buttons-element"
      target="_blank"
      href="https://github.com/EthereumCommonwealth/Callisto-Snapshot"
    >
      Snapshot script source code
    </a>
    <a
      className="Buttons-element"
      target="_blank"
      href="https://github.com/EthereumCommonwealth/parity"
    >
      RUST-Callisto (testnet) source code
    </a>
    <a
      className="Buttons-element"
      target="_blank"
      href="https://github.com/EthereumCommonwealth/Roadmap/issues/42"
    >
      Callisto Network development status
    </a>
    <a
      className="Buttons-element"
      target="_blank"
      href="https://github.com/EthereumCommonwealth/Roadmap/issues"
    >
      Ethereum Commonwealth Roadmap
    </a>
    <a
      className="Buttons-element"
      target="_blank"
      href="https://www.reddit.com/r/EthereumClassic/comments/7qs9ui/callisto_network_announcement/"
    >
      Original announcement
    </a>
    <a
      className="Buttons-element"
      target="_blank"
      href="https://ethereumproject.github.io/etherwallet/?network=ETC"
    >
      Classic Ether Wallet
    </a>
    <a
      className="Buttons-element"
      target="_blank"
      href="https://drive.google.com/file/d/1DZlyuzWawKAJutyqgPpthfiyhUuEWuUK/view"
    >
      Whitepaper (1.0 revision)
    </a>
    <a
      className="Buttons-element"
      target="_blank"
      href="https://twitter.com/CNBCFastMoney/status/969348370161643521"
    >
      ETC & Callisto on CNBC
    </a>
  </div>
)

export default Buttons
