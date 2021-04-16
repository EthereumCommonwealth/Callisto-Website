import Title from 'components/Title';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 30px;
    align-items: center;
`
const Version = styled.div`
    background-color: grey;
    padding: 3px 10px;
    border-radius: 5px;
    opacity: .21;
    height: 22px;
`
const PageHeader = ({}) => {

    return (
        <Container>
            <Title fontWeight={'700'}>DOCS</Title>
            <Version>1.0.0</Version>
        </Container>
    )
}

export default PageHeader;
