import React, { useContext } from 'react'
import { getFooterCopy, getFullYear } from '../utils';
import { css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
// import './Footer.css'

const Footer = ({ styles=null }) => {

  const { user } = useContext(AppContext)

  return (
    <div className={styles && css(styles.appFooter)}>
        {user.isLoggedIn && <p><a href={"mailto:" + user.email}>Contact us</a></p>}
        <p><em>Copyright { getFullYear() } - { getFooterCopy(true) } </em></p>
    </div>
  )
}

export default Footer
