import styled from 'styled-components'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './header.scss';

// const Header = (props: headerProps) => {
const Header = (props: { home: boolean}) => {
    const { home } = props;
    return (
      
        <Navbar collapseOnSelect expand="md" className={home? "navbar": "header"} variant="light" sticky="top" >
            <Navbar.Brand href="/">
                <Logo>
                    <LogoImg src={"https://callisto.network/wp-content/uploads/2020/07/cropped-CLO_small_logo_Dark.png"} className="App-logo" alt="logo" />
                </Logo>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto custom-margin">
                    <Li>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://callisto.network/smart-contract-audit/" target="_blank">Smart Contract Audit</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://callisto.network/smart-contract-migration/" target="_blank">Smart Contract Migration</NavDropdown.Item>
                        </NavDropdown>
                    </Li>

                    <Li>
                        <NavDropdown title="Ecosystem" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://callisto.network/wallets/" target="_blank">Wallets</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://callisto.network/cold-staking/" target="_blank">Cold Staking</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://callisto.network/total-eclipse/" target="_blank">Total Eclipse</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://callisto.network/cryptobot/" target="_blank">CryptoBot</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://callisto.network/on-chain-governance/" target="_blank">On-Chain Governance</NavDropdown.Item>
                        </NavDropdown>
                    </Li>
                    <Li>
                        <Nav.Link href="https://callisto.network/blog/" target="_blank" >Blog</Nav.Link>
                    </Li>
                    <Li>
                        <Nav.Link href="https://callisto.network/cryptocurrency/" target="_blank">Cyptocurrency</Nav.Link>
                    </Li>
                    <Li>
                        <Nav.Link href="https://github.com/EthereumCommonwealth/Auditing/" target="_blank">Audit</Nav.Link>
                    </Li>
                    <div className="nav-bar1">
                        <Nav.Link href="https://drive.google.com/file/d/1XvP-mKbT_wbrPb7p7hlLRhb7G6V5cqXV/view" target="_blank">
                            <Whitepaper1>WHITEPAPER</Whitepaper1>
                        </Nav.Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
            <div  className="nav-bar">
                <Nav.Link href="https://drive.google.com/file/d/1XvP-mKbT_wbrPb7p7hlLRhb7G6V5cqXV/view" target="_blank">
                    <Whitepaper>WHITEPAPER</Whitepaper>
                </Nav.Link>
            </div>
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

const Li = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
    padding: 0 20px;
    @media (max-width: 1300px) {
        padding: 0 10px;
    }
    @media (max-width: 1160px) {
        padding: 0 5px;
    }
    @media (max-width: 1100px) {
        padding: 0;
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
    border: 2px solid #34C88A;
    border-radius:20px;
    padding: 0 30px;
    white-space: nowrap;
    @media ( max-width: 1100px ) {
        padding: 0 10px;
        font-size: 16px;
    }
    @media ( max-width: 1000px ) {
        display: none;
    }
`;

const Whitepaper1 = styled.div`
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
    display: none;
    font-size: 18px;
    height: 40px;
    justify-content: center;
    line-height: 16px;
    margin: 0 0 0 1.125rem ;
    text-decoration: none;
    border: 2px solid #34C88A;
    border-radius:20px;
    padding: 0 30px;
    white-space: nowrap;
    @media ( max-width: 1000px ) {
        display: flex;
        padding: 0 10px;
        font-size: 16px;
    }
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