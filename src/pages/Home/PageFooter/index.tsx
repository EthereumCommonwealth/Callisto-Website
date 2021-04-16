import styled from 'styled-components'
import { SpaceRow, SpaceRowMobile } from 'components/Row';
import Spacer from 'components/Spacer';
import { Theme } from 'constants/theme';

const PageFooter = ({}) => {

    return (
        <>
            <Footer>
                <WhiteBack>
                    <SpaceRow>
                        <StyledText color="rgba(0,0,0,.22)" fontweight="900" fontsize="72px">NER</StyledText>
                        <StyledText color="rgba(0,0,0,.22)" fontweight="900" fontsize="72px">PARTNER</StyledText>
                        <StyledText color="rgba(0,0,0,.22)" fontweight="900" fontsize="72px">PAR</StyledText>
                    </SpaceRow>
                    <SpaceRowMobile>
                        <Left >
                            <StyledText color="rgba(0,0,0,.22)" fontweight="900" fontsize="26px">PARTNER</StyledText>
                            <Spacer height="20px"/>
                            <StyledText color="rgba(0,0,0,.22)" fontweight="900" fontsize="26px">PARTNER</StyledText>
                            <Spacer height="20px"/>
                            <StyledText color="rgba(0,0,0,.22)" fontweight="900" fontsize="26px">PARTNER</StyledText>
                        </Left>
                        <Left >
                            <StyledText color="rgba(0,0,0,.22)" fontweight="900" fontsize="26px">PARTNER</StyledText>
                            <Spacer height="20px"/>
                            <StyledText color="rgba(0,0,0,.22)" fontweight="900" fontsize="26px">PARTNER</StyledText>
                            <Spacer height="20px"/>
                            <StyledText color="rgba(0,0,0,.22)" fontweight="900" fontsize="26px">PARTNER</StyledText>
                        </Left>
                    </SpaceRowMobile>
                </WhiteBack>
            </Footer>
        </>
    )
}


const Footer = styled.div`
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1AB06F 100%);;
    width: 100%;
    height: 250px;
    margin-top: 30px;
    display: flex;
    align-items: flex-end;
    min-width: 300px;
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`

const StyledText = styled.p<{ color: string, fontweight: string, fontsize: string}>`
    font-weight: ${({fontweight}) => fontweight};
    color:${({color}) => color};
    font-family: ${Theme.fonts.roboto};
    font-size: ${({fontsize}) => fontsize};
    line-height: 26px;
    letter-spacing: .2px;
`

const WhiteBack = styled.div`
    background-color: white;
    width: 100%;
    height: 90%;
`

export default PageFooter;