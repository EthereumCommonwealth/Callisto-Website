import { Theme } from 'constants/theme';
import styled from 'styled-components';

const TitleBar = styled.div`
    display: flex;
    margin-left: 8%;
    align-items: flex-end;
    @media (max-width: 768px) {
        margin-left: 20px;
        flex-direction: column;
        align-items: flex-start;
    }

`;

const Title = styled.div`
    display: flex;
`;

const Titletext = styled.p`
    font-size: 45px;
    color: ${Theme.colors.secondary};
    font-family: ${Theme.fonts.textBold};
    font-weight: 300;
    padding-top: 10px;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;
const Titletext2 = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-weight: bold;
    font-size: 45px;
    color: ${Theme.colors.primary};
    padding-top: 10px;
    padding-left: 10px;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

const TsubArea = styled.div`
    padding-left: 15px;
    padding-right: 8%;
    @media(max-width: 768px) {
        padding-right: 20px;
    }
`;

const Tsubtext = styled.p`
    font-family: ${Theme.fonts.body};
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 20px;
    color: ${Theme.colors.secondary};
    padding: 2px 10px;
    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
        margin-top: 10px;
    }
`;

const GradBar = styled.div`
    height: 4px;
    width: 100%;
    border-radius: 2px;
    background: ${Theme.colors.primary};
`;

const TitleSection = () => {

    return (
        <TitleBar>
            <div>
                <Title>
                    <Titletext>Key Features</Titletext>
                </Title>
                <Title>
                    <Titletext>of</Titletext>
                    <Titletext2>Callisto Network</Titletext2>
                </Title>
            </div>
            <TsubArea>
                <Tsubtext>Decentralized Blockchain Ecosystem</Tsubtext>
                <GradBar></GradBar>
            </TsubArea>
        </TitleBar>
    )
}

export default TitleSection;