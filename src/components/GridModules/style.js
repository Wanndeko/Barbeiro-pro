import styled from 'styled-components'

export const Container = styled.div`
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
    margin: 50px 0;
  }
`

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, auto));
  gap: 8px;
`

export const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  height: 300px;
  width: 360px;
  background-color: #232222;
  font-size: 13px;
  border-radius: 5px;
  border-top: 2px solid #ec8c08;
  box-shadow: 0px 0px 4px 1px #333;
  h3 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
`
