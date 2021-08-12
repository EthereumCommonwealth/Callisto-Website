import React from 'react'
import Spacer from 'components/Spacer';
import { Theme } from 'constants/theme';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    white-space: pre-line;
`;

const StyledText = styled.p<{color: string}>`
    font-size: 14px;
    font-family: ${Theme.fonts.text};
    line-height: 18px;
    text-align: center;
    color: ${({color}) => color};
`;
const StyledTextBold = styled.p<{color: string}>`
    font-size: 14px;
    font-family: ${Theme.fonts.textBold};
    line-height: 18px;
    text-align: center;
    color: ${({color}) => color};
`;

const Con = styled.div`
    width: 150px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    background-color: ${Theme.colors.primary};
    :hover {
        background-color: #78d9b0;
        cursor: pointer;
    }
`;
const AddNetworkSection: React.FC = () => {

    // function handleAddNetoworkToMetamask(e) {
    //     console.log("===== add network to metamask ::")
    // }

    return (
        <Container>
            <StyledText color="#f70556">If you have not add Callisto network in your MetaMask yet, please add network</StyledText>
            <Spacer height="10px" />
            <Con >
                <StyledTextBold color={Theme.colors.secondary}>Add network</StyledTextBold>
            </Con>
        </Container>
    )
}

export default AddNetworkSection;
