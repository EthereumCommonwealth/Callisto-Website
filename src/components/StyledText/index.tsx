import { Theme } from 'constants/theme';
import styled from 'styled-components'

const StyledText = styled.p<{ color: string, fontweight: string, fontsize: string}>`
    font-weight: ${({fontweight}) => fontweight};
    color:${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-size: ${({fontsize}) => fontsize};
    line-height: 22px;
    letter-spacing: 0.36px;
`

export default StyledText;
