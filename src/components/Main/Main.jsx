import React from 'react'
import Video from './Video/Video'
import Footer from './Footer/Footer'
import Chat from './Chat/Chat'
import Header from './Header/Header'

import style from './Main.module.scss'

const Main = () => {
  return (
    <div className={style.main}>
      <Header />
      <Video />
      <Footer />
      <Chat />
    </div>
  )
}

export default Main
