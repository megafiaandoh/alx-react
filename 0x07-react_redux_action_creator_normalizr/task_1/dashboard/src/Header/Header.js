import React, { useContext } from 'react'
import logo from '../logo.jpg';
// import './Header.css'

import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const Header = () => {
  const { user, logOut } = useContext(AppContext)
  return (
    <div className={css(styles.appHeader)}>
        <img src={logo} alt='logo' height={200}></img>
        <h1>School dashboard</h1>
        {
          user.isLoggedIn && <p id="logoutSection" className={css(styles.logout)}>Welcome <b>{user.email}</b>(<em onClick={logOut}>logout</em>)</p>
        }
    </div>
  )
}

export default Header

// Aphrodite styles
const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'rgb(225, 67, 67)',
    '@media (max-width: 650px)': {
      flexDirection: 'column'
    }
  },
  logout: {
    cursor: 'pointer'
  }
})
