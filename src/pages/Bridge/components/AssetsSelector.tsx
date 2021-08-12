import Spacer from 'components/Spacer';
import { Assets } from 'constants/images';
import { tokenList } from 'constants/strings';
import { Theme } from 'constants/theme';
import React, { useState } from 'react'
import styled from 'styled-components';
import Modal from 'styled-react-modal'
import { FaSearchDollar, FaWindowClose } from 'react-icons/fa';
const Container = styled.div`
    width: calc(100%);
`;

const Title = styled.p`
    font-size: 16px;
    font-family: ${Theme.fonts.medium};
    line-height: 30px;
    color: ${Theme.colors.secondary};
`;

const StyledButton = styled.div`
    background-color: #f5f5f5;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
`;
const StyledButton2 = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${Theme.colors.primary};
`;

const StyledText = styled.p`
    font-size: 14px;
    font-family: ${Theme.fonts.text};
    line-height: 18px;
    color: ${Theme.colors.secondary};
`;
const StyledText2 = styled.p`
    font-size: 12px;
    font-family: ${Theme.fonts.text};
    line-height: 18px;
    color: ${Theme.colors.secondary};
`;

const StyledImg = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

const StyledModal = Modal.styled`
    width: 35%;
    min-width: 300px;
    height: 400px;
    border-radius: 20px;
    background-color: #f5f5f5;
`

const TopSection = styled.div`
    background-color: #FFF;
    padding: 10px;
    border-radius: 20px;
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 10px;
`;

const StyledInput = styled.input`
    margin: 0 10px;
    width: 100%;
    background-color: #f5f5f5;
    padding: 5px;
    border: none;
    color: ${Theme.colors.secondary};
`;

const BottomSection = styled.div`
    margin: 20px 10px 10px;
    width: calc(100% - 20px);
    height: 300px;
    background-color: #FFF;
    border-radius: 20px;
`;

const AssetsSelector: React.FC = () => {
    const [curToken, setCurToken] = useState(tokenList[0]);
    const [renderList, setRenderList] = useState(tokenList);

    const [isOpen, setIsOpen] = useState(false)

    function toggleModal(e) {
      setIsOpen(!isOpen)
    }

    function handleChange(e) {
        const value = e.target.value.toUpperCase();
        const temp = tokenList.filter((item) => item.symbol.includes(value));
        setRenderList(temp);
    }

    function handleSelect(e, item) {
        setCurToken(item);
        toggleModal(e);
    }
    return (
        <Container>
            <Title>Assets</Title>
            <StyledButton onClick={toggleModal}>
                <StyledImg src={curToken.img} alt="logo_img"/>
                <StyledText>{curToken.symbol}</StyledText>
            </StyledButton>
            <StyledModal
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
            >
                <TopSection>
                    <SearchBox>
                        <FaSearchDollar size={24} color="grey" />
                        <StyledInput
                            onChange={handleChange}
                        />
                        <FaWindowClose size={24} color="grey" onClick={toggleModal} />
                    </SearchBox>
                </TopSection>
                <BottomSection>
                    {
                        renderList.map((item) => (
                            <StyledButton2 onClick={(e) => handleSelect(e, item)} key={item.symbol}>
                                <StyledImg src={item.img} alt="logo_img"/>
                                <div>
                                    <StyledText>{item.symbol}</StyledText>
                                    <StyledText2>{item.name}</StyledText2>
                                </div>
                            </StyledButton2>
                        ))
                    }
                </BottomSection>
            </StyledModal>
        </Container>
    )
}

export default AssetsSelector;
