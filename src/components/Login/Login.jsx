import React from 'react'

import style from './Login.module.scss'

const Login = () => {
  return (
    <div className={style.Login}>
      <main className={style.loginBox}>
        <div className={style.bemVindo}>
          <h4>Seja Bem Vindo</h4>
        </div>
        <form className={style.formBox} action='#'>
          <label className={style.labelName} htmlFor='name'>
            Digite seu nome:
          </label>
          <input
            className={style.inputName}
            id='name'
            name='name'
            type='text'
          />
          <button className={style.btn} type='submit'>
            Entrar
          </button>
        </form>
      </main>
    </div>
  )
}

export default Login
