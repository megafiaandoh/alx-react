import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">email:</label>
          <input id="email" type="text"/>
          <label htmlFor="password">password:</label>
          <input id="password" type="password"/>
          <button>OK</button>
        </form>
      </div>
  )
}

export default Login
