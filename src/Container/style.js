import styled from "styled-components";
import img from '../assets/baner-barba.png'

export const Background = styled.div`
background-image: url(${img});
height: 100vh;
background-size: cover;

`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: center;
    color: #fff;

    b{
        color: #EC8C08;
    }
`
export const PayText = styled.h2`
font-family: Archivo Black;
font-size: 30px;
color: #fff;
`

export const Logo = styled.img`
width: 60px;
`
export const PayMet = styled.img`
width: 300px;
`

export const ParaContainer = styled.section`
display: flex;
background-color: #000;
color: #fff;
div{
    display: flex;
    flex-direction:column;
}
`