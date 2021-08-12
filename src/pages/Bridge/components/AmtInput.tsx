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
    border-radius: 10px;
`;

const Title = styled.p`
    font-size: 16px;
    font-family: ${Theme.fonts.medium};
    line-height: 30px;
    color: ${Theme.colors.secondary};
`;

const StyledInput = styled.input`
    width: 100%;
    background-color: #f5f5f5;
    padding: 10px;
    border: none;
    color: ${Theme.colors.secondary};
    font-size: 35px;
    border-radius: 10px;
`;

const AmtInput = () => {

    function handleChange(e) {
        
    }

    return (
        <Container>
            <Title>Amount</Title>
            <StyledInput
                placeholder="Input amount."
                onChange={handleChange}
            />
        </Container>
    )
}

export default AmtInput;
