import React from "react";

import { QuemSomos } from "../../styles/components/quemsomos/style";

import anuncio from "../../assets/anuncio-image.jpg";
import quemsomos2 from "../../assets/quemsomos-image2.jpg";

function QuemsomosTextImages() {
  return (
    <QuemSomos id="QuemSomos">
      <h2> Quem Somos </h2>
      <p>
        {" "}
        O nosso Colégio Ofrece oportunidades para o crescimento dos alunos tendo
        algumas perspectivas
        <br /> pedagógicas e cristãs que permitem a realização da pessoa humana
        na sua totalidade.{" "}
      </p>
      <div>
        <img src={anuncio} alt="" />
        <div>
          <h3>Identidade Carismática</h3>

          <p>
            A nossa proposta educativa baseia-se no sistema preventivo da
            Síntese da Educação, orientação para se tornarem bons cristãos e
            honestos cidadãos. A razão leva a um diálogo respeitoso que se opõe
            ao autoritarismo. Ajuda a desenvolver o sentido crítico, a
            capacidade de pensar, o valor e o repseito da pessoa, os valores
            espirituais.
          </p>
          <a href="/"> Ver mais... </a>
        </div>
      </div>
      <div>
        <div>
          <h3>Valores</h3>

          <p>
            A nossa proposta educativa tensiona ser integral, por isso baseia-se
            nas quatro perespectivas Culturais, Aprender e Aprender.
          </p>

          <p>
            Nesta perspectiva oferecemos ao educando a possibilidade de elaborar
            inteligentemente as categorias concetuais que lhe permitam
            inserir-se na sociedade, vivendo a realidade.
          </p>

          <a href="/"> Ver mais... </a>
        </div>
        <img src={quemsomos2} alt="" />
      </div>
    </QuemSomos>
  );
}

export default QuemsomosTextImages;
