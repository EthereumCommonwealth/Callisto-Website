import { Theme } from 'constants/theme';
import styled from 'styled-components';

const Li = styled.li<{color: string}>`
    flex: 0 0 auto;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    color: #999;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    text-align: center;
    font-weight: 500;
    display: flex;
    font-size: 20px;
    justify-content: center;
    text-decoration: none;
    white-space: nowrap;
    padding: 0px 8% 0px 0px;
    a {
        color: ${({color}) => color};
        font-weight: 900;
        width: auto;
        font-family: ${Theme.fonts.title};
        text-decoration: none;
    }
    @media(max-width: 410px) {
        padding: 0px 20px 0px 10px;
        justify-content: flex-start;
    }
`;

export default Li;
