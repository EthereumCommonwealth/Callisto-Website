import React from 'react'
import { Element } from 'react-scroll'

const BlockExplorers = () => (
  <Element className="BlockExplorers" name="BlockExplorers">
    <div className="container">
      <h2 className="BlockExplorers-title">
        Block Explorers
      </h2>
      <div className="BlockExplorers-list">
        <a
          className="BlockExplorers-list-element"
          target="_blank"
          href=" https://explorer.callisto.network/"
        >
           explorer.callisto.network
        </a>
        <a
          className="BlockExplorers-list-element"
          target="_blank"
          href="https://callistoexplorer.com/home"
        >
          callistoexplorer.com
        </a>
        <a
          className="BlockExplorers-list-element"
          target="_blank"
          href="https://cloexplorer.org/"
        >
          cloexplorer.org
        </a>
      </div>
    </div>
  </Element>
)

export default BlockExplorers
