import Spacer from 'components/Spacer';
import { coreteams } from 'constants/strings';
import styled from 'styled-components';
import Card from './Card';
import Title from 'components/Title';

const Coreteam = () => {
    
    return (
        <Container>
            <TitleCon>
                <Title text="Core Team"></Title>
            </TitleCon>
            <Spacer height={"20px"} />
            <div className="row padding">
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
    width: 100%;
    margin: 0;
    justify-content:center;
    align-items: center;
    vertical-align: middle;
    padding-top: 20px;
`;

const CardDiv = styled.div`
    width: 25%;
    padding: 20px;
    @media screen and (max-width: 1360px) {
        width: 33.33%;
    }
    @media screen and (max-width: 1024px) {
        width: 50%;
    }
    @media screen and (max-width: 590px) {
        width: 100%;
    }
`;

const TitleCon = styled.div`
    width: 100%;
    padding: 0 8%;
    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

export default Coreteam;
