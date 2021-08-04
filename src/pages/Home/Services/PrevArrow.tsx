import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
    display: none;
    position: absolute;
    top: 150px;
    left: 20px;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #FFF;
    z-index: 2;
    
`;
const NextArrow = (props) => {
    const { onClick, className, style } = props;
    return (
        <Container onClick={onClick} >
            <FaArrowLeft color="#FFF" size={15} />
        </Container>
    )
}

export default NextArrow;