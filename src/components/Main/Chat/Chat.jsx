import React, { useState } from 'react'
import style from './Chat.module.scss'

import socketIOClient from 'socket.io-client'
import axios from 'axios'

import ChatTitle from './ChatTitle/ChatTitle'
import Messages from './Messages/Messages'
import MessageBox from './MessageForm/MessageForm'

const socket = socketIOClient('localhost:4000')

const Chat = props => {
  const [message, setMessage] = useState('')

  const [messages, setMessages] = useState([])

  const addMessage = async message => {
    try {
      const response = await axios.post(
        'http://localhost:4000/messages/add-message/',
        {
          message: message
        }
      )
    } catch (error) {
      console.error(error)
    }
  }

  const handleKeyPressed = event => {
    if (event.key === 'Enter') {
      handleSubmit(event)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    socket.emit('mensagem', message)
  }

  socket.on('mensagem', msg => {
    addMessage(message)
    setMessages(oldMessages => [...oldMessages, msg])
    setMessage('')
  })

  return (
    <div className={style.chat}>
      <ChatTitle title='Tire suas dúvidas no chat' />
      <Messages messages={messages} />
      <MessageBox
        mensagem={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPressed={handleKeyPressed}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Chat
