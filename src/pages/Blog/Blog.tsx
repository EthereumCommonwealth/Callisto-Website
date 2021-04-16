import React from 'react'

import styled from 'styled-components';
import Header from 'components/Header';
import MidImage from 'components/MidImage';
import BackImage from 'components/BackImage';
import MidRightImage from 'components/MidRightImage';
import TopSetion from './components/TopSection';
import TitleSetion from './components/TitleSection';

import { Theme } from 'constants/theme';
import Row, {Row2} from 'components/Row';

import Content from './Content';
import { BodyWrapper } from './components/Wrapper';
import StickyButton from 'components/StickyButton';

const SubTitle = styled.div<{ color: string, fontWeight: string }>`
    font-weight: ${({fontWeight}) => fontWeight};
    color: ${({color}) => color};
    font-family: ${Theme.fonts.body};
    font-size: 21px;
    padding: 10px;
    text-align: center;
    line-height: 26.25px;
`

const BigTitle = styled.h1<{ fontWeight: string, color: string}>`
    font-weight: ${({fontWeight}) => fontWeight};
    font-family: ${Theme.fonts.body};
    font-size: 61px;
    color: ${({color}) => color};
    @media (max-width: 596px) {
        font-size: 50px;
    }
`

const Blog: React.FC = () => {

    return (
        <BodyWrapper>
            <Header home={false}/>
            <TopSetion>
                <TitleSetion>
                    <Row2 pr={"0px"} pl={"0px"}>
                        <BigTitle fontWeight={"500"} color={Theme.colors.white}>{`Callisto's` }</BigTitle>
                        <BigTitle fontWeight={"500"} color={Theme.colors.primary}>&nbsp; Blog</BigTitle>
                    </Row2>
                    <SubTitle color={Theme.colors.white} fontWeight={"300"}>Check our latest updates and blog posts</SubTitle>
                </TitleSetion>
            </TopSetion>
            {/* <BackImage /> */}
            <MidImage top={"100%"} key="left"/>
            <Content />
            <StickyButton/>
            <MidRightImage top={"68%"} key="right"/>
        </BodyWrapper>
    )
}

export default Blog
