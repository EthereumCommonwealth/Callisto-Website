import styled from 'styled-components';
import Rect1 from './components/Rect1';
import Rect2 from './components/Rect2';
import Rect3 from './components/Rect3';
import Rect4 from './components/Rect4';

const RectSection = () => {

    return (
        <RectArea>
            <RectTextArea>
                <Rect1>
                    <Prag>
                        A key objective of Callisto Network is the implementation of <Span>core features</Span> based on smart contracts.
                    </Prag>
                </Rect1>
                <Rect2>
                    <Prag>
                        Thus, we have designed and developed a core <Span>set of protocols</Span> built on smart contracts for a reference implementation of a passive income mechanism, a governance system, and a development funding mechanism.
                    </Prag>
                </Rect2>
            </RectTextArea>
            <RectTextArea>
                <Rect3>
                    <Prag>
                        We’re more than convinced that security is the real catalyst for the adoption of any technology. For this reason, we founded the Callisto Security Department,  <Span>a team of decentralized auditors, and a trusted audit process.</Span>
                    </Prag>
                </Rect3>
                <Rect4>
                    <Prag>
                        Callisto Network is a self-sustaining and self-funded blockchain ecosystem that is not financed by pre-mined coins or an ICO.
                    </Prag>
                </Rect4>
            </RectTextArea>
        </RectArea>
    )
}

const RectArea = styled.div`
    padding: 150px 8%;
    width: 100%;
    @media (max-width: 768px) {
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

const Prag = styled.p`
    font-family: sunflower;
    font-size: 18px;
    line-height: 24px;   
`;

const Span = styled.span`
    font-weight: bold;
`;

export default RectSection;
