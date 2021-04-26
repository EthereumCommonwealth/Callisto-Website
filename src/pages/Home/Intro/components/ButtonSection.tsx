import StyledText from 'components/StyledText';
import { getclo_url, stake_url } from 'constants/config';
import { Theme } from 'constants/theme';
import styled from 'styled-components';

const ButtonSection = () => {

    return (
        <ButtonArea>
            <GetButton href={getclo_url} target="_blank">
                <StyledText color={Theme.colors.white} fontweight={"700"} fontsize={"18px"}>{`Get $CLO`}</StyledText>
            </GetButton>
            <StakeButton href={stake_url} target="_blank">
                <StyledText color={"#000"} fontweight={"700"} fontsize={"18px"}>{`Stake Now`}</StyledText>
            </StakeButton>
        </ButtonArea>
    )
}

const ButtonArea = styled.div`
    display: flex;
    margin-left: 8%;
    margin-top: 30px;
    z-index: 1;
    @media (max-width: 596px) {
        flex-direction: column;
        margin-left:0px;
        width: 100%;
        padding: 0px 20px;
    }
`;

const GetButton = styled.a`
    background-color: ${Theme.colors.primary};
    padding: 5px 50px;
    border: none;
    margin-right: 15px;
    font-size: 18px;
    padding-top: 7px;
    text-align: center;
    @media (max-width: 596px) {
        width: 100%;
    }
`;

const StakeButton = styled.a`
    background-color: rgba(0, 0, 0, .1);
    border: 1px solid black;
    padding: 5px 50px;
    margin-right: 15px;
    font-size: 18px;
    text-align: center;
    @media (max-width: 596px) {
        margin-top: 15px;
        width: 100%;
    }
`;

export default ButtonSection;
