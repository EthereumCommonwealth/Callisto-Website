import { SpaceRow2 } from 'components/Row';
import Spacer from 'components/Spacer';
import styled from 'styled-components';
import LeftPane from './components/LeftPane';
import Li from './components/Li';
import RightPane from './components/RightPane';

const Services = () => {
    
    return (
        <Container>
            <SpaceRow2>
                <LeftPane />
                <RightPane />
            </SpaceRow2>
            <Spacer height="50px" />
            {/* <Li
                color={"rgba(0,0,0,.7)"}
            >
                <a href={'/whitepaper/#'}>{"Meet our Partners"}</a>
            </Li>
            <GradBar2></GradBar2> */}
        </Container>
    )
}

const Container = styled.div`
    padding-left: 8%;
    width: 100%;
    margin: 0;
    justify-content:center;
    align-items: center;
    vertical-align: middle;
    @media (max-width: 768px) {
        padding: 0px 5px;
    }
`;
const GradBar2 = styled.div`
    display: none;
    @media (max-width: 410px) {
        display: flex;
        height: 4px;
        width: calc(100% - 20px);
        margin: 5px 10px;
        background: linear-gradient(90deg, #4DCC95 0.64%, rgba(255, 255, 255, 0) 102.02%);
        border-radius: 2px;
    }
`;

export default Services;
