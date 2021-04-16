import styled from 'styled-components'

const ShadowView = styled.div<{bk: string, padding: string, shadow: string, margin: string}>`
    display: flex;
    flex-direction: column;
    background-color: ${({bk})=>bk};
    padding: ${({padding})=>padding};
    margin-top: ${({margin})=>margin};
    width: 100%;
    border: none;
    box-shadow: ${({shadow})=>shadow};
`
export default ShadowView;
