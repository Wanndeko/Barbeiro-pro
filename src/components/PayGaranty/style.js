import styled from 'styled-components'

export const PayMet = styled.img`
  width: 50%;
`

export const PayContainer = styled.div`
  background-color: #0e0e0e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 70px;
  text-align: center;
  font-size: 18px;
  color: #fff;
`

export const SplitContainer = styled.div`
  padding: 20px;
  p {
    margin-bottom: 10px;
  }
  b {
    text-transform: uppercase;
    font-size: 120px;
    color: #ec8c08;
    filter: drop-shadow(0px 10px 4px #000);
  }
`
export const BtnContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  p {
    font-size: 18px;
  }
`
export const SevenDaysContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: justify;
  gap: 10px;
  padding: 20px 50px;

  p {
    font-size: 18px;
  }
  img {
    height: 160px;
  }
`
