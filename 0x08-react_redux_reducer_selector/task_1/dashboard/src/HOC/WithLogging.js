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

/* if i'd used a simple component (for NewComponent) i'd have to use useEffect
since lifecycle hooks don't apply in functional components
i.e.

import React, { useEffect } from 'react';

function withLogging(WrappedComponent) {
  return function(props) {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted`);

      return () => {
        console.log(`Component ${WrappedComponent.name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
} 

or 

function withLogging(WrappedComponent) {
  function WithLogging(props) {
    useEffect(() => {
      console.log(`Component ${WithLogging.displayName} mounted`);

      return () => {
        console.log(`Component ${WithLogging.displayName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  }

  WithLogging.displayName = `withLogging(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithLogging;
}

 */
