import StyledText from 'components/StyledText';
import { Theme } from 'constants/theme';
import styled from 'styled-components'

const Container = styled.button`
    display: flex;
    background-color: ${Theme.colors.primary};
    width: 60px;
    height: 60px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    position: fixed;
    border: none;
    z-index: 999;
    right: 50px;
    bottom: 50px;
    padding-top: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 10px 20px 0 rgba(0, 0, 0, 0.5);
    @media (max-width: 596px) {
        display: none;
    }
`
const StickyButton = ({}) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: window.pageYOffset - window.innerHeight < 0? 0: window.pageYOffset - window.innerHeight,
            behavior: "smooth",
        })
    }
    return (
        <Container onClick={scrollToTop}>
            <StyledText color={"white"} fontsize={"24px"} fontweight={"700"}>UP</StyledText>
        </Container>
    )
}
export default StickyButton;
