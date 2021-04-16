import React from 'react'

import Header from 'components/Header';
import BackImage from 'components/BackImage';
import MidImage from 'components/MidImage';
import Content from './Content';
import StickyButton from 'components/StickyButton';

const Doc: React.FC = () => {

    return (
        <>
            <Header home={false}/>
            <BackImage />
            <MidImage top={"55%"}/>
            <Content />
            <StickyButton />
        </>
    )
}

export default Doc
