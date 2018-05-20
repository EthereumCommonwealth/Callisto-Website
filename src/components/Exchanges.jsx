import React from 'react'
import { Element } from 'react-scroll'
import yobit from '../images/yobit-logo.png'
import changenow from '../images/changenow-logo.png'
import hitbtclogo from '../images/hitbtclogo.png'
import kucoinlogo from '../images/kucoin-logo.png'
import coinone from '../images/coinone-logo.png'
import coinnest from '../images/coinnest-logo.png'
import stocksExchange from '../images/logo.png'

const Exchanges = () => (
  <Element className="Exchanges" name="Exchanges">
    <div className="container">
      <h2 className="Exchanges-title">
        Exchanges
      </h2>
      <p className="Exchanges-subtitle">
        We are currently listed for exchange on:
      </p>
      <div className="Exchanges-list">
        <div className="Exchanges-list-element">
          <figure className="Exchanges-list-element-figure is-small">
            <img src={stocksExchange} alt="Stocks Exchange" />
          </figure>
          <a
            className="Exchanges-list-element-anchor"
            target="_blank"
            href="https://stocks.exchange/trade/CLO/BTC"
          />
        </div>
      </div>
      <br />
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
          <figure className="Exchanges-list-element-figure is-small">
            <img src={yobit} alt="Yobit.net" />
          </figure>
          <a
            className="Exchanges-list-element-anchor"
            target="_blank"
            href="https://medium.com/@YobitExchange/yobit-is-ready-for-etc-fork-4ecdcbafc7f1"
          />
        </div>
        <div className="Exchanges-list-element">
          <figure className="Exchanges-list-element-figure is-small">
            <img src={changenow} alt="ChangeNow" />
          </figure>
          <a
            className="Exchanges-list-element-anchor"
            target="_blank"
            href="https://twitter.com/ChangeNOW_io/status/969595592652525569"
          />
        </div>
        <div className="Exchanges-list-element">
          <figure className="Exchanges-list-element-figure">
            <img src={hitbtclogo} alt="HitBTC" />
          </figure>
          <a
            className="Exchanges-list-element-anchor"
            target="_blank"
            href="https://blog.hitbtc.com/hitbtc-to-support-ethereum-classic-fork-callisto/"
          />
        </div>
        <div className="Exchanges-list-element">
          <figure className="Exchanges-list-element-figure is-small">
            <img src={kucoinlogo} alt="Kucoin" />
          </figure>
          <a
            className="Exchanges-list-element-anchor"
            target="_blank"
            href="https://twitter.com/kucoincom/status/970988392446967808?lang=en"
          />
        </div>
        <div className="Exchanges-list-element">
          <figure className="Exchanges-list-element-figure">
            <img src={coinone} alt="CoinOne" />
          </figure>
          <a
            className="Exchanges-list-element-anchor"
            target="_blank"
            href="https://twitter.com/callistosupport/status/970904640878448640?lang=en"
          />
        </div>
        <div className="Exchanges-list-element">
          <figure className="Exchanges-list-element-figure">
            <img src={coinnest} alt="CoinNest" />
          </figure>
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
