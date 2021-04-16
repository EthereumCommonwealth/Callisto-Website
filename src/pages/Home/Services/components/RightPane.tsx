import ImageView from 'components/ImageView';
import { SpaceRow2 } from 'components/Row';
import ShadowView from 'components/ShadowView';
import Spacer from 'components/Spacer';
import TextArea from 'components/TextArea';
import Title from 'components/Title';
import { Assets } from 'constants/images';
import styled from 'styled-components';

const RightPane = () => {
    
    return (
        <MobileHidden className="col-lg-6"> 
            <SubView>
                <ImageView img={Assets.rect2} height={"160px"} width={'100%'}>
                    <CenterdView>
                        <TitleText >Decentralized</TitleText>
                        <Spacer height={"20px"}/>
                        <TitleText >Blockchain Ecosystem</TitleText>
                    </CenterdView>
                </ImageView>
                <Padding padding="70px">
                    <img src={Assets.auditmark} width="100%" />
                </Padding>
                <MagicMargin mt={"-100px"}>
                    <ShadowView bk="#F8F8F8" padding="70px 70px 70px 70px" shadow="0px 8px 8px rgba(0, 0, 0, 0.1), 0px 3px 2px rgba(3, 25, 15, 0.09)" margin="-50px 0px 0px 0px">
                        <Title fontWeight="500" style={{paddingLeft: '0px', paddingRight: '0'}}>
                            Why Audit a Smart Contract?
                        </Title>
                        <Padding padding="0px 0px 0px 0px">
                        <TextArea color="rgba(0,0,0,.7)">
                            Despite popular belief, a smart contract is not safe by nature; as a code, it is subject to bugs and flaws as any program.
                        </TextArea>
                        <Spacer height="20px" />
                        <TextArea color="rgba(0,0,0,.7)">
                            Such vulnerabilities have already led to several hacking incidents that had severe consequences, involving losses of several hundred million dollars.
                        </TextArea>
                        </Padding>
                    </ShadowView>
                </MagicMargin>
                <MagicMargin mt={"-70px"}>
                <SpaceRow2>
                    <div></div>
                    <ImageView img={Assets.poly3} width="220px" height="230px"></ImageView>
                </SpaceRow2>
                </MagicMargin>
            </SubView>
        </MobileHidden>
    )
}

const MobileHidden = styled.div`
    width: 50%;
    display: flex;
    @media (max-width: 768px) {
        display: none;
    }
`

const SubView = styled.div`
    width: 100%;
    display: flex;
    padding-left: 50px;
    flex-direction: column;

`;
const Padding = styled.div<{padding: string}>`
    width: 100%;
    padding: ${({padding})=>padding};
`;
const MagicMargin = styled.div<{mt: string}>`
    width: 100%;
    margin-top: ${({mt}) => mt};
    z-index: -1;
`
const CenterdView = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 30px;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        width: 300px;
        height: 60px;
    }
`;

const TitleText =  styled.p`
    font-family: Sunflower;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    display: flex;
    align-items: center;
    color: #FFF;
    padding: 10px 0px;
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 20px;
    }
    @media (max-width: 1024px) {
        font-size: 30px;
        line-height: 30px;
    }
`;
export default RightPane;
