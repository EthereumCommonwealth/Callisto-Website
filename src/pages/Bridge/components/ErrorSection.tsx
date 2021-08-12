import { Theme } from 'constants/theme';
import styled from 'styled-components';
import { FaExclamationCircle } from 'react-icons/fa';

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: rgba(255, 0, 80, .1);
    border-radius: 10px;
    border: 1px solid #f70556;
    padding: 10px;
    align-items: center;
`;


const StyledText = styled.p<{color: string}>`
    font-size: 14px;
    font-family: ${Theme.fonts.text};
    line-height: 18px;
    color: ${({color}) => color};
    margin-left: 10px;
`;

const ErrorSection = ({ currentStatus }) => {

    return (
        <Container>
            <FaExclamationCircle size={30} color="#f70556" />
            <StyledText color="#f70556">{`You can not swap ${currentStatus.curAsset} token from ${currentStatus.fromNetwork} to ${currentStatus.toNetwork} Network. You must change network of your wallet or choose a different network.`}</StyledText>
        </Container>
    )
}

export default ErrorSection;
