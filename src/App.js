import React from 'react'

import Video from './components/Video/Video'
import Footer from './components/Footer/Footer'
import Chat from './components/Chat/Chat'
import Header from './components/Header/Header'

import style from './App.module.scss'

const App = props => {
  return (
    <div className={style.main}>
      <Header />
      <Video />
      <Footer />
      <Chat />
    </div>
  )
}

export default App
