import SubTitle from 'components/SubTitle';
import Title from 'components/Title';
import { Theme } from 'constants/theme';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 30px;
    align-items: center;
`
const TextArea = styled.p<{ color: string}>`
    font-weight: 400;
    color:${({color}) => color};
    font-family: ${Theme.fonts.title};
    font-size: 16px;
    line-height: 26px;
    letter-spacing: .2px;
    text-align: start;
`
const ContentSection = ({item}) => {

    return (
        <Container>
            <SubTitle color={Theme.colors.third} fontWeight={"600"} key={item.section}>{item.section}</SubTitle>
            <TextArea color={Theme.colors.primary2}>{item.description}</TextArea>
        </Container>
    )
}

export default ContentSection;
