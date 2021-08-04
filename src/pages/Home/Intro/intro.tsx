import { Assets } from 'constants/images';
import { Theme } from 'constants/theme';
import styled from 'styled-components';
import ButtonSection from './components/ButtonSection';
import TitleSection from './components/TitleSection';

const Intro = () => {
    return (
        <Container>
            <TitleSection />
            <Subtitle>{`Blockchain as seen by Security Experts`}</Subtitle>
            <Parag>
                {`A smart-contract ecosystem with a real emphasis on security. Build, stake and trade on a never compromised blockchain.`}
            </Parag>
            <ButtonSection />
            <SideImage src={Assets.backside}/>
            <RightSideImage src={Assets.back}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0px;
    left: 0px;
    padding-bottom: 20%;
    min-height: calc(100vh - 50px);
    @media (max-width: 596px) {
        background-image: none;
        justify-content: flex-start;
        margin-top: 0px;
    }
`;
const Subtitle = styled.p`
    color: ${Theme.colors.secondary};
    font-size: 24px;
    font-family: ${Theme.fonts.textBold};
    line-height: 30px;
    margin-top: -20px;
    margin-left: 8%;
    z-index: 1;
    @media (max-width: 768px) {
        margin-left: 0px;
        padding: 0px 20px;
        font-size: 14px;
    }
    @media (max-width: 596px) {
        margin-top: 20px;
        line-height: 20px;
    }
`;
const Parag = styled.p`
    color: ${Theme.colors.secondary};
    font-weight: 500;
    font-size: 18px;
    font-family: ${Theme.fonts.title};
    line-height: 25px;
    margin-left: 8%;
    width: 30%;
    margin-top: 50px;
    z-index: 1;
    @media (max-width: 1065px) {
        width: 35%;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 20px;
        margin-left: 0px;
        padding: 0px 20px;
        font-size: 12px;
        line-height: 16px;
    }
    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;
const SideImage = styled.img`
    position: absolute;
    bottom: 10%;
    width: 100px;
    @media (max-width: 768px) {
        display: none;
    }
`;
const RightSideImage = styled.img`
    position: absolute;
    right: 3%;
    bottom: 10%;
    width: 40%;
    @media (max-width: 768px) {
        display: none;
    }
`;
export default Intro;
