import styled from 'styled-components'

export const GridContainer = styled.div`
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
