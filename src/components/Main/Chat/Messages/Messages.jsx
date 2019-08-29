import React from 'react'
import PropTypes from 'prop-types'

import style from './Messages.module.scss'

const Messages = props => {
  // Mapeamento das mensagens
  const messages = props.messages.map((message, index) => {
    return (
      <li key={index} className={style.messageBox}>
        <span className={style.user}>João Teste:</span>
        <span className={style.message} key={index}>
          {message}
        </span>
      </li>
    )
  })
  // Renderização
  return (
    <div>
      <ul className={style.messagesList}>{messages}</ul>
    </div>
  )
}

Messages.propTypes = {
  messages: PropTypes.array
}

export default Messages
