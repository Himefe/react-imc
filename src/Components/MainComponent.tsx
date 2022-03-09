import React from "react";
import useForm from "../Hooks/useForm";
import imc from "../imc";
import Input from "./Form/Input";

const MainComponent = () => {
  const [grau, setGrau] = React.useState<objeto | undefined | null>();
  const altura = useForm();
  const peso = useForm();

  const { levels, calculoImc } = imc();

  type objeto = {
    title: string;
    color: string;
    icon: "down" | "up";
    imc: number[];
    atualImc?: number;
  };

  return (
    <main>
      <section className="leftSide">
        <div>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
        </div>
        <form>
          <Input
            value={altura.value}
            label="Altura"
            id="alturaInput"
            onChange={altura.onChange}
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)."
            setValue={altura.setValue}
          />
          <Input
            value={peso.value}
            label="Peso"
            id="pesoInput"
            onChange={peso.onChange}
            type="number"
            placeholder="Digite o seu peso. Ex: 72.5 (em kg)."
            setValue={peso.setValue}
          />
        </form>
        <div className="buttonArea">
          <button
            className="buttonCalc"
            onClick={() => setGrau(calculoImc(+altura.value, +peso.value))}
          >
            Calcular
          </button>
        </div>
      </section>
      <section className="rightSide">
        {grau ? (
          <div className="yourIMC">
            <p>
              Seu IMC atual é de <strong>{grau.atualImc?.toFixed(2)}</strong>
            </p>
          </div>
        ) : null}
        <div className="cards">
          {levels.map((item, index) => (
            <div
              className={`card ${
                grau && item.title === grau.title ? "marked" : ""
              }`}
              style={{ backgroundColor: item.color }}
              key={index}
            >
              <div className="icon">
                {item.icon === "up" ? <p>👍</p> : <p>👎</p>}
              </div>
              <p>{item.title}</p>
              <p>
                IMC entre {item.imc[0]} e {item.imc[1]}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainComponent;
