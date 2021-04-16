import { Theme } from 'constants/theme';
import styled from 'styled-components'

const SubTitle = styled.div<{ color: string, fontWeight: string }>`
    font-weight: ${({fontWeight}) => fontWeight};
    color: ${({color}) => color};
    font-family: ${Theme.fonts.title};
    font-size: 21px;
    padding: 10px;
    line-height: 26.25px;
`

export default SubTitle;
