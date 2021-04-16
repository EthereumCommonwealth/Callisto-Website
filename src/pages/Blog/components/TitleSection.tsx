import { Assets } from 'constants/images'
import styled from 'styled-components'

const TitleSetion = styled.div`
    background-image: url(${Assets.blogmask});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 180px;
    width: 100%;
`

export default TitleSetion;
