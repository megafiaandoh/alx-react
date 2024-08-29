import React from 'react'

// const NotificationItem = (type, html=null, value) => {
const NotificationItem = ({value, html=null, type, read}) => {
  return (
    <>
    {
        html ? (
        <li data={type} dangerouslySetInnerHTML={{ __html: html()}} onClick={read}></li>
        ) : ( 
        <li data={type} onClick={read}>{ value }</li> )
    }
    </>
  )
}

export default NotificationItem
