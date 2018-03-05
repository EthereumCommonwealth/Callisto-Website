import React from 'react'

const Airdrop = () => (
  <div className="square">
    <h2 className="title">
      Callisto Airdrop
    </h2>
    <p className="pharagraph">
      A snapshot of Ethereum Classic blockchain will be made at block
      5500000 of ETC network. Each address that had ETC at its balance
      at the moment of block 5500000 will receive CLO in 1:1 ratio.
      Callisto mainnet will NOT be launched immediately after the balances
      snapshot. Callisto Testnet 2.0 will be launched after the snapshot
      of ETC balances.
      <br /><br />
      It is strongly recommended to withdraw ETC from exchanges for
      guaranteed CLO receiving. <a
        className="anchor"
        target="_blank"
        href="https://ethereumproject.github.io/etherwallet/"
      >
        ClassicEtherWallet
      </a> will support Callisto network as soon as the
      mainnet will be launched.
      <br /><br />
      Technically, every exchange will receive CLO at the moment of
      mainnet launch. Make sure that there are two options for
      exchanges: (1) support Callisto and grant to users or (2) hold
      it for themselves.
    </p>
  </div>
)

export default Airdrop
