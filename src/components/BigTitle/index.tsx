import { Theme } from 'constants/theme';
import styled from 'styled-components'

const BigTitle = styled.h1<{ fontWeight: string, color: string}>`
    font-weight: ${({fontWeight}) => fontWeight};
    font-family: ${Theme.fonts.title};
    font-size: 61px;
    color: ${({color}) => color};
    @media (max-width: 596px) {
        font-size: 50px;
    }
`

export default BigTitle;
