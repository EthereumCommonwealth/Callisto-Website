import * as React from 'react'
import LeftPane from './components/LeftPane';
import MidPane from './components/MidPane';
import RightPane from './components/RightPane';
import PageHeader from './components/PageHeader';
import SubWrapper from './components/SubWrapper';

import Wrapper from './components/Wrapper';


const Content = ({}) => {

    return (
        <Wrapper>
            <PageHeader />
            <SubWrapper>
                <LeftPane />
                <MidPane />
                <RightPane />
            </SubWrapper>
        </Wrapper>
    )
}

export default Content
