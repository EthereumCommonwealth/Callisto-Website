import styled from 'styled-components'

const Line = styled.div<{ color: string}>`
    height: 2px;
    background-color:${({color}) => color};
    width: 100%;
    opacity: .2;
`

export default Line;
