import { SpaceRow2 } from 'components/Row';
import Spacer from 'components/Spacer';
import styled from 'styled-components';

const Card = ({item}) => {
    
    return (
        <Container>
            <img src = {item.avatar} />
            <TsubBtext>
                {item.name.toUpperCase()}
            </TsubBtext>
            <TroleBtext>
                {item.role}
            </TroleBtext>
            <Spacer height={"80px"} />
        </Container>
    )
}

const Container = styled.div`
    
`;

const Point = styled.div`
    width: 6px;
    height: 6px;
    background-color: #3D4341;
    border-radius: 3px;
    margin: 10px 10px 10px 16px;
`;

const TsubBtext = styled.p`
    font-family: Sunflower;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #3D4341;
    margin-top: 10px;
    @media (max-width: 768px) {
        line-height: 20px;
    }
`;
const TroleBtext = styled.p`
    font-family: Sunflower;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #3D4341;
`;
const Text = styled.p`
    font-family: Sunflower;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #3D4341;
`;
export default Card;
