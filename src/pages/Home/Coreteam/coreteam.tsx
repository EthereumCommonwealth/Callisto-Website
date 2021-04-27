import Spacer from 'components/Spacer';
import { coreteams } from 'constants/strings';
import styled from 'styled-components';
import Card from './Card';

const Coreteam = () => {
    
    return (
        <Container>
            <TsubArea>
                <TsubBtext>Core Team</TsubBtext>
                <GradBar></GradBar>
            </TsubArea>
            <Spacer height={"20px"} />
            <div className="row p10">
                {
                    coreteams?.map((_item, _i) => (
                        <CardDiv key={_item.name}>
                            <Card item={_item}/>
                        </CardDiv>
                    ))
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
    padding: 0px 8%;
    width: 100%;
    margin: 0;
    justify-content:center;
    align-items: center;
    vertical-align: middle;
    @media (max-width: 768px) {
        padding: 0px 20px 0px 0px;
    }
`;

const CardDiv = styled.div`
    width: 33.33%;
    padding: 20px 0px 20px 27px;
    @media(max-width: 1024px) {
        width: 50%;
    }
    @media(max-width: 590px) {
        width: 100%;
    }
`;

const TsubArea = styled.div`
    padding-left: 20px;
    padding-top: 30px;
    width: 100%;
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
export default Coreteam;
