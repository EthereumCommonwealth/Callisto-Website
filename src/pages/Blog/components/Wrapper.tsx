import { Theme } from 'constants/theme';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left: 8%;
    width: 84%;
    background-color: ${Theme.colors.blogback};
    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
        margin-left: 0px;
    }
    @media (max-width: 1200px) {
        margin-left: 3%;
        width: 94%;
    }
`
export const BodyWrapper = styled.div`
    width: 100%;
    background-color: ${Theme.colors.blogback};
    padding-bottom: 20px;
`
export default Wrapper;
