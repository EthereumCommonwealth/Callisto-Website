import styled from 'styled-components';
import ImageView from 'components/ImageView'
import { Assets } from 'constants/images'
import Wrapper from './components/Wrapper';
import HeadLeft from './components/HeadLeft';
import HeadRight from './components/HeadRight';
import { Theme } from 'constants/theme';
import TextArea from 'components/TextArea';
import SubWrapper from './components/SubWraper';
import Spacer from 'components/Spacer';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const SpaceRow = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 596px) {
      display: block;
    }
`
const Title = styled.h1<{ fontWeight: string}>`
    font-weight: ${({fontWeight}) => fontWeight};
    font-family: ${Theme.fonts.title};
    font-size: 36px;
    padding: 10px 30px;
    @media (max-width: 596px) {
        padding: 10px 0px;
        font-size: 30px;
    }
`
const Row = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0px;
    align-items: center;
    @media (max-width: 768px) {
        padding: 0px 30px;
    }
    @media (max-width: 596px) {
        padding: 0px;
    }
`

const SubTitle = styled.p<{ color: string, fontWeight: string }>`
    font-weight: ${({fontWeight}) => fontWeight};
    color: ${({color}) => color};
    font-family: ${Theme.fonts.title};
    font-size: 21px;
    padding: 10px;
    padding-left: 30px;
    line-height: 26.25px;
    @media (max-width: 768px) {
        font-size: 21px;
        padding: 10px 10px 10px 0px;
    }
`
const SubCon = styled.div`
    margin: 0px 30px;
    @media (max-width: 596px) {
        margin: 0px;
    }
`
const ImageCon = styled.div`
    width: 50%;
    height: 100%;
    padding: 20px;
    @media (max-width: 596px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0px;
        align-items: center;
    }
`

const Content = ({}) => {

    return (
        <Wrapper>
            <SpaceRow>
                <HeadLeft >
                    <Title fontWeight={"500"}>Callisto Weekly Repot</Title>
                    <Row>
                        <SubTitle color={Theme.colors.grey} fontWeight={"600"} >By Callisto Team</SubTitle>
                        <ImageView img={Assets.avatar} height={"20px"} width={"20px"}/>
                    </Row>
                    <SubCon>
                        <TextArea color={Theme.colors.fourth}>{lorem}</TextArea>
                    </SubCon>
                </HeadLeft>
                <HeadRight >
                    <img src={Assets.newsmark} width={"90%"}/>
                </HeadRight>
            </SpaceRow>
            <Spacer height={"50px"} />
            <SubWrapper>
                <TextArea color={Theme.colors.fourth}>{lorem}</TextArea>
                <Spacer height={"50px"} />
                <TextArea color={Theme.colors.fourth} >{lorem2}</TextArea>
                <Spacer height={"50px"} />
                <SpaceRow>
                    <ImageCon >
                        <img src={Assets.newsmark2} width={"90%"}/>
                    </ImageCon>
                    <HeadRight >
                        <img src={Assets.newsmark4} width={"90%"}/>
                    </HeadRight>
                </SpaceRow>
                <Spacer height={"80px"} />
                <TextArea color={Theme.colors.fourth} >{lorem}</TextArea>
                <Spacer height={"50px"} />
                <TextArea color={Theme.colors.fourth}>{lorem2}</TextArea>
                <Spacer height={"50px"}/>
            </SubWrapper>
        </Wrapper>
    )
}

export default Content
