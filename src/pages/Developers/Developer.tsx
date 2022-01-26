import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'
import { Theme } from 'constants/theme'
import Spacer from 'components/Spacer'

const Developer = () => {

  return (
    <Container>
      <Header />
      <Content>
        <Title>🌐Callisto Network Testnet Faucet is Live!</Title>
        <Spacer height="30px" />
        <Text>If you are a developer and want to test your project implementation on Callisto Network, you can now get testnet $CLO coins with our faucet!</Text>
        <Spacer height="10px" />
        <Row>
          <Text>➡️ Testnet Faucet:</Text>
          <a href="https://faucet.callisto.network/" target="_blank" rel="noreferrer">
            <Text>https://faucet.callisto.network/</Text>
          </a>
        </Row>
        <Row>
          <Text>➡️ Testnet Explorer:</Text>
          <a href="https://testnet-explorer.callisto.network/" target="_blank" rel="noreferrer">
            <Text>https://testnet-explorer.callisto.network/</Text>
          </a>
        </Row>
        <Spacer height="50px" />
        <Title>📋 Setup MetaMask for Callisto Network Testnet</Title>
        <Spacer height="10px" />
        <Row>
          <Text>- Network Name:</Text>
          <Text>Callisto Network Testnet</Text>
        </Row>
        <Row>
          <Text>- RPC URL:</Text>
          <Text>https://testnet-rpc.callisto.network/</Text>
        </Row>
        <Row>
          <Text>- Chain ID:</Text>
          <Text>20729</Text>
        </Row>
        <Row>
          <Text>- Currency Symbol:</Text>
          <Text>TCLO</Text>
        </Row>
        <Row>
          <Text>- Block Explorer URL:</Text>
          <Text>https://testnet-explorer.callisto.network/</Text>
        </Row>
        <Spacer height="50px" />
        <Title>🚀 Support Callisto Network on Twitter and Get Rewarded</Title>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  min-height: 80vh;
`
const Content = styled.div`
  padding: 50px 10%;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`
const Title = styled.p`
  font-family: ${Theme.fonts.textBold};
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
  letter-spacing: 1px;
  line-height: 35px;
  color: ${Theme.colors.secondary};
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
const Text = styled.p`
  font-family: ${Theme.fonts.textBold};
  font-weight: 300;
  font-size: 20px;
  padding: 10px;
  color: ${Theme.colors.secondary};
  line-height: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`
const Row = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
  }
`
export default Developer
