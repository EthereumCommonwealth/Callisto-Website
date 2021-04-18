import styled from 'styled-components'
import Spacer from 'components/Spacer';
import { partners } from 'constants/strings';
import Slick, { Settings } from "react-slick";
import "./style.scss";
import Li from '../Services/components/Li';

const slickSettings: Settings = {
    // lazyLoad: "ondemand",
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


const PageFooter = ({}) => {
    const renderItems = () => {
            
        return partners.map((item, i) => (
            <div key={i}>
                <img src={`${item}`} alt="" />
            </div>
        ));
      };
    return (
        <>
            <Spacer height={"50px"} />
            <TitleDiv >
                <Li
                    color={"rgba(0,0,0,.7)"}
                >
                    <a href={'/whitepaper/#'}>{"Meet our Partners"}</a>
                </Li>
                <GradBar2></GradBar2>
            </TitleDiv>

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
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1AB06F 100%);;
    width: 100%;
    height: 200px;
    margin-top: 30px;
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
const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-left: 8%;
    @media(max-width: 768px) {
        padding: 0 10px;
        align-items: flex-start;
    }
`

const SliderCon = styled.div`
    // display: flex;
    width: 84%;
    margin-left: 8%;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    @media (max-width: 768px) {
        width: calc(100% - 40px);
        margin-left: 20px;
        padding: 0 10px;
    }
`

const GradBar2 = styled.div`
    display: none;
    @media (max-width: 420px) {
        display: flex;
        height: 6px;
        width: calc(100% - 20px);
        margin: 5px 0px;
        background: linear-gradient(90deg, #4DCC95 0.64%, rgba(255, 255, 255, 0) 102.02%);
        border-radius: 3px;
    }
`;
const WhiteBack = styled.div`
    background-color: white;
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
`

export default PageFooter;