import React from 'react'

import Video from './components/Video/Video'
import Chat from './components/Chat/Chat'

import style from './App.module.scss'

const App = props => {
  return (
    <div className={style.principal}>
      <Video />
      <Chat />
    </div>
  )
}

export default App
