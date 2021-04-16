import { Assets } from 'constants/images';
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
    height: 100vh;
    padding-top: 26px;
    margin-top: -75px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    @media (max-width: 1024px) {
        background-image: url("${Assets.back2}");
    }
    @media (max-width: 768px) {
        background-image: url("${Assets.back3}");
    }
    @media (max-width: 596px) {
        background-size: 100% 100%;
        background-image: url("${Assets.mobback}");
        padding: 0px;
        margin-top: 0px;
        justify-content: flex-start;
    }
`;
const Subtitle = styled.p`
    color: white;
    font-size: 24px;
    line-height: 30px;
    margin-top: 30px;
    margin-left: 8%;
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
    line-height: 22.5px;
    margin-left: 8%;
    width: 40%;
    margin-top: 50px;
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 20px;
        margin-left: 0px;
        padding: 0px 20px;
        font-size: 12px;
    }
`;
export default Intro;
