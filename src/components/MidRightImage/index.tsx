import { Assets } from 'constants/images'
import styled from 'styled-components'

const MidRightImage = styled.div<{ top: string }>`
    background-image: url(${Assets.polyright});
    position: absolute;
    top: ${({top}) => top};
    left: 0px;
    height: 300px;
    width: 100px;
    background-repeat: no-repeat;
    background-size: contain;
`

export default MidRightImage;
