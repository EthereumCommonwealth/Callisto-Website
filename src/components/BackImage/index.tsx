import { Assets } from 'constants/images'
import styled from 'styled-components'

const BackImage = styled.div`
    background-image: url(${Assets.headback});
    height: 200px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`

export default BackImage;