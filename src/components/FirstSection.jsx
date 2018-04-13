import React, { Component } from 'react'
import Header from './Header.jsx'

class FirstSection extends Component {

  render() {
    return (
      <div className="FirstSection-wrapper">
        <Header />
        <div className="FirstSection">
          <div className="FirstSection-content container">
            <div>
              <h1 className="FirstSection-title">
                 Callisto Network: a Blockchain technology, Cryptocurrency and Smart-Contracts
              </h1>
              <p className="FirstSection-description">
                Callisto Network is a blockchain platform with its own cryptocurrency (CLO)
                that is based on Ethereum protocol, so any Callisto improvements can be applied
                to Ethereum Classic.
                Callisto is <strong>NOT</strong> a testnet or a hardfork of Ethereum Classic.
                Callisto Network is developed by Ethereum Commonwealth, one of three ETC development teams.

              </p>
              <div className="FirstSection-btns">
                <a
                  className="FirstSection-btns-anchor"
                  href="https://whitepaper.callisto.network/"
                  target="_blank"
                >
                  White Paper
                </a>
              </div>
            </div>
            <div className="FirstSection-form-container">
              <h4 className="FirstSection-form-title">Send me Callisto News</h4>
              <div id="mc_embed_signup">
                <form
                  action="https://network.us18.list-manage.com/subscribe/post?u=dcb90634d3c123520c47ae053&amp;id=6dbdcbff40"
                  method="post" id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="FirstSection-form validate"
                  target="_blank"
                >
                  <div className="mc-field-group">
                    <input
                      className="FirstSection-form-input required email"
                      type="email"
                      placeholder="Your email..."
                      name="EMAIL"
                      id="mce-EMAIL"
                      required
                    />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                    <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                  </div>
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="b_dcb90634d3c123520c47ae053_6dbdcbff40" tabIndex="-1" value="" />
                  </div>
                  <div>
                    <input type="submit" className="FirstSection-form-submit" name="subscribe" id="mc-embedded-subscribe"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FirstSection
