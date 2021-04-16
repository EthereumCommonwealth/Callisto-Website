import React from 'react'

import Header from 'components/Header';
import MidImage from 'components/MidImage';
import BackImage from 'components/BackImage';
import MidRightImage from 'components/MidRightImage';

import Content from './Content';
import StickyButton from 'components/StickyButton';

const News: React.FC = () => {

    return (
        <>
            <Header home={false}/>
            <BackImage />
            <MidImage top={"55%"} key="left"/>
            <Content />
            <StickyButton />
            <MidRightImage top={"100%"} key="right"/>
        </>
    )
}

export default News
