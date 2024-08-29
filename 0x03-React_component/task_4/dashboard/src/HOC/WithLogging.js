import React, { Component } from 'react'

const WithLogging = (ComponentToWrap) => {
    class NewComponent extends Component {
        componentDidMount() {
            console.log(`Component ${ComponentToWrap.name} is mounted`)
        } 
        componentWillUnmount() {
            console.log(`Component ${ComponentToWrap.name} is going to unmount`)
        }
        render() {
            return (
                <ComponentToWrap { ...this.props } />
            )
        }
    }
    // modify the display name (for display in React Dev Tool & for debugging)
    NewComponent.displayName = `WithLogging(${ComponentToWrap.displayName || ComponentToWrap.name || 'Component'})`
    return NewComponent
}
    

export default WithLogging
