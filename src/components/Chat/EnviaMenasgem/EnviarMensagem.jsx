import React from "react";

import style from "./EnviarMensagem.module.scss";


const EnviarMensagem = (props) => {
  return (
    <div className={style.formulario}>
      <form className={style.formItem} onSubmit={props.onSubmit}>
        <textarea rows="5" placeholder="Envie suas dúvidas" className={style.caixaTexto} id="m" autoComplete="off"
          onChange={props.onChangeHandler}
          value={props.mensagem} />
        <button className={style.enviar}>Enviar</button>
      </form>
    </div>
  );
}

export default EnviarMensagem;
