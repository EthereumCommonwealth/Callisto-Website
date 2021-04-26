

import CenterText from 'components/CenterText';
import ImageView from 'components/ImageView';
import { StartRow } from 'components/Row';
import Spacer from 'components/Spacer';
import StyledText from 'components/StyledText';
import { Assets } from 'constants/images';
import { services } from 'constants/strings';
import { Theme } from 'constants/theme';
import styled from 'styled-components';

const TsubArea = styled.div`
    padding-left: 20px;
    padding-top: 30px;
    width: 100%;
`;

const LeftPane = () => {
    
    return (
        <div className="col-lg-6"> 
            <TsubArea>
                <TsubBtext>Our Services</TsubBtext>
                <GradBar></GradBar>
            </TsubArea>
            {
                services?.map((_item, _i)=>
                    <div style={{flex: 1}} key={_item.name} id={_item.id}>
                        <Spacer height="80px"/>
                        <StartRow pl="0px" pr="0px">
                            <PlayIcon>
                                <Spacer height="20px"/>
                                <ImageView img={Assets.poly1} width="35px" height="40px"></ImageView>
                            </PlayIcon>
                            <Padding padding="0px 0px 0px 10px">
                                <CenterText color="rgba(0,0,0,.5)" fontweight="300" fontsize="18px" line={"26px"}>{_item.name}</CenterText>
                                <CenterText color="rgba(0,0,0,1)" fontweight="300" fontsize="32px" line={"40px"}>{_item.title}</CenterText>
                                <Spacer height="20px"/>
                                <CenterText color="rgba(0,0,0,.5)" fontweight="300" fontsize="18px" line={"26px"}>
                                    {_item.description1}
                                </CenterText>
                                <Spacer height="10px" />
                                <CenterText color="rgba(0,0,0,.5)" fontweight="300" fontsize="18px" line={"26px"}>
                                    {_item.description2}
                                </CenterText>
                                <Spacer height="20px"/>
                                <CenterDiv>
                                    <StyledButton bk="linear-gradient(180deg, #3CC58A 0%, #34B37C 100%)" shadow="0px 8px 8px rgba(0, 0, 0, 0.1), 0px 3px 2px rgba(3, 25, 15, 0.09)">
                                        <StyledText color={Theme.colors.white} fontweight="300" fontsize="18px">Learn More</StyledText>
                                    </StyledButton>
                                </CenterDiv>
                            </Padding>
                        </StartRow>
                    </div>
                )
            }
            
        </div>
    )
}

const CenterDiv =  styled.div`
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;
const PlayIcon =  styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;
const Padding = styled.div<{padding: string}>`
    width: 100%;
    padding: ${({padding})=>padding};
`;
const TsubBtext = styled.p`
    font-family: Sunflower;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    display: flex;
    align-items: center;
    color: #3D4341;
    padding: 10px 0px;
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 20px;
    }
`;
const GradBar = styled.div`
    height: 6px;
    width: 100%;
    background: linear-gradient(90deg, #4DCC95 0.64%, rgba(255, 255, 255, 0) 102.02%);
    border-radius: 3px;
    @media (max-width: 768px) {
    }
`;
const StyledButton = styled.button<{bk: string, shadow: string}>`
    background: ${({bk})=>bk};
    border: none;
    padding: 7px 50px 5px 50px;
    margin-right: 15px;
    box-shadow: ${({shadow})=>shadow};
`;
export default LeftPane;
