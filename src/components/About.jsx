import React from 'react'
import { Element } from 'react-scroll'

const About = () => (
  <Element className="About container" name="About">
    <div className="About-container">
      <div className="About-element">
        <i className="fas fa-lock About-element-icon" />
        <h4 className="About-element-title">
          Smart-contract ecosystem security
        </h4>
        <div className="About-element-description">
          <p className="pharagraph">
            Callisto will address this problem by introducing an
            "Official Smart-contract auditing department of Ethereum
            Commonwealth". Smart-contract auditors will be paid at protocol
            level (analogue of smart-contract treasury), thus auditing will
            be completely free for smart-contract developers.
          </p>
        </div>
      </div>
      <div className="About-element">
        <i className="fas fa-cubes About-element-icon" />
        <h4 className="About-element-title">
          Scalability of ETC & CLO networks
        </h4>
        <div className="About-element-description">
          <p className="pharagraph">
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
            </a>). It is planned to improve the scalability
            of ETC & CLO with already-existing mechanics that prove to be
            effective.
          </p>
        </div>
      </div>
      <div className="About-element">
        <i className="fas fa-code About-element-icon" />
        <h4 className="About-element-title">
          New protocol-level enhancements
        </h4>
        <div className="About-element-description">
          <p className="pharagraph">
            ETC community is very conservative. Some of the ETC improvements
            will come out at CLO network regardless of whether it will be
            accepted by two other development teams of ETC or not.
            For example: cold staking protocol and on-chain governance system.
          </p>
        </div>
      </div>
    </div>
  </Element>
)

export default About
