import styled from 'styled-components'

import BlackBg from '../../assets/black-bg.jpg'

export const TcContainer = styled.div`
  background-image: url(${BlackBg});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px;
`

export const TcTextArea = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: left;
  line-height: 20px;
  letter-spacing: 1px;
  font-weight: 300;
  color: #fff;
  b {
    font-size: 20px;
  }
  h2 {
    color: #ec8c08;
    font-size: 40px;
    margin: 20px 0;
  }
`
