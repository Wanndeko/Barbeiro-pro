import styled from 'styled-components'

import GyBg from '../../assets/gy-bg.png'

export const GridContainer = styled.div`
  background-image: url(${GyBg});
  h2 {
    text-align: center;
    font-size: 40px;
    padding: 40px;
  }
  b {
    color: #ec8c08;
  }
  color: #fff;
`

export const VideosContainer = styled.div`
  z-index: 5;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  padding: 20px;

  iframe {
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.28);
  }
`
