import styled from 'styled-components';

const NavMiddlebar = () => {
    const menuData = [
        {menu: 'Smart Contract Migration', href: '#'},
        {menu: 'Ecosystem', href: '#'},
        {menu: 'Passive Income', href: '#'},
        {menu: 'Governance', href: '#'},
        {menu: 'CryptoBot', href: '#'},
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
    @media (max-width: 768px) {
        display: none;
    }
`;

const Li = styled.li`
    list-style: none;
    font-family: sunflower;
    font-size: 18px;
    line-height: 30px;
    align-itmems:center;
    vertical-align: center;
    padding: 0 10px;
    text-decoration: underline;
    color: #3D4341;
`;

export default NavMiddlebar;
