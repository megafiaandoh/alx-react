import { Component } from 'react'
// import './App.css';

import { StyleSheet, css } from 'aphrodite'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
// import { useState } from 'react'
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils';

import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

import { AppContext, user } from './AppContext';


class App extends Component {
  constructor() {
    super()
    this.state = {
      // loggedIn: false,
      displayDrawer: false,
      user: user,
      logOut: this.logOut // this' the defined logOut function - resetting user to default (i.e. no one and logged out)
    }
  }
  

  coursesList = [{id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}]

  notificationsList = [
      {id: 1, value: 'New course available', type:'default'},
      {id: 2, value: 'New resume available', type:'urgent'},
      {id: 3, html: getLatestNotification, type:'urgent'},
    ]
  logIn = (email, password) => {
    // const { loggedIn } = this.state.loggedIn
    this.setState({
      // loggedIn: !loggedIn
      user: {
        email,
        password,
        isLoggedIn: true
      }
    })
  }

  logOut = () => {
    // reset the value of user object in local state - '' for email and password and isLoggedIn(false)
    this.setState({
      user: user
    })
  }

  handleDisplayDrawer = () => {
    // console.log('handleDrawer called')
    this.setState({
      displayDrawer: true
    })
    console.log(this.state.displayDrawer)
  }

  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false
    })
  }

  // listen for keydown event when the component has mounted (& check for Ctrl + h simultaneous presses)
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      // console.log('event: ', event)
      alert("Logging you out")
      // this.props.logOut()
      this.logOut()
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
  }

  UNSAFE_componentWillMount() {
    document.removeEventListener("keydown", () => {})
  }


  render() {
    // const { loggedIn } = this.state
    return (
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
        <Notifications listNotifications={this.notificationsList}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className="App">
          <Header />
          {/* <div className='App-body'> */}
          <div className={css(styles.appBody)}>
            {
              this.state.user.isLoggedIn ? <BodySectionWithMarginBottom title="Course list">
                    <CourseList listCourses={this.coursesList}/>
                </BodySectionWithMarginBottom> : <BodySectionWithMarginBottom title="Log in to continue">
                    <Login login={this.logIn}/>
                </BodySectionWithMarginBottom>
            }
          </div>
          {/* Render BodySection with BodySectionWithMarginBottom by passing its props as `this`'s props (html as props too) */}
          <BodySectionWithMarginBottom title="News from the School"><p>Test adding a new block - news!</p></BodySectionWithMarginBottom>
          <Footer styles={styles}/>
        </div>
      </AppContext.Provider>
    );
  }
}

// allows you to set default values for the props argument
// App.defaultProps = {
//   logOut: () => {},
//   // displayDrawer: false,
// }

export default App;


/* aphrodite styles definition */
const styles = StyleSheet.create({
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    margin: '0 2rem'
  },
  appBody: {
    borderBottom: '3px solid rgb(225, 67, 67)',
    borderTop: '3px solid rgb(225, 67, 67)',
    height: '80%',
    paddingBlock: '2rem',
    paddingLeft: '3rem',
  },
  appFooter: {
    textAlign: 'center'
  }
})
