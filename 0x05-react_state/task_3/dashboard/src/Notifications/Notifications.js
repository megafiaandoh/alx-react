import React, { PureComponent } from 'react'
// import './Notifications.css'

import { StyleSheet, css } from 'aphrodite'

import NotificationItem from './NotificationItem'

// const Notifications = ({displayDrawer=true, listNotifications=[]}) => {
class Notifications extends PureComponent {

  log = () => console.log('Close button has been clicked')

  componentDidUpdate() {
    console.log('Notifications rerendering ...')
  }
  // // the method is called by default every time the parent component re-renders (provide the re-render only on change optimization)
  // shouldComponentUpdate(nextProps) {
  //   // re-render only if notificationsList grows... (nextProps is the props the component is about to render with)
  //   return nextProps.listNotifications.length > this.props.listNotifications.length || nextProps.displayDrawer !== this.props.displayDrawer
  // }
  
  state = {
    isHover: false,
  }
  handleHover = () => {
    const { isHover } = this.state
    this.setState({
      isHover: !isHover
    })
    // console.log('isHover: ', isHover)
  }

  render() {
    const displayDrawer = this.props.displayDrawer
    const listNotifications = this.props.listNotifications
    const handleDisplayDrawer = this.props.handleDisplayDrawer
    const handleHideDrawer = this.props.handleHideDrawer
    const markAsRead = this.props.markAsRead
    // const { isHover } = this.state
    // console.log(displayDrawer)
    // console.log(listNotifications)
    return (
      <>
    <div>
        <p className={css(styles.menuItemP)} onMouseEnter={this.handleHover} onClick={handleDisplayDrawer}>Your notifications</p>
      </div>
      { displayDrawer &&
        <div className={css(styles.Notifications, styles.NotificationsHover)} style={{position: "relative"}}>
          { listNotifications.length > 0 ? (
            <>
              <p>Here is the list of notifications</p>
              <ul className={css(styles.ulS)}>
                {
                  listNotifications.map((item) => <NotificationItem key={item.id} type={item.type} value={item.value}
                    html={item.html} read={() => markAsRead(item.id)} styles={styles}/>)
                }
              </ul>
              <button aria-label='Close' onClick={() => {this.log(); handleHideDrawer()}} className={css(styles.style)}>x</button>
            </> ) : (<p> No new notifications for now</p>)
          }
        </div>
      }
      </>
    )
  }
}

Notifications.defaultProps = {
  listNotifications: []
}

export default Notifications


// define aphrodite styles
const opacityAnime = {
  'from': {
    opacity: 0.5,
  },
  'to': {
    opacity: 1,
  }
}

const bounce = {
  '0%, 50%,100%': {
    transform: 'translateY(0px)'
  },
  '25%': {
    transform: 'translateY(5px)'
  },
  '75%': {
    transform: 'translateY(-5px)'
  } 
}

const styles = StyleSheet.create({
menuItemP: {
  textAlign: 'right',
  cursor: 'pointer',
  animationName: bounce,
  animationDuration: '.5s',
  animationIterationCount: 3
},
style: {
  position: "absolute",
  right: ".25rem",
  top: ".25rem",
  background: "transparent",
  border: "none",
  '@media (max-width: 650px)': {
    right: '.5rem',
    border: '1px solid gray',
    borderRadius: '2px'
  },
  ':hover': {
    border: '1px solid #e0354b',
    color: '#e0354b'
  }
},
Notifications: {
    '@media (max-width: 650px)' : {
      width: '100%',
      left: 0,
      border: 'none',
      // border: '1px solid green',
      padding: 0,
      margin: 0,
    },
    border: '2px solid #e0354b',
    padding: '1rem',
    borderStyle: 'dashed',
    width: '40%',
    right: 0,
    marginLeft: '57%',
    transition: 'animation',
},
NotificationsHover: {
  animationName: opacityAnime,
  animationDuration: '1s', 
  animationIterationCount: 1,

},
ulS: {
  '@media (max-width: 650px)': {
    paddingInline: 0,
  },
  fontSize: '20px',
},
ulLi: {
  '@media (max-width: 650px)': {
    listStyle: 'none',
    padding: '10px 8px',
    borderBottom: '1px solid black',
    cursor: 'pointer',
  }
},
ulLiDefault: {
    color: 'blue',
},
ulLiUrgent: {
    color: 'red',
},
})
