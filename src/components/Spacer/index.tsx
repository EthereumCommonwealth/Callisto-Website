import styled from 'styled-components'

const Spacer = styled.div<{height: string}>`
  height: ${({height}) => height};
`
export default Spacer
