import { social } from 'constants/strings';
import styled from 'styled-components';


const SocialSection = () => {
    return (
        <SocialArea className="row">
            {
                social?.map((_item, _i)=>{
                    return (
                        <ImageSocial img={_item.icon}  key={_item.name}/>
                    )
                })
            }
        </SocialArea>
    )
}
const SocialArea = styled.div`
    display: none;
    @media (max-width: 596px) {
        display: felx;
        margin: 80px 0px 0px 0px;
        justify-content: center;
        width: 100%;
    }
    @media (max-width: 330px) {
        margin: 20px 0px 0px 0px;
    }
`;

const ImageSocial = styled.div<{ img: string }>`
    background-image: ${({img}) => `url(${img})`};
    justify-content: center;
    align-items: center;
    height: 16px;
    width: 16px;
    margin: 0px 10px;
    background-repeat: no-repeat;
    background-size: contain;
`;
export default SocialSection;
