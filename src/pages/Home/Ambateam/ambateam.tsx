import React from 'react'
import styled from 'styled-components';
import Spacer from 'components/Spacer';
import { devteams } from 'constants/strings';
import Title from 'components/Title';
import Card from './Card';

const Ambateam = () => {
    
    return (
        <Container>
            <TitleCon>
                <Title text="Ambassador Team & Admins"/>
            </TitleCon>
            <Spacer height="20px"/>
            <div className="row padding">
                {
                    devteams?.map((_item) => (
                        <CardDiv key={_item.name}>
                            <Card item={_item}/>
                        </CardDiv>
                    ))
                }
            </div>
            <Spacer height="30px" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin: 0;
    justify-content:center;
    align-items: center;
    vertical-align: middle;
`;

const TitleCon = styled.div`
    width: 100%;
    padding: 0 10%;
    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;
const CardDiv = styled.div`
    width: 20%;
    padding: 20px;
    @media(max-width: 1024px) {
        width: 25%;
    }
    @media(max-width: 768px) {
        width: 33.33%;
    }
    @media(max-width: 590px) {
        width: 50%;
    }
    @media(max-width: 320px) {
        width: 100%;
        padding: 20px 20px;
    }
`;

export default Ambateam;
