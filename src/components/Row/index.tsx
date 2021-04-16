import styled from 'styled-components'

const Row = styled.div<{pl: string, pr: string}>`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px;
  padding-left: ${({pl}) => pl};
  padding-right: ${({pr}) => pr};
  align-items: center;
`
export const StartRow = styled.div<{pl: string, pr: string}>`
  width: 100%;
  display: flex;
  padding: 0px;
  padding-left: ${({pl}) => pl};
  padding-right: ${({pr}) => pr};
`

export const Row2 = styled.div<{pl: string, pr: string}>`
  display: flex;
  padding: 0px;
  padding-left: ${({pl}) => pl};
  padding-right: ${({pr}) => pr};
  align-items: center;
`

export const SpaceRow = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 596px) {
      display: none;
    }
`
export const SpaceRowMobile = styled.div`
    display: none;
    @media (max-width: 596px) {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 0px 20px;
      justify-content: space-between;
      align-items: center;
    }
`

export const SpaceRow2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0px;
    justify-content: space-between;
`
export default Row
