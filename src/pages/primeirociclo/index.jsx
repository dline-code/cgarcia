import React from "react";
import Image1 from "../../assets/about_03.jpg";
import Image3 from "../../assets/blog_2.jpg";
import Image2 from "../../assets/blog_4.jpg";
import Image4 from "../../assets/slider-03.jpg";
import {
  Comunicativo,
  Curriculo,
  Evangelico,
  Nav,
  OfertaEducativa,
  PerfilDeSaida,
  Social,
} from "../../styles/primeirociclo/style";

function Secundario() {
  return (
    <>
      <Nav>
        <nav>
          <h1>Ensino Secundário do Iº Ciclo</h1>

          <h4>
            <a href="#PerfilDeSaida">Perfil de Saída</a>
            <i className="fas fa-arrow-right" />{" "}
            <a href="#Curriculo">Currículo</a>{" "}
            <i className="fas fa-arrow-right" />
            <a href="#OfertaEducativa">Oferta Eductiva</a>
          </h4>
        </nav>
      </Nav>

      <PerfilDeSaida>
        <section id="PerfilDeSaida">
          <h1>Perfil de Saída</h1>
          <p>
            <i className="fas fa-graduation-cap" />
          </p>

          <div>
            <li>
              {" "}
              <span>
                <i className="fas fa-check-circle" />
              </span>{" "}
              Saber construir e analisar textos.
            </li>
            <li>
              {" "}
              <span>
                <i className="fas fa-check-circle" />
              </span>{" "}
              Ter a capacidade de analisar, raciocinar, identificar e dar
              solução aos exercícios.
            </li>
            <li>
              {" "}
              <span>
                <i className="fas fa-check-circle" />
              </span>{" "}
              Desenvolver o espírito de pesquisa e de trabalho (escolares,
              científicos, voluntários).
            </li>
            <li>
              {" "}
              <span>
                <i className="fas fa-check-circle" />
              </span>{" "}
              Ser capaz de discernir quando e como entrar numa relação conjugal.
            </li>
            <li>
              {" "}
              <span>
                <i className="fas fa-check-circle" />
              </span>{" "}
              Desenvolver valores patrióticos e respeitar os símbolos nacionais.
            </li>
            <li>
              {" "}
              <span>
                <i className="fas fa-check-circle" />
              </span>{" "}
              Estar maduro (a) psicologicamente e espiritualmente para encarar
              as dificuldades da vida.
            </li>
          </div>
        </section>
      </PerfilDeSaida>

      <Evangelico>
        <section>
          <article className="arct1">
            <img src={Image1} alt="" />
          </article>

          <article className="arct2">
            <h1>Evangélico</h1>
            <li>Crer em Deus</li>
            <li>Estudar a Palavra de Deus</li>
            <li>
              Conhecer e amar Jesus, aceitando-o como seu único Salvador e
              tornar-se um ser cristão.
            </li>
          </article>
        </section>
      </Evangelico>

      <Social>
        <section>
          <article className="arct01">
            <div>
              <h1>Social</h1>

              <li>
                Ser capaz de desenvolver a criatividade e o sentido crítico das
                coisas.
              </li>
              <li>Saber respeitar o próximo.</li>
              <li>
                Cultivar os valores como amor, verdade, honestidade,
                responsabilidade.
              </li>
              <li>Ser capaz de optar sempre por valores positivos.</li>
            </div>
          </article>

          <article className="arct02">
            <img src={Image2} alt="" className="" />
          </article>
        </section>
      </Social>

      <Comunicativo>
        <section>
          <article className="arct1">
            <img src={Image3} alt="" />
          </article>

          <article className="arct2">
            <h1>Comunicativo</h1>

            <li>Saber conviver.</li>
            <li>Trabalhar em equipa</li>
            <li>Ter uma relação interpessoal.</li>
            <li>
              Ter a Capacidade de resolução de conflitos por meio do diálogo.
            </li>
          </article>
        </section>
      </Comunicativo>

      <Curriculo>
        <section id="Curriculo">
          <h1>Currículo</h1>

          <article className="arct1">
            <img src={Image4} alt="" />
          </article>

          <article className="arct2">
            <h3>7ª à 9ª Classe</h3>
            <li>Língua Portuguesa</li>
            <li>Matemática</li>
            <li>Biologia</li>
            <li>Química</li>
            <li>Física</li>
            <li>História </li>
            <li>Geografia</li>
            <li>Inglês</li>
            <li>Educação Moral e Cívica</li>
            <li>Educação Visual e Plástica</li>
            <li>Educação Laboral</li>
            <li>Educação Física</li>
          </article>
        </section>
      </Curriculo>

      <OfertaEducativa>
        <section id="OfertaEducativa">
          <article className="OfertaEducativa">
            <h1>Oferta Educativa</h1>
          </article>

          <article>
            <p>
              <i className="fas fa-smile" />
            </p>
            <ul>
              <li>Educação Religiosa</li>
              <li>Empreendedorismo</li>
              <li>Caligrafia</li>
            </ul>
          </article>
        </section>
      </OfertaEducativa>
    </>
  );
}

export default Secundario;
