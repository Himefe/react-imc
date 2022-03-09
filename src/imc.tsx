import React from "react";

type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  atualImc?: number;
};

const levels: Level[] = [
  { title: "Magreza", color: "#96A3AB", icon: "down", imc: [0, 18.5] },
  { title: "Normal", color: "#0EAD69", icon: "up", imc: [18.6, 24.9] },
  { title: "Sobrepeso", color: "#E2B039", icon: "down", imc: [25.0, 30] },
  { title: "Obesidade", color: "#C3423E", icon: "down", imc: [30.1, 99] },
];

const calculoImc = (height: number, weight: number) => {
  if (height !== undefined && weight !== undefined) {
    let imc = weight / (height * height);

    for (let index in levels) {
      if (imc >= levels[index].imc[0] && imc <= levels[index].imc[1]) {
        let novaArray = { ...levels[index] };
        novaArray.atualImc = imc;
        return novaArray;
      }
    }

    return null;
  }
};

const imc = () => {
  return {
    levels,
    calculoImc,
  };
};

export default imc;
