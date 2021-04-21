import ImageView from 'components/ImageView';
import StyledText from 'components/StyledText';
import { Assets } from 'constants/images';
import { Theme } from 'constants/theme';
import styled from 'styled-components';

const LearnMoreSection = () => {

    const scrollDownOne = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        })
    }
    return (
        <FooterArea>
            <StyledText color={Theme.colors.white} fontweight={"300"} fontsize={"21px"}>Learn More</StyledText>
            <MoreButton onClick={scrollDownOne}>
                <ImageView img= {Assets.coolicon} width={"30px"} height={"33px"}/>
            </MoreButton>
        </FooterArea>
    )
}

const FooterArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 50px;
    width: 100%;
    z-index: 1;
    @media (max-width: 596px) {
        display: none;
    }
`;
const MoreButton = styled.button`
    background-color: rgba(0, 0, 0, .1);
    border: none;
    padding: 5px;
`;

export default LearnMoreSection;
