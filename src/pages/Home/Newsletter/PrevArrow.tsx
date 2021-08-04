import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
    display: flex;
    position: absolute;
    bottom: 130px;
    left: 75%;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid #FFF;
    z-index: 2;
    
    @media screen and (max-width: 1100px) {
        left: 80%;
        bottom: 160px;
    }
    @media screen and (max-width: 900px) {
        left: 85%;
        bottom: 160px;
    }
    @media screen and (max-width: 768px) {
        left: 10%;
        bottom: 20px;
    }
    @media (max-width: 420px) {
        left: 10%;
        bottom: 80px;
    }
`;
const NextArrow = (props) => {
    const { onClick, className, style } = props;
    return (
        <Container onClick={onClick} >
            <FaArrowLeft color="#FFF" size={30} />
        </Container>
    )
}

export default NextArrow;