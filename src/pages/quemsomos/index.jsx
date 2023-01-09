import React from "react";

//Importando Estilos
import { RightsAndDue } from "../../styles/quemsomos/index";

//Importando Alguns Componentes
import QuemSomosComponent from "../../components/quemsomos/index";
import NossaHistoria from "../../components/nossahistoria/index";
import Contacto from "../../components/contacto/index";
import Banner from "../../styles/components/banner/style.jsx";

function QuemSomos() {
  return (
    <>
      <section className="Quem somos">
        <Banner>
          <h1>Quem Somos</h1>
          <p>Além da formação no colégio Garcia você recebe muito mais..</p>
        </Banner>

        <QuemSomosComponent />

        <NossaHistoria />

        <RightsAndDue>
          <div className="title">
            <h2>Direitos e deveres dos alunos</h2>
          </div>
          <div className="content">
            <div className="hero due">
              <h3>Os alunos têm deveres de:</h3>
              <ol typeof="A">
                <li>
                  <p>
                    Respeitar os professores e todos os trabalhadores do
                    Colégio.
                  </p>
                </li>
                <li>
                  <p>
                    Não mastigar pastilhas elásticas ou qualquer alimento na
                    sala de aula ou durante o contacto com professores e
                    funcionários.
                  </p>
                </li>
                <li>
                  <p>
                    Apresentar o cartão de identidade escolar sempre que
                    solicitado por qualquer funcionário no exercício das suas
                    funções.
                  </p>
                </li>
                <li>
                  <p>
                    Assistir diariamente as aulas, realizando as tarefas
                    escolares e extra-escolares, respeitando as normas
                    estabelecidas.
                  </p>
                </li>
                <li>
                  <p>
                    Participar às aulas e demais actividades programadas pelo
                    Colégio.
                  </p>
                </li>
                <li>
                  <p>
                    Acatar a disciplina escolar, cumprir com o regulamento do
                    Colégio e demais disposições a que estiver sujeito.
                  </p>
                </li>
                <li>
                  <p>
                    Velar pela conservação e uso adequado dos bens e meios
                    postos à sua disposição.
                  </p>
                </li>
              </ol>
              <h3>Nota: A Cábula terá tratamento especial.</h3>
            </div>

            <div className="hero rights">
              <h3>Os alunos têm o direito de:</h3>
              <ol>
                <li>
                  <p>
                    Expôr franca e abertamente os seus problemas aos órgãos
                    próprios, exercendo a crítica e auto-crítica como factor
                    correctivo.
                  </p>
                </li>
                <li>
                  <p>
                    Serem inteiramente informados das normas e determinações do
                    Colégio.
                  </p>
                </li>
                <li>
                  <p>Ter cartão de identidade escolar.</p>
                </li>
                <li>
                  <p>
                    Participar nas actividades desportivas e culturais,
                    recreativas do Colégio.
                  </p>
                </li>
                <li>
                  <p>
                    Utilizar os bens do patrimoniais do Colégio, quando
                    devidamente autorizados.
                  </p>
                </li>
                <li>
                  <p>
                    Usar conforme as normas os equipamentos dispostos ao seu
                    serviço.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </RightsAndDue>
      </section>
      <Contacto />
    </>
  );
}

export default QuemSomos;
