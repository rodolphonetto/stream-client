import React from 'react'

import style from './Login.module.scss'

const Login = () => {
  return (
    <div className={style.Login}>
      <main className={style.loginBox}>
        <h4 className={style.bemVindo}>Seja Bem Vindo</h4>
        <form action='#'>
          <label className={style.labelNome} htmlFor='name'>
            Digite seu nome
          </label>
          <input
            className={style.inputName}
            id='name'
            name='name'
            type='text'
          />
        </form>
      </main>
    </div>
  )
}

export default Login
