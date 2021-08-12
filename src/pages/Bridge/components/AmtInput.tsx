import React from 'react'
import { Theme } from 'constants/theme';
import styled from 'styled-components';

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

const AmtInput: React.FC = () => {

    function handleChange(e) {
        console.log("=========")
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
