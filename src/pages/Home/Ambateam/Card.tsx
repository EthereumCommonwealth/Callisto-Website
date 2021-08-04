import { FaTelegramPlane } from 'react-icons/fa';
import Row, { RowCenter } from 'components/Row';
import Spacer from 'components/Spacer';
import { Assets } from 'constants/images';
import { Theme } from 'constants/theme';
import styled from 'styled-components';
const Card = ({item}) => {
    
    return (
        <Container>
            <ImgCon src = {item.avatar}>
            </ImgCon>
            <TsubBtext>
                {item.name}
            </TsubBtext>
            <TroleBtext>
                {item.role}
            </TroleBtext>
            <Line />
            <RowCenter >
                <LinkStyledButton>
                    <FaTelegramPlane color={Theme.colors.secondary} />
                </LinkStyledButton>
                <Text>{item.tele}</Text>
            </RowCenter>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FCFCFC;
    height: 100%;
    padding: 20px;
    height: 300px;
`;
const ImgCon = styled.img`
    width:80px;
    height:80px;
    border-radius: 40px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.2);
`;
const TsubBtext = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-size: 20px;
    line-height: 40px;
    color: ${Theme.colors.secondary};
    margin-top: 20px;
    @media (max-width: 768px) {
        line-height: 30px;
    }
`;
const TroleBtext = styled.p`
    font-family: ${Theme.fonts.title};
    font-size: 16px;
    line-height: 24px;
    color: ${Theme.colors.secondary};
`;
const Line = styled.div`
    height: 2px;
    width: 50%;
    background-color: ${Theme.colors.secondary};
    margin: 20px 0;
`;
const LinkStyledButton = styled.li`
  border: none;
  width: 30px;
  display: flex;
  align-items: center;
  border-radius: 15px;
`
const Text = styled.p`
    font-family: ${Theme.fonts.title};
    font-size: 16px;
    line-height: 20px;
    color: ${Theme.colors.secondary};
`;
export default Card;
