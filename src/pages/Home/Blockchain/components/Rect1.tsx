import styled from 'styled-components';

const Rect1 = styled.div`
    min-width: 350px;
    width: 350px;
    max-height: 200px;
    background: #FFFFFF;
    border: 5px solid #48D79A;
    box-sizing: border-box;
    padding: 40px;
    @media (max-width: 768px) {
        min-width: 290px;
        width: 290px;
        padding: 20px;
    }
`;
export default Rect1;
