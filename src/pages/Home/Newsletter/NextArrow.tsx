import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const Container = styled.div`
    display: flex;
    position: absolute;
    bottom: 130px;
    left: calc(75% + 60px);
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid #FFF;
    @media screen and (max-width: 1100px) {
        left: calc(80% + 60px);
        bottom: 160px;
    }
    @media screen and (max-width: 900px) {
        left: calc(85% + 60px);
    }
    @media screen and (max-width: 768px) {
        left: calc(10% + 60px);
        bottom: 20px;
    }
    @media (max-width: 420px) {
        left: 10%;
    }
`;
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <Container onClick={onClick}>
            <FaArrowRight color="#FFF" size={30} />
        </Container>
    )
}

export default NextArrow;