import { useEffect } from 'react';
import { getCoinPrice } from 'state/home/action';
import styled from 'styled-components';
import { Assets } from 'constants/images';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store';
import { Link } from 'react-router-dom';

const LeftPane = () => {

    const dispatch = useDispatch();
    const coinPrice = useSelector((state: AppState) => state.home.coinPrice);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getCoinPrice());
        }, 1000);
        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <SubCon>
            <LogoArea>
                <LogoImg>
                    <img src={Assets.logo} width="44px" height="50px" alt="logo" />
                </LogoImg>
                <LogoTextArea>
                    <TextArea>
                        <Subtitle>Callisto Network (CLO)</Subtitle>
                        <Subtext>
                            {coinPrice?.usd.toFixed(6)}
                            <Usd>   USD   </Usd>
                            <Percentage color={coinPrice.usd_24h_change >= 0 ? "green": "red"}>
                                {
                                    coinPrice.usd_24h_change >= 0 ?
                                    `(+${coinPrice.usd_24h_change.toFixed(2)}%)`:
                                    `(${coinPrice.usd_24h_change.toFixed(2)}%)`
                                }
                            </Percentage>
                        </Subtext>
                    </TextArea>
                </LogoTextArea>
            </LogoArea>
            <ImgGroup>
                <a href="https://www.coingecko.com/en/coins/callisto-network">
                    <Img src={Assets.coingecko} alt='coingecko' />
                </a>
                <a href="https://coinmarketcap.com/currencies/callisto-network/">
                    <Img src={Assets.coinmarket} alt="coinmarket" />
                </a>
            </ImgGroup>
        </SubCon>
    )
}

const LogoArea = styled.div`
    display: flex;
`;
const SubCon = styled.div`
    width: 100%;
    max-width: 384px;
    min-width: 260px;
`;

const LogoImg = styled.div`
    width: 70px;
    height: 70px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoTextArea = styled.div`
    background: linear-gradient( 
        90deg
     ,rgb(185 229 207 / 37%) 0%,rgb(143 206 196 / 16%) 35%,rgb(90 213 128 / 8%) 100%);  
     width: calc(100% - 70px);
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 80%
    }
    @media (max-width: 375px) {
        width: 80%
    }
`;

const Subtitle = styled.p`
    font-size: 18px;
    font-weight: bold;
    line-height: 30px;
`;

const Subtext = styled.p`
    font-size: 18px;
    padding: 3px;
    text-align: center;
`;

const Usd = styled.span`
    font-size: 13px;
    color: #04110D;
`;

const Percentage = styled.span<{ color: string }>`
    color: ${({color}) => color};
    font-size: 18px;
    padding-left: 10px;
`;

const TextArea = styled.div`
    height: 100%;
    width: 100%;
    padding: 5px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImgGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px 10px 10px;
    // max-width: 288px;
    @media( max-width: 410px ) {
        padding: 20px 5px;
    }
    @media(max-width: 360px) {
        // flex-direction: column;
    }
`;
const Img = styled.img`
    width: 155px;
    height: 40px;
    @media(max-width: 375px) {
        width: 124px;
        height: 32px;
        margin-top: 10px;
    }
`;
export default LeftPane;
