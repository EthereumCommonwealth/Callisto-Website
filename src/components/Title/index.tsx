import { Theme } from 'constants/theme';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Text = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-weight: bold;
    font-size: 45px;
    padding: 10px;
    color: ${Theme.colors.secondary};
    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`
const GradBar = styled.div`
    height: 4px;
    width: 100%;
    background: ${Theme.colors.primary};
    border-radius: 2px;
    @media (max-width: 768px) {
    }
`;
const Title = ({text}) => {
    return (
        <Container>
            <Text>{text}</Text>
            <GradBar/>
        </Container>
    )
}

export default Title;
