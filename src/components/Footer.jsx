import React from 'react'

const Footer = () => (
  <div className="Footer">
    <div className="Footer-content container">
      <div>
        Callisto Network is a Decentralized Project.
        <br/>
        Website content <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">
        Public Domain CC0 License</a>
      </div>
      <div className="Footer-icons-container">
        <a href="https://github.com/EthereumCommonwealth" target="_blank">
          <i className="fab fa-github" />
        </a>
        <a href="https://twitter.com/CallistoSupport" target="_blank">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://t.me/CallistoNet" target="_blank">
          <i className="fab fa-telegram" />
        </a>
        <a href="https://www.facebook.com/callistonetwork/" target="_blank">
          <i className="fab fa-facebook" />
        </a>
        <a href="http://reddit.com/r/CallistoCrypto" target="_blank">
          <i className="fab fa-reddit" />
        </a>
        <a href="https://discord.gg/fGdPSA2" target="_blank">
          <i className="fab fa-discord" />
        </a>
      </div>
    </div>
  </div>
)

export default Footer
