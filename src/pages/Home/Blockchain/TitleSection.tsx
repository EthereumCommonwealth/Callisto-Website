import { Assets } from 'constants/images';
import styled from 'styled-components';

const TitleBar = styled.div`
    display: flex;
`;

const Title = styled.div`
    background-image: url("${Assets.rect12}");
    background-size: 100% 100%;
    width: 500px;
    height: 160px;
    display: flex;
    justify-content: flex-end;
    vertical-align: middle;
    align-items: center;
    padding-right: 20px;
    @media (max-width: 768px) {
        width: 300px;
        height: 60px;
    }
`;

const Titletext = styled.div`
    font-size: 70px;
    color: #ffffff;
    font-family: sunflower:
    font-weight: normal;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

const TsubArea = styled.div`
    padding-left: 15px;
    width: 80%;
    padding-right: 8%;
    @media(max-width: 768px) {
        padding-right: 20px;
    }
`;

const Tsubtext = styled.p`
    font-family: Sunflower;
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 60px;
    display: flex;
    align-items: center;
    color: #3D4341;
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 20px;
    }
`;

const TsubBtext = styled.p`
    font-family: Sunflower;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    display: flex;
    align-items: center;
    color: #3D4341;
    padding: 10px 0px;
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 20px;
    }
`;

const GradBar = styled.div`
    height: 6px;
    width: 100%;
    border-radius: 3px;
    background: linear-gradient(90deg, #4DCC95 0.64%, rgba(255, 255, 255, 0) 102.02%);
    @media (max-width: 768px) {
       display: none;
    }
`;

const TitleSection = () => {

    return (
        <TitleBar>
            <Title>
                <Titletext>Blockchain</Titletext>
            </Title>
            <TsubArea>
                <Tsubtext>as seen by</Tsubtext>
                <TsubBtext>Security Experts</TsubBtext>
                <GradBar></GradBar>
            </TsubArea>
        </TitleBar>
    )
}

export default TitleSection;