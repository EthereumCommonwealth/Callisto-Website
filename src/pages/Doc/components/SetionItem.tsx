import SubTitle from 'components/SubTitle';
import Title from 'components/Title';
import { Theme } from 'constants/theme';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 0px 0px 0px 30px;
    align-items: center;
    @media (max-width: 768px) {
        padding: 0px;
    }
`

const SetionItem = ({item, idx, setCurIdx}) => {

    return (
        <Container>
            <SubTitle color={Theme.colors.grey} fontWeight={"600"} key={item.section}>{item.section}</SubTitle>
            {
                item.data?.map((_item, _i) => (
                    <Li 
                        key={_item.name} 
                        color={idx === _item.active ? Theme.colors.white : Theme.colors.secondary}
                        backclr={idx === _item.active ? Theme.colors.primary: "transparent"}
                    >
                        <a href={_item.link} onClick={()=>setCurIdx(_item.active)}>{_item.name}</a>
                    </Li>
                ))
            }
        </Container>
    )
}

const Li = styled.li<{color: string, backclr: string}>`
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
    height: 35px;
    background-color: ${({backclr}) => backclr};
    justify-content: flex-start;
    line-height: 16px;
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

export default SetionItem;
