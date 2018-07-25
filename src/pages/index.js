import React from 'react'
import FirstSection from '../components/FirstSection.jsx'
import Airdrop from '../components/Airdrop.jsx'
import About from '../components/About.jsx'
import MainnetBanner from '../components/MainnetBanner.jsx'
import Exchanges from '../components/Exchanges.jsx'
import Team from '../components/Team.jsx'
import Wallets from '../components/Wallets.jsx'
import PoolSupport from '../components/PoolSupport.jsx'
import BlockExplorers from '../components/BlockExplorers.jsx'
import Partners from '../components/Partners.jsx'
import ClientsDownloads from '../components/ClientsDownloads.jsx'
import FinantialReportBanner from '../components/FinantialReportBanner.jsx'
import Footer from '../components/Footer.jsx'

const IndexPage = () => (
  <div className="MainPage">
    <FirstSection />
    <FinantialReportBanner />
    <Airdrop />
    {Date.now() < 1523793600000 ? <MainnetBanner /> : null}
    <About />
    <ClientsDownloads />
    <Exchanges />
    <Team />
    <Wallets />
    <PoolSupport />
    <BlockExplorers />
    <Partners />
    <Footer />
  </div>
)

export default IndexPage
