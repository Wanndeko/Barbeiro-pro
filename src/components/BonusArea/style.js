import styled from 'styled-components'

import GyBg from '../../assets/gy-bg.png'

export const BonusArea = styled.div`
  background-image: url(${GyBg});
  padding: 70px 40px;
  color: #fff;
  text-align: center;
  > h2 {
    font-size: 40px;
  }
`

export const CardArea = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`

export const CardBonus = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 40px;
  border-radius: 5px;
  img {
    height: 160px;
  }

  background-color: #2b2a2a;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.28);
`

export const TextArea = styled.div`
  text-align: left;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #fff;

  p {
    font-weight: 300;
    letter-spacing: 1px;
  }
`
