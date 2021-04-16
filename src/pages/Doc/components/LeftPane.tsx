import Title from 'components/Title';
import { Theme } from 'constants/theme';
import * as React from 'react';
import styled from 'styled-components';
import SectionItem from './SetionItem';

const Container = styled.div`
    width: 25%;
    height: 100%;
    min-height: 70vh;
    background-color: ${Theme.colors.lightgrey};
    padding: 10px 0px 0px 30px;
    @media (max-width: 596px) {
        display: none;
    }
`
const data = [{
    section: "General",
    data: [{
        name: "About Soy.Swap",
        link: "/whitepaper/#",
        active: 0,
    },{
        name: "Roadmap",
        link: "/whitepaper/#",
        active: 1,
    }]
},{
    section: "Information",
    data: [{
        name: "FAQ",
        link: "/whitepaper/#",
        active: 2,
    }]
}]
const LeftPane = ({}) => {
    const [curIdx, setCurIdx] = React.useState(0);
    return (
        <Container>
            {data.map((_item, index) => {
                return (
                    <SectionItem item={_item} key={"doc"+index.toString()} idx = {curIdx} setCurIdx={(i) => setCurIdx(i)}/>
                )
            })}
        </Container>
    )
}

export default LeftPane;
