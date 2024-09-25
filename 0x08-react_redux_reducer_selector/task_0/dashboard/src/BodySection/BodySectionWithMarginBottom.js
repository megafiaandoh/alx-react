import React from 'react'
import BodySection from './BodySection'
// import './BodySectionWithMarginBottom.css'

import { StyleSheet, css } from 'aphrodite'

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
        {/* BodySection takes the same props passed to `this` component */}
      <BodySection { ...props } />
    </div>
  )
}

export default BodySectionWithMarginBottom


/* aphrodite styles */
const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px'
}
})
