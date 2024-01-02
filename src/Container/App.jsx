import { Background, Logo, PayMet, Main, PayText, ParaContainer } from "./style"
import LogoBarb from "../assets/icons/logo-m.png"
import PayMetod from "../assets/icons/metodos-200-1.png-1.webp"
import ButtonOrange from "../components/Button/Button"
import Carousel from "../components/Carousel/Carousel"
import GentlBarb from "../assets/portrait-male-hairstylist-looking-camera.png"
import GridModules from "../components/GridModules/Grid"

function App() {

  return (
    <>
      <Background>
        <Main>
          <div>
            <Logo src={LogoBarb} alt="logo-marca" />
            <PayText>APRENDA COMO SE TORNAR UM <b>BARBEIRO PROFISSIONAL</b> E FATURE <b>30 MIL REAIS</b> POR MÊS</PayText>
            <p>Mesmo que você seja iniciante e não saiba nada.</p>
            <iframe width="567" height="319" src="https://www.youtube.com/embed/XHOmBV4js_E" title="Video Placeholder" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <ButtonOrange />
            <PayMet src={PayMetod} />
          </div>
        </Main>
        <section>
          <Carousel />
        </section>
        <section>
            <ParaContainer>
              <div>
              <h2>PARA QUEM É O
                #GENTLEMANBARBER</h2>
              <p>Para quem já trabalha na área e quer se atualizar</p>
              <p>Para quem está começando do zero e nunca teve contato com o mundo da barbearia</p>
              <p>Para quem quer se profissionalizar e conquistar o seu sucesso nesse mercado que só cresce!</p>
              <p>Para quem já trabalha na área e quer se atualizar</p>
              <p>
                Para quem quer se profissionalizar e conquistar o seu sucesso nesse mercado que só cresce!</p>
                </div>
            <img src={GentlBarb}/>
            </ParaContainer>
        </section>
        <section>
          <GridModules></GridModules>
        </section>
      </Background>
    </>
  )
}

export default App
