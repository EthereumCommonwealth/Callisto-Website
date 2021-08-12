import React from 'react'
import styled from 'styled-components';
import { features } from 'constants/strings';
import { Theme } from 'constants/theme';
import Spacer from 'components/Spacer';
import TitleSection from './TitleSection';
import RectSection from './RectSection';

const Blockchain = () => {

    return (
        <Container>
            <TitleSection />
            <Row>
                <RectSection />
                <FeatureCont>
                    {
                        features.map((item, index) => {
                            return (
                                <FeartureItem key={index.toString()}>
                                    <ImgCon>
                                        <Img src={item.img} />
                                    </ImgCon>
                                    <TextArea>
                                        {item.desc}
                                    </TextArea>
                                </FeartureItem>
                            )
                        })
                    }
                </FeatureCont>
            </Row>
            <Spacer height="100px"/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    
`;
const Row = styled.div`
    display: flex;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
    }
`;
const FeatureCont = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    margin-right: 10%;
    padding: 100px 0 0 0;
    align-items: flex-end;
    @media screen and (max-width: 1100px) {
        width: 40%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0px;
    }
`;
const ImgCon = styled.div`
    width: 100px;
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;
    @media screen and (max-width: 768px) {
        width: 80px;
        margin-right: 20px;
    }
`;
const Img = styled.img`
    
`;
const FeartureItem = styled.div`
    display: flex;
    background-color: #163f59;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
`;

const TextArea = styled.p`
    width: 70%;
    color: ${Theme.colors.white};
    font-family: ${Theme.fonts.text};
    font-size: 16px;
    line-height: 20px;
`;

export default Blockchain;
