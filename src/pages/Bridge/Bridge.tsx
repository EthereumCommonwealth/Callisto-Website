import React from 'react'
import styled from 'styled-components';
import Header from 'components/Header';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const Container = styled.div`
    background-color: #f5f5f5;
    padding: 40px 20%;
`;

const Content = styled.div`
    display: flex;
`
const Bridge: React.FC = () => {

    return (
        <>
            <Header/>
            <Container>
                <Content >
                    <LeftPane />
                    <RightPane />
                </Content>
            </Container>
        </>
    )
}

export default Bridge;
