import React from 'react'
import { Element } from 'react-scroll'

const Exchanges = () => (
  <Element className="Exchanges" name="Exchanges">
    <div className="container">
      <h2 className="Exchanges-title">
        Exchanges
      </h2>
      <p className="Exchanges-subtitle">
        We are waiting for exchanges to respond. We have already warned most exchanges <a
          className="anchor"
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/16tCm8tcImvSoTDQIHly72rCUqzHVrRuJtjSTKUpxJdA/edit#gid=0"
        >
          (see the list)
        </a>
      </p>
      <div className="Exchanges-list">
        <div className="Exchanges-list-element">
          <span>Yobit.net</span>
          <a
            className="Exchanges-list-element-anchor"
            target="_blank"
            href="https://medium.com/@YobitExchange/yobit-is-ready-for-etc-fork-4ecdcbafc7f1"
          />
        </div>
        <div className="Exchanges-list-element">
          <span>ChangeNow</span>
          <a
            className="Exchanges-list-element-anchor"
            target="_blank"
            href="https://twitter.com/ChangeNOW_io/status/969595592652525569"
          />
        </div>
        <div className="Exchanges-list-element">
          <span>HitBTC</span>
          <a
            className="Exchanges-list-element-anchor"
            target="_blank"
            href="https://blog.hitbtc.com/hitbtc-to-support-ethereum-classic-fork-callisto/"
          />
        </div>
        <div className="Exchanges-list-element">
          <span>KuCoin</span>
          <a
            className="Exchanges-list-element-anchor"
            target="_blank"
            href="https://twitter.com/kucoincom/status/970988392446967808?lang=en"
          />
        </div>
        <div className="Exchanges-list-element">
          <span>CoinOne</span>
          <a
            className="Exchanges-list-element-anchor"
            target="_blank"
            href="https://twitter.com/callistosupport/status/970904640878448640?lang=en"
          />
        </div>
        <div className="Exchanges-list-element">
          <span>CoinNest</span>
          <a
            className="Exchanges-list-element-anchor"
            target="_blank"
            href="https://twitter.com/callistosupport/status/970545484006940676"
          />
        </div>
      </div>
    </div>
  </Element>
)

export default Exchanges
