import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const Container = styled.div`
    display: none;
    position: absolute;
    top: 150px;
    right: 20px;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #FFF;
`;
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <Container onClick={onClick}>
            <FaArrowRight color="#FFF" size={15} />
        </Container>
    )
}

export default NextArrow;