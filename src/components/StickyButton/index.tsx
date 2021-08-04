import StyledText from 'components/StyledText';
import { Theme } from 'constants/theme';
import styled from 'styled-components'
import Redit from '../Icons/Redit';
import Twitter from '../Icons/Twitter';
import Telegram from '../Icons/Telegram';
import Youtube from '../Icons/Youtube';

import { AiOutlineReddit } from 'react-icons/ai';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    border: none;
    z-index: 999;
    left: 50px;
    top: calc(50% - 100px);
    @media (max-width: 768px) {
        display: none;
    }
`
const StyledLi = styled.a`
    margin-bottom: 20px;
`;
const StickyButton = ({}) => {

    return (
        <Container>
            <StyledLi href="https://twitter.com/CallistoSupport" target="_blank">
                <Twitter />
            </StyledLi>
            <StyledLi href="https://t.me/CallistoNet" target="_blank">
                <Telegram />
            </StyledLi>
            <StyledLi href="https://www.reddit.com/r/CallistoCrypto/" target="_blank">
                <AiOutlineReddit color={Theme.colors.primary} size={30} />
            </StyledLi>
            <StyledLi href="https://www.youtube.com/channel/UC1WMae32v_eJ8qOtLQqM26Q" target="_blank">
                <Youtube />
            </StyledLi>
        </Container>
    )
}
export default StickyButton;
