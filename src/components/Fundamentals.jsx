import React from 'react'

const Fundamentals = () => (
  <div className="square">
    <h2 className="title">
      Callisto fundamentals
    </h2>
    <ol className="SecondSection-right-ordered">
      <li>Smart-contract ecosystem security</li>
      <li>Scalability of ETC & CLO networks</li>
      <li>New protocol-level enhancements</li>
    </ol>
    <p className="pharagraph">
        1. <strong>Security</strong>:
        The main problem of Ethereum is that even a single mistake in a
        certain smart-contract can lead to disastrous consequences for
        the whole ecosystem. Unfortunately, professional audit of a
        smart-contract is relatively expensive. As a result, many developers
        neglect it and eventually the entire ecosystem is saturated with a
        huge number of insecure contracts. Let me remind <a
          className="anchor"
          target="_blank"
          href="https://en.wikipedia.org/wiki/The_DAO_(organization)"
        >
          TheDAO hack,
        </a> <a
          className="anchor"
          target="_blank"
          href="https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7"
        >
          Parity Multisig first hack,
        </a> <a
          className="anchor"
          target="_blank"
          href="https://medium.com/chain-cloud-company-blog/parity-multisig-hack-again-b46771eaa838"
        >
          Parity Multisig second hack,
        </a> <a
          className="anchor"
          target="_blank"
          href="https://gist.github.com/Dexaran/ddb3e89fe64bf2e06ed15fbd5679bd20"
        >
          ERC20 token standard insecurity (still not fixed).
        </a>
    </p>
    <p className="pharagraph">
      Callisto will address this problem by introducing an
      "Official Smart-contract auditing department of Ethereum
      Commonwealth". Smart-contract auditors will be paid at protocol
      level (analogue of smart-contract treasury), thus auditing will
      be completely free for smart-contract developers. <strong>Callisto &
      Ethereum Classic will be the only platform with built-in
      security enhancements mechanism.</strong>
    </p>
    <br/><br/>
    <p className="pharagraph">
      2. <strong>Scalability of ETC & CLO</strong>:
      We do not plan to invent our own mechanisms of transactions
      relaying and sidechain implementations. We are looking forwards
      at crosschain-relation mechanisms of 3d generation blockchains
      (such as <a
        className="anchor"
        target="_blank"
        href="https://medium.com/chain-cloud-company-blog/parity-multisig-hack-again-b46771eaa838"
      >
        EOS.io
      </a> and <a
        className="anchor"
        target="_blank"
        href="https://aion.network/"
      >
        AION
      </a>).It is planned to improve the scalability
      of ETC & CLO with already-existing mechanics that prove to be
      effective. EOS and AION are still in development, so we are
      currently in researching stage.
    </p>
    <br/><br/>
    <p className="pharagraph">
      3. <strong>Protocol-level enhancements</strong>:
        ETC community is very conservative. Some of the ETC improvements
        will come out at CLO network regardless of whether it will be
        accepted by two other development teams of ETC or not.
        For example: cold staking protocol and on-chain governance system.
        <br /><br />
        Ethereum Commonwealth will continue ETC & CLO development.
        <br /><br />
        <a
          className="anchor center-anchor"
          target="_blank"
          href="https://drive.google.com/file/d/1DZlyuzWawKAJutyqgPpthfiyhUuEWuUK/view"
        >
          Read the whitepaper for more information.
        </a>
    </p>
  </div>
)

export default Fundamentals
