import { BonusArea, CardBonus } from "./style";
import BlueBoock from "../../assets/icons/gestaoe-evndas.png"
function Bonus() {
    return (
        <BonusArea>
            <h2>
                Bônus exclusivos
            </h2>
            <p>
                E AINDA TEM MAIS! OLHA SÓ O QUE VOCÊ VAI LEVAR COMPLETAMENTE GRÁTIS.
            </p>
            <div>
                <CardBonus>
                    <h2>Gestão e vendas</h2>
                    <img src={BlueBoock} alt="" />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos necessitatibus amet sapiente natus iste, quod error
                    </p>
                </CardBonus>
                <CardBonus>
                    <h2>
                        Contabilidade e gestão fiscal</h2>
                    <img src={BlueBoock} alt="" />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos necessitatibus amet sapiente natus iste, quod error
                    </p>
                </CardBonus>
                <CardBonus>
                    <h2>Marketing para redes sociais</h2>
                    <img src={BlueBoock} alt="" />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos necessitatibus amet sapiente natus iste, quod error
                    </p>
                </CardBonus>
                <CardBonus>
                    <h2>Planilha de cálculo de margem de lucro</h2>
                    <img src={BlueBoock} alt="" />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos necessitatibus amet sapiente natus iste, quod error
                    </p>
                </CardBonus>
            </div>
        </BonusArea>);
}

export default Bonus;