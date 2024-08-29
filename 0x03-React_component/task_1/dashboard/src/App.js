import { Component } from 'react'
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
// import { useState } from 'react'
import CourseList from './CourseList/CourseList';
import { getLatestNotification } from './utils';


class App extends Component {
  state = {
    isLoggedIn: false
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
    const { isLoggedIn } = this.state
    this.setState({
      isLoggedIn: !isLoggedIn
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
    document.removeEventListener("keydown", this.handleKeyDown)
  }


  render() {
    const { isLoggedIn } = this.state
    return (
      <>
      <Notifications listNotifications={this.notificationsList} />
      <div className="App">
        <Header />
        <div className='App-body'>
          {
            isLoggedIn ? <CourseList listCourses={this.coursesList}/> :  <Login login={this.handleLogin}/>
          }
        </div>
        <Footer />  
      </div>
      </>
    );
  }
}

// allows you to set default values for the props argument
App.defaultProps = {
  logOut: () => {}
}

export default App;
