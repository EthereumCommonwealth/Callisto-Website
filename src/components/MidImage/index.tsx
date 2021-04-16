import { Assets } from 'constants/images'
import styled from 'styled-components'

const MidImage = styled.div<{ top: string }>`
    background-image: url(${Assets.polyimg});
    position: absolute;
    top: ${({top}) => top};
    right: 0px;
    height: 390px;
    width: 150px;
    background-repeat: no-repeat;
    background-size: contain;
    @media (max-width: 596px) {
        height: 190px;
        width: 70px;
        top: 90%;
    }
`

export default MidImage;
