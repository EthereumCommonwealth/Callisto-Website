import React from 'react'
import { Element } from 'react-scroll'

const Clients = () => (
  <Element className="Clients" name="Clients">
    <div className="container">
      <h2 className="Clients-title">
        Callisto Client Binaries
      </h2>
      <div className="Clients-list">
        <a
          className="Clients-list-element"
          target="_blank"
          href=" https://github.com/EthereumCommonwealth/go-callisto/releases/download/1.1.0/geth-darwin-amd64"
        >
           MacOS
        </a>
        <a
          className="Clients-list-element"
          target="_blank"
          href="https://github.com/EthereumCommonwealth/go-callisto/releases/download/1.1.0/geth-windows-amd64.exe"
        >
          Windows
        </a>
        <a
          className="Clients-list-element"
          target="_blank"
          href="https://github.com/EthereumCommonwealth/go-callisto/releases/download/1.1.0/geth-linux-amd64"
        >
          Linux
        </a>
      </div>
    </div>
  </Element>
)

export default Clients
