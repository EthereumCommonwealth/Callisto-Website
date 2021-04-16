import { Theme } from 'constants/theme';
import styled from 'styled-components'

const StyledText = styled.p<{ color: string, fontweight: string, fontsize: string}>`
    font-weight: ${({fontweight}) => fontweight};
    color:${({color}) => color};
    font-family: ${Theme.fonts.body};
    font-size: ${({fontsize}) => fontsize};
    line-height: 26px;
    letter-spacing: .2px;
`

export default StyledText;
