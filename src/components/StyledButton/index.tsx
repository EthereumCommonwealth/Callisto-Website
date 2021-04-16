
import styled from 'styled-components'
const StyledButton = styled.button<{bk: string, shadow: string}>`
    background: ${({bk})=>bk};
    border: none;
    padding: 5px 50px;
    margin-right: 15px;
    box-shadow: ${({shadow})=>shadow};
`;
export default StyledButton;