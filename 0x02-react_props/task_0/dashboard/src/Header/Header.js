import React from 'react'
import logo from '../logo.jpg';
import './Header.css'


const Header = () => {
  return (
    <div className="App-header">
        <img src={logo} alt='logo' height={200}></img>
        <h1>School dashboard</h1>
    </div>
  )
}

export default Header
