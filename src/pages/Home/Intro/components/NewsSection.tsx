import { Link } from 'react-router-dom';
import styled from 'styled-components';
//d0dcdb, d0dcdb
const NewsSection = () => {
    return (
        <NewsBar>
            <LinkStyledButton color={"#34B37C"}>
                <Link to="/callisto-dynamic-monetary-policy/" style={{color: "#0D281C",}}>
                    NEWS
                </Link>
            </LinkStyledButton>
            <NewsInput>
                {/* <Text color="#000">&nbsp;03/05</Text> */}
                <Text color="#000">Callisto Dynamic Monetary Policy</Text>
            </NewsInput>
        </NewsBar>
    )
}

const NewsBar = styled.div`
    display: flex;
    // width: 672px;
    height: 42px;
    margin-top: 150px;
    margin-left: 8%;
    z-index: 1;
    @media (max-width: 768px) {
        margin-top: 100px;
        margin-left: 20px;
        width: calc(100% - 20px);
    }
    @media (max-width: 596px) {
        margin-top: 0px;
        margin-left: 0px;
        width: 100%;
    }
    
`;

export const LinkStyledButton = styled.button<{ color: string }>`
    border: none;
    text-decoration: none;
    background-color: ${({color}) => color};
    padding: 10px 15px;
    font-weight: 500;
    font-size: 24px;
    @media (max-width: 596px) {
        font-size: 14px;
    }
`;

const NewsInput = styled.div`
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    align-items: center;
    color: #d0dcdb;
    // background: linear-gradient(
    //     90deg
    //     ,rgb(3 9 6 / 37%) 0%,rgb(55 106 98 / 16%) 35%,rgb(24 99 47 / 8%) 100%);
    width: 400px;
    height: 42px;
    padding-right: 10px;
`;

const Text = styled.p<{ color: string}>`
    font-family: sunflower;
    font-weight: 300;
    font-size: 24px;
    color: ${({color}) => color} ;
    @media (max-width: 596px) {
        font-size: 14px;
    }
`;

export default NewsSection;
