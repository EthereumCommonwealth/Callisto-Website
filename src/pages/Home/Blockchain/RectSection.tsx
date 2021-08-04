import { Assets } from 'constants/images';
import { Theme } from 'constants/theme';
import styled from 'styled-components';

const RectSection = () => {

    return (
        <RectArea>
            <RectTextArea>
                <Rect1>
                    <Topdiv>
                        <Prag>What is</Prag>
                        <Prag>Callisto Network?</Prag>
                    </Topdiv>
                    <EcoCon>
                        <Prag2>ECOSYSTEM</Prag2>
                    </EcoCon>
                    <Img src={Assets.back3}></Img>
                </Rect1>
            </RectTextArea>
        </RectArea>
    )
}

const RectArea = styled.div`
    padding: 100px 0 0 8%;
    width: 40%;
    @media (max-width: 1100px) {
        // width: 30%;
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 30px 15px;
    }
`;
const RectTextArea = styled.div`
    display: flex;
    @media (max-width: 1024px) {
        display: block;
        width: 100%;
    }
`;
const Rect1 = styled.div`
    position: relative;
    background-color: ${Theme.colors.primary};
    width: 302px;
    height: 295px;
    max-height: 295px;
    border-radius: 15px 15px 15px 0px;
    box-sizing: border-box;
    @media (max-width: 1100px) {
        width: 250px;
        height: 230px;
    }
    @media (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
        width: 250px;
        height: 180px;
    }
`;
const Prag = styled.p`
    font-family: ${Theme.fonts.body};
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;
    color: ${Theme.colors.white};
`;

const Prag2 = styled.p`
    font-family: ${Theme.fonts.body};
    font-weight: bold;
    font-size: 25px;
    padding-top: 5px;
    color: ${Theme.colors.white};
`;

const Topdiv = styled.div`
    padding: 20px;
`;

const EcoCon = styled.div`
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 200px;
    background-color: #54E2A6;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 40px 0 0;
    z-index: 9;
`;
const Img = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
`;
export default RectSection;
