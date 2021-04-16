import { Theme } from 'constants/theme';
import styled from 'styled-components'

const GradientLine = styled.div<{ color: string}>`
    font-weight: 600;
    color:${({color}) => color};
    font-family: ${Theme.fonts.title};
    font-size: 21px;
    padding: 10px 0px 10px 10px;
`

export default GradientLine;
