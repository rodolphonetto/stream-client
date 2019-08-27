import React, { Component } from 'react'
import style from './Chat.module.scss'

import socketIOClient from 'socket.io-client'

import Mensagens from './Mensagens/Mensagens'
import EnviaMensagem from './EnviaMenasgem/EnviarMensagem'

export default class Chat extends Component {
  state = {
    endpoint: 'localhost:4000',
    mensagem: '',
    mensagens: []
  }

  componentDidMount () {
    const socket = socketIOClient(this.state.endpoint)
    socket.on('mensagem', msg => {
      const newMensagens = [...this.state.mensagens, msg]
      this.setState({
        mensagens: newMensagens
      })
    })
  }

  handleChange = event => {
    this.setState({
      mensagem: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const socket = socketIOClient(this.state.endpoint)
    socket.emit('mensagem', this.state.mensagem, 'Administrador')
    this.setState({
      mensagem: ''
    })
  }

  render () {
    return (
      <div className={style.chat}>
        <Mensagens mensagens={this.state.mensagens} />
        <EnviaMensagem
          mensagem={this.state.mensagem}
          onChange={e => this.handleChange(e)}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
