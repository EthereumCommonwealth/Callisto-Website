import Spacer from 'components/Spacer';
import { Theme } from 'constants/theme';
import React, { useState } from 'react'
import styled from 'styled-components';
import { FaLongArrowAltRight } from 'react-icons/fa';
import AssetsSelector from './components/AssetsSelector';
import FromCard from "./components/FromCard";
import ToCard from "./components/ToCard";
import AddNetworkSection from './components/AddNetworkSection';
import ErrorSection from './components/ErrorSection';
import AmtInput from './components/AmtInput';
import Reminder from './components/Reminder';

const Container = styled.div`
    background-color: #FFFFFF;
    padding: 40px;
    border-radius: 20px;
    width: calc(75% - 40px);
    margin-left: 40px;
`;

const NetworkSection = styled.div`
    display: flex;
    align-items: center;
`;

const DropCon = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9dbde;
    border-radius: 3px;
    width: 40px;
    height: 30px;
    margin: 30px 10px 0px;
    :hover {
        background-color: ${Theme.colors.primary};
    }
`;

const StyledButton = styled.button<{disabled: boolean}>`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-size: 26px;
    font-family: ${Theme.fonts.textBold};
    color: ${({disabled}) => disabled? `#51768d`: Theme.colors.secondary};
    background-color: ${({disabled}) => disabled? `#7ea594`: Theme.colors.primary};
`;
const CurrentStatus = {
    curAsset: "USDT",
    fromNetwork: "Callisto Network",
    toNetwork: "Binance Smart Chain"
}
const RightPane: React.FC = () => {
    // const { login, logout } = useAuth()

    const [chainError, setChainError] = useState(true);
    const [disabled, setDisabled] = useState(true);

    function handleNext(e) {
        console.log(e.target.value)
    }

    return (
        <Container>
            <AssetsSelector />
            <Spacer height="30px" />
            <NetworkSection>
                <FromCard />
                <DropCon>
                    <FaLongArrowAltRight color={Theme.colors.secondary} size={16}/>
                </DropCon>
                <ToCard />
            </NetworkSection>
            <Spacer height="30px" />
            <AddNetworkSection />
            <Spacer height="30px" />
            {
                chainError && <ErrorSection currentStatus={CurrentStatus}/>
            }
            <Spacer height="30px" />
            <AmtInput />
            <Spacer height="30px" />
            <StyledButton disabled={disabled} onClick={handleNext}>Next</StyledButton>
            <Spacer height="30px" />
            <Reminder symbol={CurrentStatus.curAsset}/>
        </Container>
    )
}

export default RightPane;
