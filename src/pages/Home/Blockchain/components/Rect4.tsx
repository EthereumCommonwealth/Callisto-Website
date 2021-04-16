import styled from 'styled-components';

const Rect4 = styled.div`
    min-width: 430px;
    width: 430px;
    max-height: 201px;
    padding: 50px;
    background: #FFFFFF;
    border: 5px solid #EBEBEB;
    box-sizing: border-box;
    margin-top: 180px;
    margin-left: 100px;
    @media (max-width: 1200px) {
        min-width: 350px;
        width: 350px;
        margin-top: 180px;
    }
    @media (max-width: 1024px) {
        min-width: 350px;
        width: 350px;
        margin-top: 30px;
        justify-content: flex-end;
        margin-left: auto;
    }
    @media (max-width: 768px) {
        min-width: 250px;
        width: 290px;
        padding: 10px;
    }
    @media (max-width: 400px) {
        min-width: 200px;
        width: 250px;
    }
`;
export default Rect4;
