import React from "react";

import { Contacto } from "../../styles/components/contacto/style";

const ContactUS = () => {
  return (
    <Contacto id="Contacto">
      <h4>Pretende Contactar-nos ?</h4>
      <p>Deixe-nos uma mensagem nós estamos activos</p>
      <form action="">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="Seu Email" />
        <input type="tel" placeholder="Seu Telefone" />
        <textarea
          name="mensagem"
          id=""
          cols="20"
          rows="10"
          placeholder="Escreva Aqui a sua mensagem..."
        ></textarea>
        <button type="button"> Enviar </button>
      </form>
    </Contacto>
  );
};

export default ContactUS;
