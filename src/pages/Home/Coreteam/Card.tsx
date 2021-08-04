import { Theme } from 'constants/theme';
import styled from 'styled-components';
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const Card = ({item}) => {
    
    return (
        <Container>
            <Row >
                <ImgCon src = {item.avatar}/>
                <div style={{display: "flex"}}>
                    <LinkStyledButton>
                        <FiMail color={Theme.colors.white} size = {18}/>
                    </LinkStyledButton>
                    <LinkStyledButton>
                        <FaTwitter color={Theme.colors.white} size = {18}/>
                    </LinkStyledButton>
                    <LinkStyledButton2>
                        <FaLinkedinIn color={Theme.colors.white} size = {20}/>
                    </LinkStyledButton2>
                </div>
            </Row>
            <TsubBtext>
                {item.name}
            </TsubBtext>
            <TroleBtext>
                {item.role}
            </TroleBtext>
            <Line />
            <DescDiv>
                {
                    item.description?.map((_desc, _i) => (
                        <Row key={_i.toString()}>
                            <Text >{_desc}</Text>
                        </Row>
                    ))
                }
                <TextDots>...</TextDots>
            </DescDiv>
        </Container>
    )
}

const Container = styled.div`
    display: block;
    flex-direction: column;
    background-color: #FCFCFC;
    height: 457px;
    padding: 35px 30px 15px 30px;
    @media screen and (max-width: 768px) {
        height: 400px;
    }
`;
const DescDiv = styled.div`
    // align-self: center;
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LinkStyledButton = styled.li`
  border: none;
  background-color: ${Theme.colors.secondary};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 5px;
`

const LinkStyledButton2 = styled.li`
  border: none;
  background-color: ${Theme.colors.secondary};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`

const ImgCon = styled.img`
    width:80px;
    height:80px;
    border-radius: 40px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.2);
`;
const TsubBtext = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-size: 22px;
    line-height: 40px;
    color: ${Theme.colors.secondary};
    margin-top: 40px;
    @media screen and (max-width: 768px) {
    }
`;
const TroleBtext = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-size: 16px;
    line-height: 20px;
    margin-left: 5px;
    margin-top: 5px;
    min-height: 60px;
    color: ${Theme.colors.secondary};
`;
const Text = styled.p`
    font-family: ${Theme.fonts.title};
    font-size: 14px;
    line-height: 20px;
    color:${Theme.colors.secondary};
    padding-bottom: 15px;
`;
const TextDots = styled.p`
    margin-top: -10px;
    font-family: ${Theme.fonts.title};
    font-size: 30px;
    line-height: 20px;
    color:${Theme.colors.secondary};
    padding-bottom: 15px;
`;
const Line = styled.div`
    height: 2px;
    width: 50%;
    background-color: ${Theme.colors.secondary};
    margin-bottom: 30px;
`;
export default Card;
