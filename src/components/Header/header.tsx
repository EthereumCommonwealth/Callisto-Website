
import { Theme } from 'constants/theme';
import React from 'react'
import styled from 'styled-components'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import './header.scss';

// const Header = (props: headerProps) => {
const Header = (props: { home: boolean}) => {
    const { home } = props;
    return (
      
        <Navbar collapseOnSelect expand="md" className={home? "navbar": "header"} variant="light" sticky="top" >
            <Navbar.Brand href="/">
                <Logo>
                    <LogoImg src={"https://callisto.network/wp-content/uploads/2020/07/cropped-CLO_small_logo_Dark.png"} className="App-logo" alt="logo" />
                    {/* <LogoText>Callisto</LogoText> */}
                </Logo>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Li>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://github.com/EthereumCommonwealth/Auditing/" target="_blank">Smart Contract Audit</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://callisto.network/smart-contract-migration/">Smart Contract Migration</NavDropdown.Item>
                        </NavDropdown>
                    </Li>

                    <Li>
                        <NavDropdown title="Ecosystem" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://callisto.network/wallets/">Wallets</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://callisto.network/cold-staking/">Cold Staking</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://callisto.network/total-eclipse/">Total Eclipse</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://callisto.network/cryptobot/">CryptoBot</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://callisto.network/on-chain-governance/">On-Chain Governance</NavDropdown.Item>
                        </NavDropdown>
                    </Li>
                    <Li>
                        <Nav.Link href="/blog" >Blog</Nav.Link>
                    </Li>
                    <Li>
                        <Nav.Link href="https://callisto.network/cryptocurrency/">Cyptocurrency</Nav.Link>
                    </Li>
                    <Li1>
                        <Nav.Link href="/get an audit">Get an audit</Nav.Link>
                    </Li1>
                    <Li2>
                        <Nav.Link href="/get an audit">Audit</Nav.Link>
                    </Li2>
                    
                    <Nav.Link href="https://drive.google.com/file/d/1XvP-mKbT_wbrPb7p7hlLRhb7G6V5cqXV/view" target="_blank">
                        <Whitepaper>Whitepaper</Whitepaper>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Logo = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    @media(max-width: 768px) {
    }
`;

const LogoImg = styled.img`
    // width: 68px;
    // height: 80px;
`;

const LogoText = styled.div`   
    font-family: Sunflower;
    font-weight: normal;
    padding-left: 15px;
    font-size: 24px;
`;

const Li = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
`;
const Li1 = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
    @media (max-width: 1020px) {
        display: none;
    }
    @media (max-width: 766px) {
        display: flex;
    }
`;

const Li2 = styled.div`
    display: none;
    @media (max-width: 1020px) {
        display: flex;
        align-items: center;
        color: #ffffff;
        font-size: 18px;
    }
    @media (max-width: 766px) {
        display: none;
    }
`;

const Whitepaper = styled.div`
    flex: 0 0 auto;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    color: black;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    display: flex;
    font-size: 18px;
    height: 40px;
    justify-content: center;
    line-height: 16px;
    margin: 0 0 0 1.125rem ;
    text-decoration: none;
    border: 2px solid black;
    padding: 0 30px;
    white-space: nowrap;
    @media ( max-width: 956px ) {
        padding: 0 10px;
        font-size: 16px;
    }
    @media (max-width: 410px) {
        display: flex;
        margin: 0px;
    }
`;
export default Header;