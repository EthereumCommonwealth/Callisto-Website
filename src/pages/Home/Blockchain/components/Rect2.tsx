import styled from 'styled-components';


const Rect2 = styled.div`
    min-width: 450px;
    width: 450px;
    padding: 25px 50px;
    background: #FFFFFF;
    border: 5px solid #EBEBEB;
    box-sizing: border-box;
    margin-top: 80px;
    margin-left: 120px;
    display: flex;
    @media (max-width: 1200px) {
        min-width: 350px;
        width: 350px;
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

export default Rect2;
