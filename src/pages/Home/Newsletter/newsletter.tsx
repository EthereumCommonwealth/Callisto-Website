import { FaTwitter } from 'react-icons/fa';
import Spacer from 'components/Spacer';
import StyledText from 'components/StyledText';
import styled from 'styled-components';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

import { newsdata } from '../../../constants/strings';
import Title from 'components/Title';
import Slick, { Settings } from "react-slick";
import { Theme } from 'constants/theme';
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

const Newsletter = () => {
    const renderItems = () => {
        return newsdata.map((item, i) => (
            <div key={item.id}>
                <ImgDiv>
                    <FixImg src={item.img} alt="image" />
                </ImgDiv>
                <ContentDiv>
                    <LeftDiv>
                        <LinkStyledButton>
                            <FaTwitter color={Theme.colors.secondary} size={26}/>
                        </LinkStyledButton>
                        <Spacer height="40px" />
                        <StyledText color={Theme.colors.white} fontweight="300" fontsize="14px">{item.date}</StyledText>
                        <Spacer height="15px" />
                        <Line />
                    </LeftDiv>
                    <TransDiv />
                    <RightDiv>
                        <SubTitle>
                            {item.title}
                        </SubTitle>
                        <Spacer height="30px" />
                        <Text>{item.desc}</Text>
                    </RightDiv>
                </ContentDiv>
            </div>
        ));
    };
    return (
        <Container>
            <TitleCon>
                <Title text="Latest News"></Title>
            </TitleCon>
            <Spacer height={"20px"} />
            <CardDiv>
                <Slick {...slickSettings}>{renderItems()}</Slick>
            </CardDiv>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin: 0;
    justify-content:center;
    align-items: center;
    vertical-align: middle;
`;

const CardDiv = styled.div`
    padding: 20px 0px;
    @media (max-width: 768px) {
        // padding: 20px;
    }
`;
const ImgDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    min-width: 300px;
    border-radius: 30px;
    @media (max-width: 768px) {
        width: 80%;
    }

`;
const FixImg = styled.img`
    // margin-left: auto;
    // margin-right: auto;
    width: 100%;
    padding: 0 !important;
    // min-width: 300px;
    border-radius: 20px;
    // @media (max-width: 768px) {
    //     width: 80%;
    // }
`;
const TitleCon = styled.div`
    width: 100%;
    padding: 0 8%;
    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;
const ContentDiv = styled.div`
    margin-top: -50px;
    margin-left: 6%;
    display: flex;
    border-radius: 40px 0 0 40px;
    height: 300px;
    background-color: ${Theme.colors.primary};
    @media (max-width: 768px) {
        margin-left: 20px;
        margin-top: 20px;
        height: 380px;
    }
`;
const LeftDiv = styled.div`
    padding: 70px 0 50px 0;
    width: 250px;
    border-radius: 40px 0 0 40px;
    background-color: ${Theme.colors.secondary};
    @media (max-width: 768px) {
        padding: 50px 0;
        width: 200px;

    }
    @media (max-width: 420px) {
        width: 100px;
    }

`;
const LinkStyledButton = styled.li`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #FFF;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.2);
`
const TransDiv = styled.div`
    display: block;
    width: 10px;
    background-color: rgba(0, 0, 0, .2);
`;
const Line = styled.div`
    width: 180px;
    height: 2px;
    background-color: #FFF;
    margin-left: auto;
    @media (max-width: 768px) {
        width: 150px;
    }
    @media (max-width: 420px) {
        width: 100%;
    }
`;
const RightDiv = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: flex-start;
    padding: 70px 10% 50px;
    @media (max-width: 768px) {
        padding: 70px 20px 50px;
        width: 100%;
    }
`;
const SubTitle = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-size: 40px;
    color: ${Theme.colors.white};
    @media screen and (max-width: 560px) {
        font-size: 25px;
    }
`;
const Text = styled.p`
    font-family: ${Theme.fonts.title};
    font-size: 20px;
    line-height: 24px;
    color: ${Theme.colors.white};
    text-align: start;
    @media screen and (max-width: 560px) {
        font-size: 16px;
    }
`;
export default Newsletter;
