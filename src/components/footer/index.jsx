import React /* useState */ from "react";

import FooterTag from "../../styles/components/footer/style";

import logo from "../../assets/logo.png";

function Footer() {
  return (
    <>
      <FooterTag>
        <article>
          <a href="/">
            <img src={logo} alt="Logo em PNG" />
          </a>
        </article>
        <div>
          <h4> Sobre Nós </h4>
          <nav>
            <ul>
              <li>Encontra-nos também a partir das nossas redes sociais</li>
              <li>
                {" "}
                <ul>
                  <li>
                    {" "}
                    <a href="-">
                      <i className="fab fa-facebook-f"></i>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="-">
                      <i className="fab fa-linkedin-in"></i>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="-">
                      <i className="fab fa-twitter"></i>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="-">
                      <i className="fab fa-pinterest"></i>
                    </a>{" "}
                  </li>
                </ul>{" "}
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h4> Endereço </h4>
          <nav>
            <ul>
              <li>
                {" "}
                <a href="mailto:colegiogarcia2016@hotmail.com">
                  {" "}
                  colegiogarcia2016@hotmail.com{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="tel:927 966 006">+244 927 966 006 </a>{" "}
              </li>
              <li>
                {" "}
                <a href="tel:995 666 749">+244 995 666 749 </a>{" "}
              </li>
              <li>
                Viana Estalagem Bairro do 6 na segunda Rua Antes da antena.
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h4> Outros </h4>
          <nav>
            <ul>
              <li> Ajuda </li>
              <li> Comunicar um Problema</li>
              <li> Termos e Políticas </li>
            </ul>
          </nav>
        </div>
        <span>
          {" "}
          Copyright &copy; {Anos()} Colégio Garcia. Todos os Diretiros
          Reservados. Powered by DLidne Code.
        </span>
      </FooterTag>
    </>
  );
}

const Anos = () => {
  const Data = new Date();
  const anos = Data.getFullYear();
  return anos;
};

export default Footer;
