import styled from 'styled-components'

import GyBg from '../../assets/gy-bg.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 70px;
  background-image: url(${GyBg});
  text-align: center;

  > div {
    h2 {
      font-size: 40px;
      color: #ec8c08;
    }
    font-size: 24px;
    color: #fff;
  }

  @media (max-width: 580px) {
    > div {
      h2 {
        font-size: 30px;
      }
      font-size: 16px;
    }
  }
  @media (max-width: 480px) {
    padding: 20px;
  }
`

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, auto));
  gap: 25px;

  @media (max-width: 640px) {
    display: block;
  }
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
  border-radius: 5px;
  border-top: 2px solid #ec8c08;
  box-shadow: 0px 0px 4px 1px #333;

  > svg {
    color: #ec8c08;
    font-size: 50px;
  }

  h3 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: normal;
  }

  @media (max-width: 725px) {
    height: 230px;

    gap: 2px;
    h3 {
      font-size: 20px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (max-width: 640px) {
    margin-bottom: 20px;
    > svg {
      font-size: 40px;
    }
    h3 {
      font-size: 24px;
    }
    p {
      line-height: 14px;
    }
  }
`
