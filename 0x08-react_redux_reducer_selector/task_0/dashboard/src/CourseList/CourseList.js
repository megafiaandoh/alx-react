import React from 'react'
import CourseListRow from './CourseListRow'
// import './CourseList.css'

import { StyleSheet, css } from 'aphrodite'

const CourseList = ({listCourses=[]}) => {
  return (
    // <table data-testid='CourseList' >
    <table data-testid='CourseList' className={css(styles.table)}>
      {
        listCourses.length < 1 ? ( <thead><tr style={{'textAlign': 'center'}}><td colSpan={2}>No courses available yet</td></tr></thead> ) : (
      <>
          <thead>
              <CourseListRow textFirstCell="Available courses" isHeader="true"/>
              <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader="true"/>
          </thead>
          <tbody>
              {
                listCourses.map((course) => <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />)
              }
          </tbody>
      </>
        )
      }
    </table>
  )
}

export default CourseList

/* Aphrodite styles */
const styles = StyleSheet.create({
  table: {
    border: '2px solid #b7b2b2',
      width: '100%'
  },
})
