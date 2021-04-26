import { Theme } from 'constants/theme';
import styled from 'styled-components';

const TitleSection = () => {
    return (
        <TitleArea>
            <Title>
                <Titlepre>Callisto</Titlepre>
                <Titleaft>Network</Titleaft>
                <Titlepre>BaaS</Titlepre>
            </Title>
        </TitleArea>
    )
}

const TitleArea = styled.div`
    width: 1044px;
    // background: linear-gradient(
    //     90deg
    //     ,rgb(3 9 6 / 37%) 0%,rgb(55 106 98 / 16%) 35%,rgb(24 99 47 / 8%) 100%);
    margin-top: 54px;
    padding: 10px 0px 10px 8%;
    z-index: 1;
    @media (max-width: 1044px) {
        // background: linear-gradient(90.1deg, #000000 0.09%, #0C1C1B 99.91%);
        width: 100%;
        margin-top:  60px;
        padding-right: 8%;
    }
    @media (max-width: 768px) {
        padding: 10px 0px 10px 20px;
    }
    @media (max-width: 596px) {
        margin-top: 120px;
    }
    @media (max-width: 375px) {
        margin-top: 50px;
    }
    @media (max-width: 320px) {
        margin-top: 30px;
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
    color: black;
    font-family: ${Theme.fonts.body};
    padding-right: 20px;
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
const Titleaft = styled.span`
    color: green;
    font-weight: 700;
    font-size: 96px;
    line-height: 120px;
    font-family: sunflower;
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
