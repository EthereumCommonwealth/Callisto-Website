import Row from 'components/Row';
import SubTitle from 'components/SubTitle';
import Title from 'components/Title';
import { Theme } from 'constants/theme';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 0px 0px 0px 0px;
    align-items: center;
`
const VirLine = styled.div<{ color: string }>`
    width: 2px;
    height: 20px;
    background-color: ${({color}) => color}
`

const CurrentItem = ({item, color, setCurIdx}) => {

    return (
        <Container>
            <SubTitle color={Theme.colors.grey} fontWeight={"600"}  key={item.section}>{item.section}</SubTitle>
            <Row pl={"0px"} pr={"0px"}>
                <VirLine color={color}/>
                <Li 
                    key={item.name} 
                    color={color}
                >
                    <a href={'/whitepaper/#'} onClick={()=>setCurIdx()}>{item.name}</a>
                </Li>
            </Row>
        </Container>
    )
}

const Li = styled.li<{color: string}>`
    flex: 0 0 auto;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    color: #999;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    display: flex;
    font-size: 14px;
    justify-content: flex-start;
    text-decoration: none;
    white-space: nowrap;
    padding-left: 10px;
    a {
        color: ${({color}) => color};
        font-weight: 500;
        width: 100%;
        font-family: ${Theme.fonts.poppin};
        text-decoration: none;
    }
`;

export default CurrentItem;
