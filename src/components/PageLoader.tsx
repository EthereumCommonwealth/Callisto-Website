import React from 'react'
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <Spinner animation="border" />
    </Wrapper>
  )
}

export default PageLoader
