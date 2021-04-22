import { social } from 'constants/strings';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SocialSection = () => {
    return (
        <SocialArea className="row">
            {
                social?.map((_item, _i)=>{
                    return (
                        <div key={_item.name}>
                            <a href={_item?.link} target="_blank">
                                <ImageSocial img={_item.icon}   />
                            </a>
                        </div>
                    )
                })
            }
        </SocialArea>
    )
}
const SocialArea = styled.div`
    display: none;
    z-index: 1;
    @media (max-width: 596px) {
        display: felx !important;
        margin: 80px 0px 0px 0px;
        justify-content: center;
        width: 100%;
    }
    @media (max-width: 375px) {
        margin: 50px 0px 0px 0px;
    }
    @media (max-width: 330px) {
        margin: 15px 0px 0px 0px;
    }
`;

const ImageSocial = styled.div<{ img: string }>`
    background-image: ${({img}) => `url(${img})`};
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    margin: 0px 10px;
    background-repeat: no-repeat;
    background-size: contain;
    @media( max-width: 300px ) {
        height: 22px;
        width: 22px;
    }
`;
export default SocialSection;
