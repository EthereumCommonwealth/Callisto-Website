import styled from 'styled-components';

const Rect3 = styled.div`
    min-width: 380px;
    width: 380px;
    max-height: 243px;
    padding: 25px 50px;
    background: #FFFFFF;
    border: 5px solid #EBEBEB;
    box-sizing: border-box;
    margin-left: 30px;
    margin-top: 30px;
    @media (max-width: 768px) {
        min-width: 290px;
        width: 290px;
        height: auto;
        padding: 20px;
        margin-left: 0px;
    }
`;
export default Rect3;
