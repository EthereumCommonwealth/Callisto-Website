import Row from 'components/Row'
import Spacer from 'components/Spacer'
import { Assets } from 'constants/images'
import { callisto, resources, social } from 'constants/strings'
import { Theme } from 'constants/theme'
import * as React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    padding: 10px;
    padding: 50px 8%;
    background-color: ${Theme.colors.footerbk};
    align-items: center;
    z-index: 999;
    @media (max-width: 1200px) {
        padding: 50px 20px;
    }
`

const InputContainer = styled.div`
    margin: 0 25px;
    border: 1px solid white;
    width: 60%;
    
`

const Input = styled.input`
  font-size: 18px;
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  color: ${Theme.colors.white};
  font-family: ${Theme.fonts.body};
  background-color: ${Theme.colors.footerbk};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
  ::placeholder {
    // color: ${Theme.colors.grey};
  }
  padding: 8px 10px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    // color: ${Theme.colors.grey};
  }
`
export const LinkStyledButton = styled.button<{ color: string }>`
  border: none;
  text-decoration: none;
  background-color: ${({color}) => color};
  padding: 10px 15px;
  font-weight: 500;
`
export const LinkStyledButton2 = styled.div<{ color: string }>`
  border: none;
  text-decoration: none;
  background-color: ${({color}) => color};
`

const Image = styled.div<{ img: string }>`
    background-image: ${({img}) => `url(${img})`};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15px;
    width: 20px;
    background-repeat: no-repeat;
    background-size: contain;
`
const ImageSocial = styled.div<{ img: string }>`
    background-image: ${({img}) => `url(${img})`};
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    margin: 5px 10px;
    background-repeat: no-repeat;
    background-size: contain;
`
const Text = styled.p<{ color: string, fontWeight: string }>`
    font-weight: ${({fontWeight}) => fontWeight};
    color: ${({color}) => color};
    font-family: ${Theme.fonts.body};
    font-size: 18px;
    line-height: 28px;
    opacity: .6;
    margin-left: -5px;
    letter-spacing: 1px;
    &:hover {
        text-decoration: underline;
        color: #34B37C;
        margin-left: 0px;
    }
    @media (max-width: 1200px) {
        font-size: 14px;
    }
`
const MobHidden = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;
const MobShown = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
    }
`;
const MobDiv = styled.div`
    padding-left: 20px;
    @media (max-width: 768px) {
        display: flex;
    }
`;
const SubTitle = styled.div<{ color: string, fontWeight: string }>`
    font-weight: ${({fontWeight}) => fontWeight};
    color: ${({color}) => color};
    font-family: ${Theme.fonts.body};
    font-size: 21px;
    padding: 10px;
    line-height: 26.25px;
    letter-spacing: 1px;
`
const Footer = ({}) => {
    const [value, setValue] = React.useState("");

    const handleInput = (e) => {
        setValue(e.target.value);
    }
    return (
        <Container>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Spacer height ={"20px"} />
                    <SubTitle fontWeight={"700"} color={Theme.colors.white}>Subscribe to our newsletter for updates</SubTitle>
                    <div className="row">
                        <InputContainer>
                            <Input
                                className="recipient-address-input"
                                type="text"
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
                                placeholder={'Your email'}
                                pattern="^(0x[a-fA-F0-9]{40})$"
                                onChange={handleInput}
                                value={value}
                            />
                        </InputContainer>
                        <LinkStyledButton color={Theme.colors.primary}>
                            <Image img={Assets.arrow}></Image>
                        </LinkStyledButton>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Spacer height ={"20px"} />
                    <SubTitle fontWeight={"700"} color={Theme.colors.white}>Join our community</SubTitle>
                    <MobDiv className="row">
                        {
                            social?.map((_item, _i)=>{
                                if( _i > 2 ) return;
                                return (
                                    <MobHidden key={_item.name+ _i.toString()}>
                                        <a href={_item?.link} target="_blank">
                                            <ImageSocial img={_item.icon}  />
                                        </a>
                                    </MobHidden>
                                )
                            })
                        }
                    </MobDiv>
                    <MobDiv className="row">
                        {
                            social?.map((_item, _i)=>{
                                if( _i < 3 ) return;
                                return (
                                    <MobHidden key={_item.name+ _i.toString()}>
                                        <a href={_item?.link} target="_blank">
                                            <ImageSocial img={_item.icon}  />
                                        </a>
                                    </MobHidden>
                                )
                            })
                        }
                    </MobDiv>
                    <MobDiv className="row">
                        {
                            social?.map((_item, _i)=>{
                                return (
                                    <MobShown key={_item.name+ _i.toString()}>
                                        <a href={_item?.link} target="_blank">
                                            <ImageSocial img={_item.icon}  />
                                        </a>
                                    </MobShown>
                                )
                            })
                        }
                    </MobDiv>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Spacer height ={"20px"} />
                    <SubTitle fontWeight={"700"} color={Theme.colors.white}>Resources</SubTitle>
                    {
                        resources?.map((_item, _i)=>{
                            return (
                                <div className="col-sm-12" key={_item.name}>
                                    <LinkStyledButton2 color={"transparent"} >
                                        <a href={_item?.link}>
                                            <Text color={"#FEFFF8"} fontWeight={"300"}>{_item.name}</Text>
                                        </a>
                                    </LinkStyledButton2>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Spacer height ={"20px"} />
                    <SubTitle fontWeight={"700"} color={Theme.colors.white}>Callisto</SubTitle>
                    {
                        callisto?.map((_item, _i)=>{
                            return (
                                <div className="col-sm-12" key={_item.name}>
                                    <LinkStyledButton2 color={"transparent"} >
                                        <a href={_item?.link}>
                                            <Text color={"#FEFFF8"} fontWeight={"300"}>{_item.name}</Text>
                                        </a>
                                    </LinkStyledButton2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}

export default Footer
