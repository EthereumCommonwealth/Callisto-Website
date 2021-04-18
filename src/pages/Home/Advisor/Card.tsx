import Spacer from 'components/Spacer';
import styled from 'styled-components';

const Card = ({item}) => {
    
    return (
        <Container>
            <Img src = {item.avatar} height="150px"/>
            <TextCon>
                <TsubBtext>
                    {item.name.toUpperCase()}
                </TsubBtext>
                <TroleBtext>
                    {item.role}
                </TroleBtext>
                <Spacer height="20px" />
                {
                    item.description?.map((_desc, _i) => (
                        <Text key={_i.toString()}>{_desc}</Text>
                    ))
                }
            </TextCon>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`;

const Img = styled.img`
    height: 120px;
`;
const TextCon = styled.div`
    padding: 0px 0px 10px 20px;
`;

const TsubBtext = styled.p`
    font-family: Sunflower;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #3D4341;
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
    margin-top: 10px;
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
