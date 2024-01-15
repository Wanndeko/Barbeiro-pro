import styled from 'styled-components'

import GyBg from '../../assets/gy-bg.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${GyBg});
  padding: 0 60px;
  overflow: hidden;
  > div {
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
    width: 100%;
  }
`

export const TextContainer = styled.div``
