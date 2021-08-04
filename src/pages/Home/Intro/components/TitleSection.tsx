import { Theme } from 'constants/theme';
import styled from 'styled-components';

const TitleSection = () => {
    return (
        <TitleArea>
            <Title>
                <Titlepre>Callisto</Titlepre>
                <Titleaft>Network</Titleaft>
            </Title>
        </TitleArea>
    )
}

const TitleArea = styled.div`
    width: 1044px;
    margin-top: 150px;
    padding: 10px 0px 10px 8%;
    z-index: 1;
    @media (max-width: 1044px) {
        width: 100%;
        margin-top:  130px;
        padding-right: 8%;
    }
    @media screen and (max-width: 768px) {
        margin-top: 100px;
        padding: 10px 0px 10px 20px;
    }
    @media (max-width: 596px) {
        margin-top: 80px;
    }
    @media (max-width: 320px) {
        margin-top: 50px;
    }
`;

const Title = styled.div`
    display: flex;
    @media (max-width: 596px) {
        display: block;
    }
`;
const Titlepre = styled.h1`
    font-weight: 700;
    font-size: 96px;
    line-height: 120px;
    color: ${Theme.colors.secondary};
    font-family: ${Theme.fonts.textBold};
    padding-right: 20px;
    margin-left: -5px;
    @media (max-width: 1044px) {
        font-size: 80px;
        line-height: 80px;
        margin-left: 0px;
    }
    @media (max-width: 910px) {
        font-size: 70px;
        line-height: 70px;
    }
    @media (max-width: 768px) {
        font-size: 50px;
        line-height: 50px;
    }
`;
const Titleaft = styled.span`
    color: ${Theme.colors.primary};
    font-weight: 700;
    font-size: 96px;
    line-height: 120px;
    font-family: ${Theme.fonts.textBold};
    margin-right: 20px;
    @media (max-width: 1044px) {
        font-size: 80px;
        line-height: 80px;
    }
    @media (max-width: 910px) {
        font-size: 70px;
        line-height: 70px;
    }
    @media (max-width: 768px) {
        font-size: 50px;
        line-height: 50px;
    }
    @media (max-width: 450px) {
        font-size: 60px;
        line-height: 60px;
    }
`;

export default TitleSection;
