import React from 'react'

import Header from 'components/Header';
import Intro from 'pages/Home/Intro';
import Ecosystem from 'pages/Home/Ecosystem';
import Blockchain from 'pages/Home/Blockchain';
import Services from 'pages/Home/Services';
import Discover from './Discover';
import StickyButton from 'components/StickyButton';
import PageFooter from './PageFooter';
import Coreteam from './Coreteam';
import Ambateam from './Ambateam';
import Newsletter from './Newsletter';

const Home: React.FC = () => {

    return (
        <>
            <Header home={true}/>
            <Intro />
            <Blockchain />
            <Services />
            <Ecosystem />
            <Discover />
            <Coreteam />
            <Ambateam />
            <Newsletter />
            <PageFooter />
            <StickyButton />
        </>
    )
}

export default Home;
