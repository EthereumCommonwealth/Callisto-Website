
import { Assets } from 'constants/images';
import styled from 'styled-components';
import LeftPane from './components/LeftPane';
import MenuPane from './components/MenuPane';

const NavMiddlebar = () => {
    
    return (
        <Container>
            <LeftPane />
            {/* <MenuPane /> */}
        </Container>
    )
}
const Container = styled.div`
    // background-image: linear-gradient(180deg, #DEF0EC 0%, rgba(9, 202, 90, 0.08) 0.01%, rgba(222, 240, 236, 0) 100%);
    background-image: url("${Assets.back4}");
    // background-color: black;
    padding: 60px 8%;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content:space-between;
    align-items: center;
    vertical-align: middle;
    
    @media(max-width: 768px) {
        justify-content: center;
    }
    @media(max-width: 490px) {
        padding: 40px 20px;
    }
`;

export default NavMiddlebar;
