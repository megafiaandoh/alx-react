import React, { useState } from 'react'
// import './Login.css'

import { StyleSheet, css } from 'aphrodite'

import WithLogging from '../HOC/WithLogging'

const Login = ({login}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [enableSubmit, setEnableSubmit] = useState(false)

  const handleLoginSubmit = () => {
    setIsLoggedIn(true)
    login()
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    if (email.length > 0 && password.length > 0)
      setEnableSubmit(true)
    else
      setEnableSubmit(false)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
    if (email.length > 0 && password.length > 0)
      setEnableSubmit(true)
    else
      setEnableSubmit(false)
  }

  return (
    <>
        <p>Login to access the full dashboard</p>
        <form onSubmit={(e) => {e.preventDefault(); handleLoginSubmit()}} className={css(styles.form)}>
          <div className={css(styles.labelInputBlock)}>
          <label htmlFor="email" className={css(styles.labelS)}>email:</label>
          <input id="email" type="text" className={css(styles.inputS)}
            value={email} onChange={handleChangeEmail}
          />
          </div>
          <div className={css(styles.labelInputBlock)}>
          <label htmlFor="password" className={css(styles.labelS)}>password:</label>
          <input id="password" type="password" className={css(styles.inputS)}
            value={password} onChange={handleChangePassword}
          />
          </div>
          <input className={css(styles.buttonS)} type='submit' value="OK"
            disabled={!enableSubmit}
          />
        </form>
      </>
  )
}

export default WithLogging(Login)

// define Aphrodite styles
const styles = StyleSheet.create({
  form: {
    '@media (min-width: 600px)': {
      display: 'flex',
      flexDirection: 'row'
    }
  },
  labelS: {
    textTransform: 'capitalize',
    paddingRight: '1rem'
  },
  inputS: {
    marginRight: '1rem',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    backgroundColor: 'none'
  },
  labelInputBlock: {
      paddingBlock: '.3rem'
  },
  buttonS: {
    display: 'block',
    background: 'none',
    border: '2px solid Yellow'
  }
})
