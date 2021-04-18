import React from 'react'

import Header from 'components/Header';
import Intro from 'pages/Home/Intro';
import NavMiddlebar from 'pages/Home/NavMiddlebar';
import Blockchain from 'pages/Home/Blockchain';
import Services from 'pages/Home/Services';
import StickyButton from 'components/StickyButton';
import PageFooter from './PageFooter';
import Coreteam from './Coreteam';
import Ambateam from './Ambateam';
import Advisor from './Advisor';
import Newsletter from './Newsletter';

const Home: React.FC = () => {

    return (
        <>
            <Header home={true}/>
            <Intro />
            <StickyButton />
            <NavMiddlebar />
            <Blockchain />
            <Services />
            <Coreteam />
            <Ambateam />
            <Advisor />
            <Newsletter />
            <PageFooter />
        </>
    )
}

export default Home;
