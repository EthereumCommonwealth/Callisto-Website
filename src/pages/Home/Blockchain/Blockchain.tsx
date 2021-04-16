import { Assets } from 'constants/images';
import styled from 'styled-components';
import { SpaceRow2 } from 'components/Row';
import TitleSection from './TitleSection';
import RectSection from './RectSection';

const Blockchain = () => {

    return (
        <Container>
            <TitleSection />
            <SpaceRow2>
                <RectSection />
                <ImgArea>
                    <img src={Assets.polygroup} alt="polyimg" />
                </ImgArea>
            </SpaceRow2>
        </Container>
    )
}

const Container = styled.div`
    background-image: url("${Assets.polybg}");
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`;
const ImgArea = styled.div`
    margin-top: 180px;
    @media (max-width: 1024px) {
        display: none;
    }
`;

export default Blockchain;
