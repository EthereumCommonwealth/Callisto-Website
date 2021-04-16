import { Assets } from 'constants/images'
import styled from 'styled-components'

const TopSetion = styled.div`
    background-image: url(${Assets.blogback});
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0,0,0,.7);
`

export default TopSetion;
