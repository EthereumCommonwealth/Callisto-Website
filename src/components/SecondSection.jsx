import React, { Component } from 'react'
import NetworkDescription from './NetworkDescription.jsx'
import Airdrop from './Airdrop.jsx'
import Buttons from './Buttons.jsx'
import Fundamentals from './Fundamentals.jsx'
import Exchanges from './Exchanges.jsx'
import Wallets from './Wallets.jsx'

class SecondSection extends Component {

  render() {
    return (
      <div className="SecondSection-main" id="particles-container">
        <div className="SecondSection container">
          <NetworkDescription />
          <Airdrop />
          <Buttons />
          <Fundamentals />
          <Exchanges />
          <Wallets />
        </div>
      </div>
    )
  }
}

export default SecondSection
