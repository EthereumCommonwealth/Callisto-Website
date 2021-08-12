import Spacer from 'components/Spacer';
import { Assets } from 'constants/images';
import { Theme } from 'constants/theme';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background-color: #FFFFFF;
    padding: 40px 20px;
    border-radius: 20px;
    width: 25%;
    max-height: 550px;
`;

const Title = styled.p`
    font-size: 20px;
    font-family: ${Theme.fonts.medium};
    line-height: 30px;
    color: ${Theme.colors.secondary};
`;

const StyledText = styled.p`
    font-size: 14px;
    font-family: ${Theme.fonts.text};
    line-height: 18px;
    .color: ${Theme.colors.secondary};
`;

const StyledLink = styled.a`
    font-size: 16px;
    font-family: ${Theme.fonts.medium};
    line-height: 18px;
    color: ${Theme.colors.primary};
`;

const StyledImg = styled.img`
    margin: 50px 0;
`;
const Bridge: React.FC = () => {

    return (
        <Container>
            <Title>Bridge</Title>
            <Spacer height="20px" />
            <StyledText>Allow user to transfer tokens from one chain to another.</StyledText>
            <Spacer height="20px" />
            <StyledLink>View Assets Lists</StyledLink>
            <Spacer height="10px" />
            <StyledLink>User Guide</StyledLink>
            <Spacer height="40px" />
            <StyledImg src={Assets.back} />
        </Container>
    )
}

export default Bridge;
