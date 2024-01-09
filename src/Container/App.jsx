import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

import ResultPrint from '../assets/depoimento1-1-removebg-preview-3-1.png'
import Certify from '../assets/icons/certificado.png'
import LogoBarb from '../assets/icons/logo-m.png'
import PayMetod from '../assets/icons/metodos-200-1.png-1.webp'
import GentlBarb from '../assets/portrait-male-hairstylist-looking-camera.png'
import Bonus from '../components/BonusArea/Bonus'
import ButtonOrange from '../components/Button/Button'
import Carousel from '../components/Carousel/Carousel'
import FaqArea from '../components/FaqArea/Faq'
import GridModules from '../components/GridModules/Grid'
import GridVideos from '../components/GridVideos/GridVid,'
import PayGaranty from '../components/PayGaranty/Pay'
import TcAre from '../components/TeacArea/TcArea'
import {
  Background,
  Logo,
  Main,
  PayText,
  ParaContainer,
  LogoContainer,
  IframeContainer,
  PayMet,
  ResultContainer,
  CertifyContainer,
  FooterArea
} from './style'

function App() {
  return (
    <>
      <Background>
        <Main>
          <LogoContainer>
            <Logo src={LogoBarb} alt="logo-marca" />
            <PayText>
              APRENDA COMO SE TORNAR UM <b>BARBEIRO PROFISSIONAL</b> E FATURE{' '}
              <b>30 MIL REAIS</b> POR MÊS
            </PayText>
            <p>Mesmo que você seja iniciante e não saiba nada.</p>
          </LogoContainer>
          <IframeContainer>
            <iframe
              width="567"
              height="319"
              src="https://www.youtube.com/embed/XHOmBV4js_E"
              title="Video Placeholder"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <ButtonOrange>Quero começar agora</ButtonOrange>
            <PayMet src={PayMetod} />
          </IframeContainer>
        </Main>
        <section>
          <Carousel />
        </section>
        <section>
          <ParaContainer>
            <div>
              <h2>
                <b>PARA QUEM É O</b> #GENTLEMANBARBER
              </h2>
              <p>
                <CheckCircleIcon />
                Para quem já trabalha na área e quer se atualizar
              </p>
              <p>
                <CheckCircleIcon />
                Para quem está começando do zero e nunca teve contato com o
                mundo da barbearia
              </p>
              <p>
                <CheckCircleIcon />
                Para quem quer se profissionalizar e conquistar o seu sucesso
                nesse mercado que só cresce!
              </p>
              <p>
                <CheckCircleIcon />
                Para quem já trabalha na área e quer se atualizar
              </p>
              <p>
                <CheckCircleIcon />
                Para quem quer se profissionalizar e conquistar o seu sucesso
                nesse mercado que só cresce!
              </p>
            </div>
            <img src={GentlBarb} />
          </ParaContainer>
        </section>
        <section>
          <GridModules></GridModules>
        </section>
        <section>
          <PayGaranty />
        </section>
        <section>
          <GridVideos />
        </section>
        <ResultContainer>
          <div>
            <p>
              Confira Também alguns dos <b>resultados de alunos: </b>
              <KeyboardDoubleArrowRightIcon />
            </p>
            <img src={ResultPrint} alt="print resultados alunos" />
            <img src={ResultPrint} alt="print resultados alunos" />
            <img src={ResultPrint} alt="print resultados alunos" />
            <img src={ResultPrint} alt="print resultados alunos" />
          </div>
          <ButtonOrange>Quero me tornar um Barbeiro Profissional</ButtonOrange>
        </ResultContainer>
        <section>
          <CertifyContainer>
            <h2>Certificado de conclusão</h2>
            <p>
              Após concluir o Curso de GENTLEMAN BARBER você irá baixar um
              maravilhoso certificado com 70 Horas, direto de sua área restrita,
              sem custo adicional.
            </p>
            <img src={Certify} alt="foto certificado" />
          </CertifyContainer>
        </section>
        <section>
          <Bonus />
        </section>
        <section>
          <TcAre />
        </section>
        <section>
          <FaqArea />
        </section>
        <footer>
          <FooterArea>
            <p>
              “Nenhuma informação contida neste produto deve ser interpretada
              como uma afirmação da obtenção de resultados. Qualquer referência
              ao desempenho passado ou potencial de uma estratégia abordada no
              conteúdo não é, e não deve ser interpretada como uma recomendação
              ou como garantia de qualquer resultado específico.”
            </p>
            <ButtonOrange>
              Quero me tornar um Barbeiro Profissional
            </ButtonOrange>
            <Logo src={LogoBarb} alt="logo-marca" />
            <p>Gentleman Barber 2023 © Todos os direitos reservados</p>
          </FooterArea>
        </footer>
      </Background>
    </>
  )
}

export default App
