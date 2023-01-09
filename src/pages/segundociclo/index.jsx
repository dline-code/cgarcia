import React from "react";

import Banner from "../../styles/components/banner/style";
import { Ensecudnariom } from "../../styles/segundociclo/style";

import processing from "../../assets/processing.gif";

function EnsinoSecundario() {
  return (
    <>
      <Banner>
        <h1>Ensino Secundário do II º Ciclo</h1>
      </Banner>
      <Ensecudnariom>
        <h1>Brevemente</h1>
        <img src={processing} alt="Gif de Processamento" />
      </Ensecudnariom>
    </>
  );
}

export default EnsinoSecundario;
