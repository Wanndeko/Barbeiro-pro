import warranty from '../../assets/icons/garantia.png'
import PayMetod from '../../assets/icons/metodos-200-1.png-1.webp'
import ButtonOrange from '../../components/Button/Button'
import {
  PayMet,
  PayContainer,
  SplitContainer,
  BtnContainer,
  SevenDaysContainer
} from './style'

function PayGaranty() {
  return (
    <PayContainer>
      <SplitContainer>
        <p>
          VOCÊ DEVE ESTAR SE PERGUNTANDO:
          <br />
          QUANTO VAI CUSTAR TUDO ISSO?
        </p>
        <p>
          Você vai levar esse curso mega completo, e a oportunidade se tornar,
          um barbeiro profissional, apenas por:
        </p>
        <p>
          <b>12x de 47,14</b>
        </p>
      </SplitContainer>
      <BtnContainer>
        <p>ou apenas R$499 à vista</p>
        <p>
          <u>atenção, as vagas são limitadas!</u>
        </p>
        <ButtonOrange>Quero começar agora</ButtonOrange>
        <PayMet src={PayMetod} />
      </BtnContainer>
      <SevenDaysContainer>
        <img src={warranty} />
        <p>
          Ainda não tem certeza? Não se preocupe. Se o conteúdo descrito acima
          não for o mesmo que você receber, você tem 07 dias de garantia e vamos
          devolver a quantia paga, sem burocracia!Lembrando que seu acesso a
          plataforma e VITALÍCIO e nosso curso e constantemente atualizado com
          novas técnicas e informações que vão fazer de você um Barbeiro de
          Sucesso.
        </p>
      </SevenDaysContainer>
    </PayContainer>
  )
}

export default PayGaranty
