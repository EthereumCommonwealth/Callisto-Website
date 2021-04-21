import { Assets } from 'constants/images';
import { Theme } from 'constants/theme';
import styled from 'styled-components';
import ButtonSection from './components/ButtonSection';
import LearnMoreSection from './components/LearnMoreSection';
import NewsSection from './components/NewsSection';
import SocialSection from './components/SocialSection';
import TitleSection from './components/TitleSection';

const Intro = () => {
    return (
        <Container>
            <NewsSection />
            <TitleSection />
            <Subtitle>Protecting your fund by auditing smart contracts</Subtitle>
            <Parag>
                {`A comprehensive ecosystem whose main objetice is to improve the security of the smar contract industy`}
            </Parag>
            <ButtonSection />
            <SocialSection />
            <LearnMoreSection />
        </Container>
    )
}

const Container = styled.div`
    background-image: url("${Assets.bkimg}");
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0px;
    left: 0px;
    margin-top: -75px;
    @media (max-width: 1024px) {
        background-image: url("${Assets.back2}");
    }
    @media (max-width: 768px) {
        background-image: url("${Assets.back3}");
    }
    @media (max-width: 596px) {
        background-image: url("${Assets.mobback}");
        justify-content: flex-start;
        margin-top: 0px;
    }
`;
const Subtitle = styled.p`
    color: white;
    font-size: 24px;
    font-family: ${Theme.fonts.body};
    line-height: 30px;
    margin-top: 30px;
    margin-left: 8%;
    z-index: 1;
    @media (max-width: 768px) {
        margin-left: 0px;
        padding: 0px 20px;
        font-size: 14px;
    }
`;
const Parag = styled.p`
    color: white;
    font-weight: 500;
    font-size: 18px;
    font-family: ${Theme.fonts.body};
    line-height: 25px;
    margin-left: 8%;
    width: 40%;
    margin-top: 50px;
    z-index: 1;
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 20px;
        margin-left: 0px;
        padding: 0px 20px;
        font-size: 12px;
        line-height: 16px;
    }
`;

export default Intro;
