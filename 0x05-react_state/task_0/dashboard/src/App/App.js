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


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      displayDrawer: false,
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
  handleLogin = () => {
    const { isLoggedIn } = this.state.isLoggedIn
    this.setState({
      isLoggedIn: !isLoggedIn
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
      this.props.logOut()
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
  }

  UNSAFE_componentWillMount() {
    document.removeEventListener("keydown", () => {})
  }


  render() {
    const { isLoggedIn } = this.state
    return (
      <>
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
            isLoggedIn ? <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={this.coursesList}/>
              </BodySectionWithMarginBottom> : <BodySectionWithMarginBottom title="Log in to continue">
                  <Login login={this.handleLogin}/>
              </BodySectionWithMarginBottom>
          }
        </div>
        {/* Render BodySection with BodySectionWithMarginBottom by passing its props as `this`'s props (html as props too) */}
        <BodySectionWithMarginBottom title="News from the School"><p>Test adding a new block - news!</p></BodySectionWithMarginBottom>
        <Footer styles={styles}/>
      </div>
      </>
    );
  }
}

// allows you to set default values for the props argument
App.defaultProps = {
  logOut: () => {},
  // displayDrawer: false,
}

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
