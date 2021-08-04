import StyledText from 'components/StyledText';
import { getclo_url, stake_url } from 'constants/config';
import { Theme } from 'constants/theme';
import styled from 'styled-components';

const ButtonSection = () => {

    return (
        <ButtonArea>
            <GetButton href={getclo_url} target="_blank">
                <StyledText color={Theme.colors.white} fontweight={"700"} fontsize={"18px"}>{`GET CLO`}</StyledText>
            </GetButton>
            <StakeButton href={stake_url} target="_blank">
                <StyledText color={Theme.colors.secondary} fontweight={"700"} fontsize={"18px"}>{`STAKE`}</StyledText>
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
    text-decoration: none !important;
    padding: 5px 50px;
    width: 180px;
    margin-right: 15px;
    font-size: 18px;
    padding-top: 7px;
    text-align: center;
    border: 2px solid ${Theme.colors.primary};
    border-radius: 20px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    @media (max-width: 596px) {
        width: 100%;
    }
`;

const StakeButton = styled.a`
    background-color: ${Theme.colors.white};
    text-decoration: none !important;
    padding: 7px 50px 3px 50px;
    width: 180px;
    margin-right: 15px;
    font-size: 18px;
    text-align: center;
    border: 1px solid ${Theme.colors.primary};
    border-radius: 20px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    @media (max-width: 596px) {
        margin-top: 15px;
        width: 100%;
    }
`;

export default ButtonSection;
