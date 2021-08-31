import React from 'react'
import StyledText from 'components/StyledText';
import { GETCLO_URL, STAKE_URL } from 'constants/config';
import { Theme } from 'constants/theme';
import styled from 'styled-components';

const ButtonSection = () => {

    return (
        <ButtonArea>
            <GetButton href={GETCLO_URL} target="_blank">
                <StyledText color={Theme.colors.white} fontweight="700" fontsize="18px">GET CLO</StyledText>
            </GetButton>
            <StakeButton href={STAKE_URL} target="_blank">
                <StyledText color={Theme.colors.secondary} fontweight="700" fontsize="18px">STAKE</StyledText>
            </StakeButton>
            <GetButton href="https://callistobridge.netlify.app/" target="_blank">
                <StyledText color={Theme.colors.white} fontweight="700" fontsize="18px">BRIDGE</StyledText>
            </GetButton>
        </ButtonArea>
    )
}

const ButtonArea = styled.div`
    display: flex;
    margin-left: 10%;
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
    padding: 18px 36px 20px;
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    font-size: 18px;
    text-align: center;
    border: 2px solid ${Theme.colors.primary};
    border-radius: 30px;
    // box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    @media (max-width: 596px) {
        width: 100%;
    }
`;

const StakeButton = styled.a`
    background-color: ${Theme.colors.white};
    text-decoration: none !important;
    padding: 18px 60px 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin-right: 15px;
    height: 60px;
    text-align: center;
    border: 1px solid ${Theme.colors.primary};
    border-radius: 30px;
    // box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    @media (max-width: 596px) {
        margin: 15px 0;
        width: 100%;
        margin-right: 0px;
    }
`;

export default ButtonSection;
