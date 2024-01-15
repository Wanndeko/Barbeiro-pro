import styled from 'styled-components'

import img from '../assets/baner-barba.png'
import CutBg from '../assets/baner-corte.jpg'
import GyBg from '../assets/gy-bg.png'
import BarbThumb from '../assets/vdd.png'

export const Background = styled.div`
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  padding: 20px 70px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 69%);
  }
`

export const Main = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 50%;

  text-align: center;
  color: #fff;
  z-index: 5;
`

export const PayMet = styled.img`
  width: 70%;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  text-align: center;
  p {
    font-size: 18px;
  }
`

export const Logo = styled.img`
  width: 60px;
`

export const PayText = styled.h2`
  width: 80%;
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
    background-image: url(${BarbThumb});
    background-size: cover;
  }
`

export const ParaContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 70px 0px 70px;
  background-color: #0e0e0e;
  color: #fff;
`

export const Paratext = styled.div`
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
`

export const ResultContainer = styled.div`
  background-image: url(${GyBg});
  display: flex;
  flex-direction: column;
  padding: 70px;
  gap: 30px;

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  p {
    font-size: 35px;
    color: #fff;
    width: 30%;

    > svg {
      font-size: 50px;
    }
  }

  b,
  svg {
    color: #ec8c08;
  }

  img {
    height: 400px;
  }
`

export const CertifyContainer = styled.div`
  background-image: url(${CutBg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 70px 120px;
  text-align: center;
  color: #fff;

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
  }
  img {
    width: 60%;
  }
`
export const FooterArea = styled.div`
  background-image: url(${GyBg});
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 70px;
  color: #fff;
`
