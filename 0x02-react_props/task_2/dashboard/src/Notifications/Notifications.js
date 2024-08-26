import React from 'react'
import './Notifications.css'
import { getLatestNotification } from '../utils'
import NotificationItem from './NotificationItem'

const Notifications = () => {
  const log = () => console.log('Close button has been clicked')
  const style = {
    position: "absolute",
    right: ".25rem",
    top: ".25rem",
    background: "transparent",
    border: "none",
  }
  return (
    <div className='Notifications' style={{position: "relative"}}>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem data-testid="child" type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification}/>
      </ul>
      <button aria-label='Close' onClick={log} style={style}>x</button>
    </div>
  )
}

export default Notifications
