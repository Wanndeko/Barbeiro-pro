import styled from 'styled-components'

import GyBg from '../../assets/gy-bg.png'

export const Container = styled.div`
  background-image: url(${GyBg});
  width: 100%;
  height: 100%;
  text-align: center;

  > div {
    h2 {
      font-size: 40px;
      color: #ec8c08;
    }
    font-size: 24px;
    color: #fff;
  }
`

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, auto));
  gap: 25px;
  padding: 0 80px;
`

export const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  height: 300px;
  background-color: transparent;
  background-image: linear-gradient(180deg, #2b2a2a 0%, #202020 100%);
  font-size: 13px;
  border-radius: 5px;
  border-top: 2px solid #ec8c08;
  box-shadow: 0px 0px 4px 1px #333;
  h3 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: normal;
  }
`
