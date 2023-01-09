import React, { useState } from "react";

import { Link } from "react-router-dom";

import HeaderTag from "../../styles/components/header/style";

import logo from "../../assets/logo.png";

function Header() {
  const [bars, setBars] = useState("closed");
  return (
    <>
      <HeaderTag bars={bars}>
        <a href="/">
          <img alt="Logo Em PNG" src={logo} />
        </a>
        <button
          onClick={() => {
            if (bars === "closed") {
              setBars("open");
            } else if (bars === "open") {
              setBars("closed");
            }
          }}
        >
          {" "}
          <span className="bars bars-top"></span>{" "}
          <span className="bars bars-center"></span>{" "}
          <span className="bars bars-bottom"></span>{" "}
        </button>
        <nav>
          <ul>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <Link to="/quemsomos"> Quem Somos </Link>
            </li>
            <li>
              <a href="#NiveisAcademicos"> Níveis Académicos </a>
            </li>
            <li>
              <a href="#Professores"> Professores </a>
            </li>
            <li>
              <a href="#Anuncios"> Galeria e Eventos </a>
            </li>
            <li>
              <a href="#Contacto"> Contacta-nos </a>
            </li>
          </ul>
        </nav>
      </HeaderTag>
    </>
  );
}

export default Header;
