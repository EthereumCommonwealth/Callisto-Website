import { Theme } from 'constants/theme';
import styled from 'styled-components'

const CenterText = styled.p<{ color: string, fontweight: string, fontsize: string, line: string}>`
    font-weight: ${({fontweight}) => fontweight};
    color:${({color}) => color};
    font-family: ${Theme.fonts.body};
    font-size: ${({fontsize}) => fontsize};
    line-height: ${({line}) => line};
    letter-spacing: .2px;
    @media (max-width: 768px) {
        text-align: center;
    }
`

export default CenterText;
