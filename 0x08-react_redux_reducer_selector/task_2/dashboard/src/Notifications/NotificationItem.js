import React, { memo } from 'react'
import { css } from 'aphrodite'

// const NotificationItem = (type, html=null, value) => {
const NotificationItem = memo(({value, html=null, type, read, styles=null}) => {
  return (
    <>
    {
        html ? (
        <li data={type} dangerouslySetInnerHTML={{ __html: html()}} onClick={read} className={styles && css(styles.ulLiUrgent, styles.ulLi)}></li>
        ) : ( 
        <li data={type} onClick={read} className={styles && (type === 'urgent' ? css(styles.ulLiUrgent, styles.ulLi) :  css(styles.ulLiDefault, styles.ulLi))}>{ value }</li> )
    }
    </>
  )
})

export default NotificationItem
