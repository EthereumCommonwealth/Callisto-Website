import { Theme } from 'constants/theme';
import styled from 'styled-components'

const TextArea = styled.p<{ color: string}>`
    font-weight: 400;
    color:${({color}) => color};
    font-family: ${Theme.fonts.roboto};
    font-size: 16px;
    line-height: 26px;
    letter-spacing: .2px;
    text-align: start;
`

export default TextArea;
