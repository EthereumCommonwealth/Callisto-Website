import { Theme } from 'constants/theme';
import styled from 'styled-components';

const NavMiddlebar = () => {
    const menuData = [
        {menu: 'Smart Contract Migration', href: '#smart-contract-migration'},
        {menu: 'Ecosystem', href: '#ecosystem'},
        {menu: 'Passive Income', href: '#passive-income'},
        {menu: 'Governance', href: '#governance'},
        {menu: 'CryptoBot', href: '#cryptobot'},
    ]
    return (
        <MenuArea>
            {menuData.map((item) => (
                <Li key={item.menu}>
                    <a href={item.href} >{item.menu}</a>
                </Li>
            ))}
        </MenuArea>
    )
}
const MenuArea = styled.div`
    display: flex; 
    width: 100%;
    justify-content: flex-end;
    
    @media (max-width: 1300px) {
        flex-direction: column;
        padding-left: 50px;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const Li = styled.li`
    list-style: none;
    align-itmems:center;
    vertical-align: center;
    margin: 5px 10px;
    a {
        font-family: ${Theme.fonts.body};
        font-size: 24px;
        font-weight: 500;
        text-decoration: none;
        padding-bottom: 2px;
        border-bottom: solid 2px #C9D5D1;
        &:hover {
            color: #46CA91;
            border-bottom: solid 2px #46CA91;
        }
    }
    
`;

export default NavMiddlebar;
