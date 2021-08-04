import EcoIcon1 from 'components/Icons/EcoIcon1';
import EcoIcon2 from 'components/Icons/EcoIcon2';
import EcoIcon3 from 'components/Icons/EcoIcon3';
import EcoIcon4 from 'components/Icons/EcoIcon4';
import EcoIcon5 from 'components/Icons/EcoIcon5';
import EcoIcon6 from 'components/Icons/EcoIcon6';
import EcoIcon7 from 'components/Icons/EcoIcon7';
import EcoIcon8 from 'components/Icons/EcoIcon8';
import StyledText from 'components/StyledText';
import Spacer from 'components/Spacer';
import Title from 'components/Title';
import { Assets } from 'constants/images';
import { Theme } from 'constants/theme';
import styled from 'styled-components';
import { useState } from 'react';
import { ecosdata } from 'constants/strings';

const Ecosystem = () => {
    const [curIdx, setCurIdx] = useState(0);
    const [item, setItem] = useState(ecosdata[0]);
    
    const handleClick= (idx) => {
        setCurIdx(idx);
        setItem(ecosdata[idx]);
    }
    
    return (
        <Container>
            <TitleCon>
                <Title text="Callisto Ecosystem"></Title>
            </TitleCon>
            <SubCon>
                <LeftPane>
                    <SubTitle>
                        {item.title}
                    </SubTitle>
                    <Img2 src={item.img} alt="mark"/>
                    <div>
                        {item.desc.map((txt, index) => {
                            return (
                                <Text key={index.toString()}>{txt}</Text>
                            )
                        })}
                    </div>
                    <GetButton href={item.link} target="_blank">
                        <StyledText color={Theme.colors.white} fontweight={"700"} fontsize={"22px"}>{`Learn more`}</StyledText>
                    </GetButton>
                </LeftPane>
                <Img src={item.img} alt="img"/>
            </SubCon>
            <BottomCon>
                <IconsCon>
                    <div className = "row center" >
                            <Button onClick={() => handleClick(0)}>
                                <EcoIcon1 color={curIdx === 0 ? Theme.colors.secondary: Theme.colors.opacity2th}/>
                            </Button>
                            <Button onClick={() => handleClick(1)}>
                                <EcoIcon2 color={curIdx === 1 ? Theme.colors.secondary: Theme.colors.opacity2th} />
                            </Button>
                            <Button onClick={() => handleClick(2)}>
                                <EcoIcon3 color={curIdx === 2 ? Theme.colors.secondary: Theme.colors.opacity2th} />
                            </Button>
                            <Button onClick={() => handleClick(3)}>
                                <EcoIcon4 color={curIdx === 3 ? Theme.colors.secondary: Theme.colors.opacity2th} />
                            </Button>
                            <Button onClick={() => handleClick(4)}>
                                <EcoIcon5 color={curIdx === 4 ? Theme.colors.secondary: Theme.colors.opacity2th} />
                            </Button>
                            <Button onClick={() => handleClick(5)}>
                                <EcoIcon6 color={curIdx === 5 ? Theme.colors.secondary: Theme.colors.opacity2th} />
                            </Button>
                            <Button onClick={() => handleClick(6)}>
                                <EcoIcon7 color={curIdx === 6 ? Theme.colors.secondary: Theme.colors.opacity2th} />
                            </Button>
                            <Button onClick={() => handleClick(7)}>
                                <EcoIcon8 color={curIdx === 7 ? Theme.colors.secondary: Theme.colors.opacity2th} />
                            </Button>
                    </div>
                </IconsCon>
            </BottomCon>
            <Spacer height="50px" />
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
const TitleCon = styled.div`
    width: 100%;
    padding: 0 8%;
    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`;
const SubCon = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 8%;
    @media screen and (max-width: 768px) {
        padding: 20px;
        justify-content: flex-start;
    }
`;
const LeftPane = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px 0;
    @media screen and (max-width: 1200px) {
        width: 60%;
    }
    @media screen and (max-width: 1000px) {
        width: 70%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 40px 0;
    }
`;
const Img2 = styled.img`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        width: 300px;
        margin: 30px auto;
    }
    @media screen and (max-width: 310px) {
        width: 250px;
    }
`;

const Img = styled.img`
    height: 400px;
    @media screen and (max-width: 1200px) {
        height: 300px;
    }
    @media screen and (max-width: 1000px) {
        height: 250px;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const SubTitle = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-size: 35px;
    line-height: 45px;
    color: ${Theme.colors.secondary};
    @media screen and (max-width: 768px) {
        font-size: 30px;
        text-align: center;
    }
`;
const Text = styled.p`
    font-family: ${Theme.fonts.title};
    font-size: 16px;
    line-height: 20px;
    margin: 20px 0;
    color: ${Theme.colors.secondary};
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;
const GetButton = styled.a`
    background-color: ${Theme.colors.primary};
    text-decoration: none !important;
    padding: 10px 50px;
    width: 250px;
    margin-right: 15px;
    font-size: 18px;
    text-align: center;
    border: 2px solid ${Theme.colors.primary};
    border-radius: 40px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 596px) {
        width: 100%;
    }
`;
const BottomCon = styled.div`
    display: flex;
    justify-content: center;
`;
const IconsCon = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    border-bottom: 2px;
    border-style: solid;
    border-color:  ${Theme.colors.secondary};
`;
const Button = styled.a`
    padding: 10px;
    @media sceen and (max-width: 768px) {
        width: 50px;
    }
`;

export default Ecosystem;
