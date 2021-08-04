import Spacer from 'components/Spacer';
import { Theme } from 'constants/theme';
import styled from 'styled-components';
import StyledText from 'components/StyledText';
import Slick, { Settings } from "react-slick";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import { discoverdata } from 'constants/strings';

import "./style.scss";

const slickSettings: Settings = {
    accessibility: false,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    dots: true,
    dotsClass: "slick-dots",
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const Discover = () => {
    
    const renderItems = () => {
        return discoverdata.map((item) =>{
            return (
                <SubCon key={item.id}>
                    <LineImg src={item.img} alt="image"/>
                    <RightPane>
                        <SubTitle>
                            {item.title}
                        </SubTitle>
                        <Line />
                        <div>
                            <Text>
                                {item.desc1}
                            </Text>
                            <Text>
                                {item.desc2}
                            </Text>
                        </div>
                        <GetButton href={item.link} target="_blank">
                            <StyledText color={Theme.colors.secondary} fontweight={"700"} fontsize={"22px"}>{`Get Started`}</StyledText>
                        </GetButton>
                    </RightPane>
                </SubCon>
            )
        })
        
    }
    return (
        <Container>
            <CardDiv className="discover-container">
                <Slick {...slickSettings}>{renderItems()}</Slick>
            </CardDiv>
            <Spacer height="150px" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin: 0;
    @media screen and (max-width: 768px) {
        padding: 0px 5px;
    }
`;
const CardDiv = styled.div``;
const SubCon = styled.div`
    position: relative;
    display: flex !important;
    width: 100%;
    justify-content: space-between;
    background-color: ${Theme.colors.secondary};
    border-top: 8px;
    border-bottom: 8px;
    border-style: solid;
    border-color: #1E587D;
    padding: 60px 8% 60px 4%;
    @media screen and (max-width: 1050px) {
        padding: 50px 8% 50px 4%;
    }
    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
    @media screen and (max-width: 645px) {
        flex-direction: column;
    }

`;
const LineImg = styled.img`
    margin-top: auto;
    margin-bottom: auto;
    max-width: 400px;
    background-color: transparent !important;
    padding: 0 !important;
    @media screen and (max-width: 1050px) {
        height: 300px;
    }
    @media screen and (max-width: 645px) {
        height: 250px;
        width: 250px;
        margin: 20px;
        margin-top: 60px;
        align-self: center;
    }
`;
const RightPane = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px 0;
    @media screen and (max-width: 1050px) {
        padding: 50px 0;
    }
    @media screen and (max-width: 645px) {
        width: 100%;
    }
`;
const SubTitle = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-size: 40px;
    color: ${Theme.colors.white};
    text-align: left;
    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;
const Line = styled.div`
    height: 2px;
    background-color: #FFF;
    width: 60%;
`;
const Text = styled.p`
    font-family: ${Theme.fonts.title};
    font-size: 20px;
    line-height: 24px;
    color: ${Theme.colors.white};
    padding-top: 20px;
    text-align: left;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;
const GetButton = styled.a`
    background-color: ${Theme.colors.white};
    text-decoration: none !important; 
    padding: 15px 50px;
    width: 250px;
    margin-right: 15px;
    font-size: 18px;
    text-align: center;
    border-radius: 40px;
    margin-top: 20px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    @media (max-width: 596px) {
        width: 100%;
    }
`;
export default Discover;
