import { Background, Logo, PayMet, Main, PayText, ParaContainer } from "./style"
import LogoBarb from "../assets/icons/logo-m.png"
import PayMetod from "../assets/icons/metodos-200-1.png-1.webp"
import ButtonOrange from "../components/Button/Button"
import Carousel from "../components/Carousel/Carousel"
import GentlBarb from "../assets/portrait-male-hairstylist-looking-camera.png"
import GridModules from "../components/GridModules/Grid"
import warranty from "../assets/icons/garantia.png"
import GridVideos from "../components/GridVideos/GridVid,"
import ResultPrint from "../assets/depoimento1-1-removebg-preview-3-1.png"
import Certify from "../assets/icons/certificado.png"
import Bonus from "../components/BonusArea/Bonus"
import TcAre from "../components/TeacArea/TcArea"
import FaqArea from "../components/FaqArea/Faq"


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
            <img src={GentlBarb} />
          </ParaContainer>
        </section>
        <section>
          <GridModules></GridModules>
        </section>
        <section>
          <div>
            <p>VOCÊ DEVE ESTAR SE PERGUNTANDO:<br />
              QUANTO VAI CUSTAR TUDO ISSO?</p>
            <p>Você vai levar esse curso mega completo, e
              a oportunidade se tornar,
              um barbeiro profissional, apenas por:</p>
            <p>12x de 47,14</p>
            <p>ou apenas R$499 à vista</p>
            <p>atenção, as vagas são limitadas!</p>
            <ButtonOrange />
            <PayMet src={PayMetod} />
          </div>
          <div>
            <img src={warranty} />
            <p>Ainda não tem certeza? Não se preocupe.
              Se o conteúdo descrito acima não for o mesmo que você receber,
              você tem 07 dias de garantia e vamos devolver a quantia paga,
              sem burocracia!Lembrando que seu acesso a plataforma e VITALÍCIO e
              nosso curso e constantemente atualizado com novas técnicas e
              informações que vão fazer de você um Barbeiro de Sucesso.</p>
          </div>
        </section>
        <section>
          <GridVideos />
        </section>
        <section>
          <p>
            Confira Também alguns dos resultados de alunos :
          </p>
          <img src={ResultPrint} alt="print resultados alunos" />
          <ButtonOrange />
        </section>
        <section>
          <h2>
            Certificado de conclusão
          </h2>
          <p>
          Após concluir o Curso de GENTLEMAN BARBER você irá baixar um maravilhoso certificado com
          70 Horas, direto de sua área restrita, sem custo adicional.
          </p>
          <img src={Certify} alt="foto certificado" />
        </section>
        <section>
          <Bonus/>
        </section>
        <section>
        <TcAre/>
        </section>
        <section>
          <FaqArea/>
        </section>
        <footer>
          <p>
          “Nenhuma informação contida neste produto deve ser interpretada como uma afirmação da obtenção de resultados.
           Qualquer referência ao desempenho passado ou potencial de uma estratégia abordada no conteúdo não é,
            e não deve ser interpretada como uma recomendação ou como garantia de qualquer resultado específico.”
          </p>
          <ButtonOrange/>
          <Logo src={LogoBarb} alt="logo-marca" />
          <p>Gentleman Barber 2023 © Todos os direitos reservados</p>
        </footer>
      </Background>
    </>
  )
}

export default App
