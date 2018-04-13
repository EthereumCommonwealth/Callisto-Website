import React from 'react'
import FirstSection from '../components/FirstSection.jsx'
import Airdrop from '../components/Airdrop.jsx'
import About from '../components/About.jsx'
import MainnetBanner from '../components/MainnetBanner.jsx'
import Exchanges from '../components/Exchanges.jsx'
import Team from '../components/Team.jsx'
import Wallets from '../components/Wallets.jsx'
import PoolSupport from '../components/PoolSupport.jsx'
import Footer from '../components/Footer.jsx'

const IndexPage = () => (
  <div className="MainPage">
    <FirstSection />
    <Airdrop />
    {Date.now() < 1523793600000 ? <MainnetBanner /> : null}
    <About />
    <Exchanges />
    <Team />
    <Wallets />
    <PoolSupport />
    <Footer />
  </div>
)

export default IndexPage
