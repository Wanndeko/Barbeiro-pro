import styled from 'styled-components'

import img from '../assets/baner-barba.png'
import GyBg from '../assets/gy-bg.png'

export const Background = styled.div`
  background-image: url(${img});
  /* height: 100vh; */
  background-size: cover;
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 50px;
  text-align: center;
  color: #fff;
`
export const PayMet = styled.img`
  width: 70%;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;

  p {
    font-size: 18px;
  }
`

export const Logo = styled.img`
  width: 60px;
`

export const PayText = styled.h2`
  font-family: Archivo Black;
  font-size: 30px;
  line-height: 30px;
  color: #fff;
  b {
    color: #ec8c08;
  }
`

export const IframeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  iframe {
    border-radius: 5px;
  }
`

export const ParaContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  background-image: url(${GyBg});
  color: #fff;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      font-size: 36px;
      b {
        color: #ec8c08;
        font-size: 50px;
      }
    }

    p {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 18px;
      > svg {
        color: #ec8c08;
      }
    }
  }
`
