import { Theme } from 'constants/theme';
import * as React from 'react';
import styled from 'styled-components';
import CurrentItem from './CurrentItem';

const Container = styled.div`
    width: 25%;
    padding-top: 65px;
    @media (max-width: 596px) {
        display: none;
    }
`
const data = [{
    name: "Intro",
},{
    name: "About Us",
}]
const LeftPane = ({}) => {
    const [curIdx, setCurIdx] = React.useState(0);
    return (
        <Container>
            <StyledText>Content</StyledText>
            {data.map((_item, index) => {
                return (
                    <CurrentItem
                        item={_item}
                        key={"doc3" + index.toString()}
                        color={curIdx === index? Theme.colors.primary: Theme.colors.primary2}
                        setCurIdx={() => setCurIdx(index)}
                    />
                )
            })}
        </Container>
    )
}

const StyledText = styled.p`
    font-family: ${Theme.fonts.poppin};
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    align-items: center;
    color: #313427;
`

export default LeftPane;
