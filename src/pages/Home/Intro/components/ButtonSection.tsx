import StyledText from 'components/StyledText';
import { Theme } from 'constants/theme';
import styled from 'styled-components';

const ButtonSection = () => {
    return (
        <ButtonArea>
            <GetButton>
                <StyledText color={Theme.colors.white} fontweight={"700"} fontsize={"18px"}>Get $CLO</StyledText>
            </GetButton>
            <StakeButton>
                <StyledText color={Theme.colors.white} fontweight={"700"} fontsize={"18px"}>Stake Now</StyledText>
            </StakeButton>
        </ButtonArea>
    )
}

const ButtonArea = styled.div`
    display: flex;
    margin-left: 8%;
    margin-top: 30px;
    z-index: 1;
    @media (max-width: 768px) {
        margin-left:0px;
        display: block;
        width: 100%;
        padding: 0px 20px;
    }
`;

const GetButton = styled.button`
    background-color: ${Theme.colors.primary};
    padding: 5px 50px;
    border: none;
    margin-right: 15px;
    font-size: 18px;
    @media (max-width: 596px) {
        width: 100%;
    }
`;

const StakeButton = styled.button`
    background-color: rgba(0, 0, 0, .1);
    border: 1px solid white;
    padding: 5px 50px;
    margin-right: 15px;
    font-size: 18px;
    @media (max-width: 596px) {
        margin-top: 15px;
        width: 100%;
    }
`;

export default ButtonSection;
