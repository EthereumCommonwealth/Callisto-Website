import { SpaceRow2 } from 'components/Row';
import Spacer from 'components/Spacer';
import styled from 'styled-components';

const Card = ({item}) => {
    
    return (
        <Container>
            {/* <ImgCon>
                <img src = {item.avatar} />
            </ImgCon> */}
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
const ImgCon = styled.div`
    -webkit-clip-path:polygon(10px 0, 90px 0, 100px 10px, 100px 90px, 90px 100px, 10px 100px, 0 90px, 0% 10px);
    clip-path:polygon(10px 0, 90px 0, 100px 10px, 100px 90px, 90px 100px, 10px 100px, 0 90px, 0% 10px);
    width:100px;
    height:100px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.2);
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
