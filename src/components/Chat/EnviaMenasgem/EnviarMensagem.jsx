import React from 'react'
import PropTypes from 'prop-types'

import style from './EnviarMensagem.module.scss'

const EnviarMensagem = props => {
  return (
    <div className={style.formulario}>
      <form className={style.formItem} onSubmit={props.onSubmit}>
        <textarea
          rows='5'
          placeholder='Envie suas dúvidas'
          className={style.caixaTexto}
          id='m'
          autoComplete='off'
          onChange={props.onChange}
          value={props.mensagem}
        />
        <button className={style.enviar}>Enviar</button>
      </form>
    </div>
  )
}

EnviarMensagem.propTypes = {
  mensagem: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default EnviarMensagem
