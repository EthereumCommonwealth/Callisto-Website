import Spacer from 'components/Spacer';
import styled from 'styled-components';

const Card = ({item}) => {
    
    return (
        <Container>
            <ImgCon>
                <img src = {item.avatar} width="100px" />
            </ImgCon>
            <TsubBtext>
                {item.name.toUpperCase()}
            </TsubBtext>
            <TroleBtext>
                {item.role}
            </TroleBtext>
            <Spacer height="20px" />
            <DescDiv>
                {
                    item.description?.map((_desc, _i) => (
                        <Row key={_i.toString()}>
                            <Point />
                            <Text >{_desc}</Text>
                        </Row>
                    ))
                }
            </DescDiv>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const DescDiv = styled.div`
    align-self: center;
`;
const Row = styled.div`
    display: flex;
`;
const ImgCon = styled.div`
    -webkit-clip-path:polygon(10px 0, 90px 0, 100px 10px, 100px 90px, 90px 100px, 10px 100px, 0 90px, 0% 10px);
    clip-path:polygon(10px 0, 90px 0, 100px 10px, 100px 90px, 90px 100px, 10px 100px, 0 90px, 0% 10px);
    width:100px;
    height:100px;
    align-self: center;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.2);
`;
const Point = styled.div`
    width: 6px;
    height: 6px;
    min-width: 6px;
    
    background-color: #3D4341;
    border-radius: 3px;
    margin: 12px 10px 10px 2px;
`;

const TsubBtext = styled.p`
    font-family: Sunflower;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
    display: flex;
    color: #3D4341;
    margin-top: 10px;
    align-self: center;
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
    align-self: center;
    color: #3D4341;
`;
const Text = styled.p`
    font-family: Sunflower;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #3D4341;
`;
export default Card;
