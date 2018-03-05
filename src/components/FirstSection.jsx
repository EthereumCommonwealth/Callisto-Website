import React, { Component } from 'react'
import logo from '../images/clo-logo.png'
import particlesConfig from '../utils/particles.json'

class FirstSection extends Component {

  componentDidMount() {
    const particlesJS = require('particles.js')
    window.particlesJS("particles-js", particlesConfig)
  }

  render() {
    return (
      <div id="particles-js" className="FirstSection">
        <figure className="FirstSection-figure">
          <img
            src={logo}
            alt="Callisto"
            className="FirstSection-img"
          />
        </figure>
        <h1 className="FirstSection-title">
          Callisto Network
        </h1>
        <p className="FirstSection-description">
          This is a temporary Callisto.Network web page. The main goal of this
          page is to represent links and useful info about the stage of
          Callisto.Network development until the official launch of Callisto Mainnet.
        </p>
      </div>
    )
  }
}

export default FirstSection
