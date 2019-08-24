import React from "react";

import style from "./Mensagens.module.scss";

const Mensagens = (props) => {

  // Mapeamento das mensagens
  const mensagens = props.mensagens.map((mensagem, index) => {
    return (
      <li className={style.mensagemCompleta}>
        <span className={style.usuario}>Nome Distribuidor:</span>
        <span className={style.mensagem} key={index}>{mensagem}</span>
      </li>
    );
  });

  // Renderização
  return (
    <div>
      <ul className={style.listaMensagens}>{mensagens}</ul>
    </div>
  );

}

export default Mensagens;
