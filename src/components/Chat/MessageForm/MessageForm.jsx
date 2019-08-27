import React from 'react'
import PropTypes from 'prop-types'

import style from './MessageForm.module.scss'

const MessageForm = props => {
  return (
    <div className={style.form}>
      <form onSubmit={props.onSubmit}>
        <textarea
          rows='1'
          placeholder='Envie suas dúvidas'
          className={style.textBox}
          id='m'
          autoComplete='off'
          onChange={props.onChange}
          value={props.mensagem}
          onKeyPress={props.onKeyPressed}
        />
        <button className={style.send}>Enviar</button>
      </form>
    </div>
  )
}

MessageForm.propTypes = {
  mensagem: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onKeyPressed: PropTypes.func
}

export default MessageForm
