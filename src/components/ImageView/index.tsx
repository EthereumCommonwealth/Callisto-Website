
import styled from 'styled-components';

const ImageView = styled.div<{img: string, height: string, width: string}>`
    background-image: ${({img}) => `url(${img})`};
    height: ${({height}) => height};
    width: ${({width}) => width};
    background-repeat: no-repeat;
    background-size: cover;
`

export default ImageView;