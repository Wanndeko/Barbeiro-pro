import ContBoock from '../../assets/icons/contabiidade.png'
import BlueBoock from '../../assets/icons/gestaoe-evndas.png'
import MkBoock from '../../assets/icons/marketinng.png'
import { BonusArea, CardBonus, CardArea, TextArea } from './style'
function Bonus() {
  return (
    <BonusArea>
      <h2>Bônus exclusivos</h2>
      <p>
        E AINDA TEM MAIS! OLHA SÓ O QUE VOCÊ VAI LEVAR COMPLETAMENTE GRÁTIS.
      </p>
      <CardArea>
        <CardBonus>
          <img src={BlueBoock} alt="" />
          <TextArea>
            <h2>Gestão e vendas</h2>
            <p>
              Dignissimos necessitatibus amet sapiente natus iste, quod error
            </p>
          </TextArea>
        </CardBonus>
        <CardBonus>
          <img src={ContBoock} alt="" />
          <TextArea>
            <h2>Contabilidade e gestão fiscal</h2>
            <p>
              Dignissimos necessitatibus amet sapiente natus iste, quod error
            </p>
          </TextArea>
        </CardBonus>
        <CardBonus>
          <img src={MkBoock} alt="" />
          <TextArea>
            <h2>Marketing para redes sociais</h2>
            <p>
              Dignissimos necessitatibus amet sapiente natus iste, quod error
            </p>
          </TextArea>
        </CardBonus>
        <CardBonus>
          <img src={ContBoock} alt="" />
          <TextArea>
            <h2>Planilha de cálculo de margem de lucro</h2>
            <p>
              Dignissimos necessitatibus amet sapiente natus iste, quod error
            </p>
          </TextArea>
        </CardBonus>
      </CardArea>
    </BonusArea>
  )
}

export default Bonus
