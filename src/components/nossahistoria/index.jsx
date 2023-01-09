import React from "react";

import {
  NossaHistoria,
  TimeLine,
  PointHistory,
  HeaderHistoria,
  ContainerButton,
} from "../../styles/components/nossahistoria/style";

function Nossahistoria() {
  return (
    <>
      <HeaderHistoria>
        <h2>Nossa História</h2>
        <p>Conheça o Percurso do Colégio Gracia</p>
      </HeaderHistoria>
      <NossaHistoria>
        <TimeLine>
          <span></span>
          <p></p>
          <span></span>
        </TimeLine>

        <PointHistory>
          <div>
            <h1>2005</h1>
            <p>
              Este colégio teve a sua iniciativa no quintal da tia Cati (Mãe do
              Professor Bosvaldo ou Boy) como uma explicação no dia 5 de março
              2005 inicialmente com 11 alunos.
            </p>
          </div>
          <span></span>
        </PointHistory>
        <PointHistory>
          <span></span>
          <div>
            <h1>2007</h1>
            <p>
              Deslocou-se para as imediações da Antena onde espalhou o seu nome
              que de princípio chamou-se Explicação "É só Aprender"
            </p>
          </div>
        </PointHistory>
        <PointHistory>
          <div>
            <h1>2012</h1>
            <p>
              Logo depois trocou-se o nome para Chave do sucesso em 2012 passou
              para o programa do governo como escola compparticipada dando assim
              o seu contributo na educação da comunidade ao redor.
            </p>
          </div>
          <span></span>
        </PointHistory>
        <PointHistory>
          <span></span>
          <div>
            <h1>2016</h1>
            <p>
              Neste ano intitulou-se o nome de "Colégio Garcia" até aos dias de
              hoje
            </p>
          </div>
        </PointHistory>
      </NossaHistoria>
      <ContainerButton>
        <button>Saiba Mais...</button>
      </ContainerButton>
    </>
  );
}

export default Nossahistoria;
