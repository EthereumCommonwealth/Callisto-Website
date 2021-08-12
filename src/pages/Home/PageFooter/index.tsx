import React from 'react'
import styled from 'styled-components'
import Spacer from 'components/Spacer';
import { partners } from 'constants/strings';
import Slick, { Settings } from "react-slick";
import "./style.scss";
import Title from 'components/Title';

const slickSettings: Settings = {
    accessibility: false,
    draggable: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    dots: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 920,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
};


const PageFooter = () => {
    const renderItems = () => {
        return partners.map((item) => (
            <div key={item}>
                <img src={item} alt="img"/>
            </div>
        ));
    };
    return (
        <>
            <Spacer height="50px"/>
            <TitleCon>
                <Title text="Meet Our Partners"/>
            </TitleCon>
            
            <Footer>
                <WhiteBack>
                    <SliderCon >
                        <Slick {...slickSettings}>{renderItems()}</Slick>
                    </SliderCon>
                </WhiteBack>
            </Footer>
        </>
    )
}


const Footer = styled.div`
    // background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1AB06F 100%);;
    width: 100%;
    height: 200px;
    // margin-top: 30px;
    display: flex;
    align-items: flex-end;
    min-width: 260px;
    @media (max-width: 540px) {
        height: 150px;
    }
    @media (max-width: 420px) {
        height: 100px;
    }
`;
const TitleCon = styled.div`
    width: 100%;
    padding: 0 10%;
    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

const SliderCon = styled.div`
    // display: flex;
    width: 80%;
    margin-left: 10%;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    @media (max-width: 768px) {
        width: calc(100% - 40px);
        margin-left: 20px;
        padding: 0 10px;
    }
`;

const WhiteBack = styled.div`
    background-color: white;
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
`;

export default PageFooter;
