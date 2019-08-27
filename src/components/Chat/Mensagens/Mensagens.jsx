import React from 'react'
import PropTypes from 'prop-types'

import style from './Mensagens.module.scss'

const Mensagens = props => {
  // Mapeamento das mensagens
  const mensagens = props.mensagens.map((mensagem, index) => {
    return (
      <li key={index} className={style.mensagemCompleta}>
        <span className={style.usuario}>Nome Distribuidor:</span>
        <span className={style.mensagem} key={index}>
          {mensagem}
        </span>
      </li>
    )
  })

  // Renderização
  return (
    <div>
      <ul className={style.listaMensagens}>{mensagens}</ul>
    </div>
  )
}

Mensagens.propTypes = {
  mensagens: PropTypes.array
}

export default Mensagens
