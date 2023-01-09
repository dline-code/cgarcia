import React from "react";

import { Link } from "react-router-dom";

import {
  Anuncios,
  Professores,
  Banner,
  Navigation,
  Testemunhas,
  QuadroDestaque,
  NiveisAcademicos,
  PlanoPagamento,
  PlanoItem,
  Seta,
} from "../../styles/home/style";

import anuncio from "../../assets/anuncio-image.jpg";
import honor from "../../assets/honor-selo.jpg";
import niveis1 from "../../assets/niveis-academicos-1.jpg";
import niveis2 from "../../assets/quemsomos-image2.jpg";
import niveis3 from "../../assets/anuncio-image.jpg";

import professor from "../../assets/professor-image.jpg";

import QuemsomosTextImages from "../../components/quemsomos/index";
import ContactUS from "../../components/contacto/index";
import Nossahistoria from "../../components/nossahistoria/index";

const EventoItem = () => {
  return (
    <div>
      <img src={anuncio} alt="" />
      <div>
        <h3>Semana Carnaval</h3>
        <p> Foi uma actividade Incrivel </p>
        <a href="/"> Ver Mais </a>
      </div>
    </div>
  );
};

function Home() {
  return (
    <>
      <Banner id="Home">
        <Navigation>
          <Seta type="button">
            {" "}
            <i className="fas fa-chevron-left"></i>{" "}
          </Seta>
          <Seta type="button">
            {" "}
            <i className="fas fa-chevron-right"></i>{" "}
          </Seta>

          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navigation>
        <div>
          <h1> Bem-Vindo ao Site Informativo do Colégio Garcia</h1>
          <p>Além de educação no Colégio Garcia você recebe muito mais</p>
          <span>
            {" "}
            <button type="button">Contacta-nos</button>{" "}
            <button type="button">Ler mais...</button>{" "}
          </span>
        </div>
        <div>
          <h1> Faça as Suas Matrículas Instantaneamente</h1>
          <p>Veje os seus Resultados Sem sair de Casa. </p>
          <span>
            {" "}
            <button type="button">Contacta-nos</button>{" "}
            <button type="button">Ler mais...</button>{" "}
          </span>
        </div>
        <div>
          <h1> Faça Reclamações Rápidas e Precisas. </h1>
          <p>Assine a nossa News Letter e Receba os Anúncios e Avisos.</p>
          <span>
            {" "}
            <button type="button">Contacta-nos</button>{" "}
            <button type="button">Ler mais...</button>{" "}
          </span>
        </div>
      </Banner>

      <QuemsomosTextImages />

      <Nossahistoria />

      <NiveisAcademicos id="NiveisAcademicos">
        <h2>Níveis Académicos</h2>
        <p>
          Saiba sobre o Perfil de saída dos alunos, tais como os seus planos
          curriculares.
        </p>
        <div>
          <div>
            {" "}
            <img src={niveis1} alt="Imagem de Nivel Academico" />{" "}
            <div>
              {" "}
              <Link to="/">Ensino Primário</Link>{" "}
            </div>{" "}
          </div>
          <div>
            {" "}
            <img src={niveis2} alt="Imagem de Nivel Academico" />{" "}
            <div>
              {" "}
              <Link to="/primeirociclo">
                Ensino Secundário do 1º Ciclo
              </Link>{" "}
            </div>{" "}
          </div>
          <div>
            {" "}
            <img src={niveis3} alt="Imagem de Nivel Academico" />{" "}
            <div>
              {" "}
              <Link to="/segundociclo">Ensino Secundário do 2º Ciclo</Link>{" "}
            </div>{" "}
          </div>
        </div>
      </NiveisAcademicos>

      <PlanoPagamento id="PlanoPagamento ">
        <h2>Plano de Pagamento</h2>
        <p>
          A forma de pagamento depende de si. Faça já a sua escolha.! Informamos
          que o pagamento é feito de 01 à 10 <br /> do outro mês(pagamento
          pôs-pago). Escepto o mês de Novembro e Dezembro <br /> que deve ser
          pago a partir do mês de Agosto.!
        </p>

        <div>
          <PlanoItem>
            <h3>Plano de Pagamento 1</h3>
            <i className="fas fa-graduation-cap"></i>

            <div>
              <ul>
                <li>Classe</li>
                <li>1ª</li>
                <li>2ª</li>
                <li>3ª</li>
              </ul>
              <ul>
                <li>Mensal</li>
                <li>1500Kz</li>
                <li>1600Kz</li>
                <li>1700Kz</li>
              </ul>
              <ul>
                <li>Trimestral</li>
                <li>4500Kz</li>
                <li>4800Kz</li>
                <li>5100Kz</li>
              </ul>
              <ul>
                <li>Anual</li>
                <li>15.000Kz</li>
                <li>16.000Kz</li>
                <li>17.000Kz</li>
              </ul>
            </div>

            <a href="/"> Contactar </a>
          </PlanoItem>

          <PlanoItem>
            <h3>Plano de Pagamento 2</h3>
            <i className="fas fa-graduation-cap"></i>

            <div>
              <ul>
                <li>Classe</li>
                <li>4ª</li>
                <li>5ª</li>
                <li>6ª</li>
              </ul>
              <ul>
                <li>Mensal</li>
                <li>2.000Kz</li>
                <li>2300Kz</li>
                <li>2500Kz</li>
              </ul>
              <ul>
                <li>Trimestral</li>
                <li>6.000Kz</li>
                <li>6900Kz</li>
                <li>7500Kz</li>
              </ul>
              <ul>
                <li>Anual</li>
                <li>2.0000Kz</li>
                <li>23.000Kz</li>
                <li>27.000Kz</li>
              </ul>
            </div>

            <a href="/"> Contactar </a>
          </PlanoItem>

          <PlanoItem>
            <h3>Plano de Pagamento 3</h3>
            <i className="fas fa-graduation-cap"></i>

            <div>
              <ul>
                <li>Classe</li>
                <li>7ª</li>
                <li>8ª</li>
                <li>9ª</li>
              </ul>
              <ul>
                <li>Mensal</li>
                <li>3.200Kz</li>
                <li>3.700Kz</li>
                <li>4.200Kz</li>
              </ul>
              <ul>
                <li>Trimestral</li>
                <li>9.600Kz</li>
                <li>11.100Kz</li>
                <li>12.600Kz</li>
              </ul>
              <ul>
                <li>Anual</li>
                <li>32.000Kz</li>
                <li>37.000Kz</li>
                <li>46.200Kz</li>
              </ul>
            </div>

            <a href="/"> Contactar </a>
          </PlanoItem>
        </div>
      </PlanoPagamento>

      <Professores id="Professores">
        <span>
          <Seta>
            <i className="fas fa-angle-left"></i>
          </Seta>{" "}
          <Seta>
            <i className="fas fa-angle-right"></i>
          </Seta>{" "}
        </span>
        <div>
          <h3>Professores</h3>
          <p>
            Conheça os Perfis dos Professores responsáveis pela formação dos
            nossos educandos
          </p>

          <ul>
            <li>
              <div>
                <img src={professor} alt="Imagem do Professor" />
                <div>
                  <h4>José Gonçalves</h4> <span>Titulo</span>{" "}
                </div>
              </div>
            </li>
            <li>
              {" "}
              <div>
                <img src={professor} alt="Imagem do Professor" />
                <div>
                  <h4>Gabs Ferreira</h4> <span>Titulo</span>{" "}
                </div>
              </div>
            </li>
            <li>
              <div>
                <img src={professor} alt="Imagem do Professor" />
                <div>
                  <h4>Juliana Onoforio</h4> <span>Titulo</span>{" "}
                </div>
              </div>
            </li>
            <li>
              <div>
                <img src={professor} alt="Imagem do Professor" />
                <div>
                  <h4>Daniel Sofrimento</h4> <span>Titulo</span>{" "}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Professores>

      <Anuncios id="Anuncios">
        <h2>Anúncios e Galeria de Eventos</h2>
        <EventoItem />
        <EventoItem />
        <EventoItem />
        <EventoItem />
        <EventoItem />
        <EventoItem />
        <span>
          <a href="-"> 1 </a>
          <a href="-"> 2 </a>
          <a href="-"> 3 </a>
          <a href="-">
            {" "}
            <i className="arrow_right"></i>{" "}
          </a>
        </span>
      </Anuncios>

      <QuadroDestaque id="QuadroDestaque">
        <h2>Professores e alunos mais destacados</h2>
        <p>Pré escolar</p>

        <img src={honor} alt="" />

        <div>
          <Seta>
            <i className="fas fa-chevron-left"></i>
          </Seta>
          <Seta>
            <i className="fas fa-chevron-right"></i>
          </Seta>
        </div>

        <article>
          <h3>Professores</h3>
          <div>
            <img src={professor} alt="Imagem do Professor" />
            <p>Nome do Individuo</p>
          </div>
          <div>
            <img src={professor} alt="Imagem do Professor" />
            <p>Nome do Individuo</p>
          </div>
          <div>
            <img src={professor} alt="Imagem do Professor" />
            <p>Nome do Individuo</p>
          </div>
        </article>
        <article>
          <h3>Alunos</h3>
          <div>
            <img src={professor} alt="Imagem do Professor" />
            <p>Nome do Individuo</p>
            <span>Media do Individuo</span>
          </div>
          <div>
            <img src={professor} alt="Imagem do Professor" />
            <p>Nome do Individuo</p>
            <span>Media do Individuo</span>
          </div>
          <div>
            <img src={professor} alt="Imagem do Professor" />
            <p>Nome do Individuo</p>
            <span>Media do Individuo</span>
          </div>
        </article>
      </QuadroDestaque>

      <Testemunhas id="Testemunhas">
        <h1> Testemunhas </h1>
        <p>
          Leia os comentários das pessoas que já passaram pelo Colégio Garcia
        </p>
        <div>
          <div>
            <Seta>
              <i className="fas fa-chevron-left"></i>
            </Seta>
            <Seta>
              <i className="fas fa-chevron-right"></i>
            </Seta>
          </div>
          <article>
            <img src={professor} alt="" />
            <span>James Fernando</span>
          </article>
          <p>
            <span>
              <i className="fa fa-quote-left"></i> Wonderful Support!
            </span>
            They have got my project on time with the competition with a sed
            highly skilled, and experienced & professional team.
          </p>
        </div>
      </Testemunhas>

      <ContactUS />
    </>
  );
}

export default Home;
