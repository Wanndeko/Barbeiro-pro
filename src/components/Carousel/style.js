import styled from 'styled-components'

import GyBg from '../../assets/gy-bg.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  background-image: url(${GyBg});
  padding: 60px;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 69%);
  }

  > div {
    position: absolute;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
    text-align: center;
    color: #fff;
    h2 {
      font-size: 30px;
      letter-spacing: 1px;
    }
    p {
      font-size: 18px;
    }
  }

  img {
    height: 260px;
    border-radius: 5px;
  }

  .swiper {
    position: absolute;
    z-index: 5;
    width: 100%;
  }
`

export const TextContainer = styled.div``
