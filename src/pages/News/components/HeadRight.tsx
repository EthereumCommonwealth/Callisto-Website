import styled from 'styled-components';

const HeadRight = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: flex-end;
    @media (max-width: 596px) {
        width: 100%;
        justify-content: center;
        margin-top: 20px;
    }
`
export default HeadRight;
