import styled from 'styled-components';
import { Assets } from 'constants/images';

const LeftPane = () => {
    return (
        <SubCon>
            <LogoArea>
                <LogoImg>
                    <img src={Assets.logo} width="44" height="50" alt="logo" />
                </LogoImg>
                <LogoTextArea>
                    <TextArea>
                        <Subtitle>Callisto Network (CLO)</Subtitle>
                        <Subtext>
                            0.006236 
                            <Usd>   USD   </Usd>
                            <Percentage>(+54.4%)</Percentage>
                        </Subtext>
                    </TextArea>
                </LogoTextArea>
            </LogoArea>
            <ImgGroup>
                <img src={Assets.coingecko} width='90' height='28' alt='coingecko' />
                <img src={Assets.coinmarket} width='109' height='20' alt="coinmarket" />
            </ImgGroup>
        </SubCon>
    )
}

const LogoArea = styled.div`
    display: flex;
`;
const SubCon = styled.div`
    width: 100%;
    max-width: 288px;
`;

const LogoImg = styled.div`
    width: 60px;
    height: 60px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoTextArea = styled.div`
    background: linear-gradient( 
        90deg
     ,rgb(185 229 207 / 37%) 0%,rgb(143 206 196 / 16%) 35%,rgb(90 213 128 / 8%) 100%);  
    width: 288px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%
    }
`;

const Subtitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    padding: 3px;
`;

const Subtext = styled.p`
    font-size: 14px;
    padding: 3px;
`;

const Usd = styled.span`
    font-size: 10px;
`;

const Percentage = styled.span`
    color: green;
    font-size: 14px;
`;

const TextArea = styled.div`
    height: 100%;
    width: 100%;
    padding: 5px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImgGroup = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 10px;
    max-width: 288px;
`;

export default LeftPane;
