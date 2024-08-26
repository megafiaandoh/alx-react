import React from 'react'
import CourseListRow from './CourseListRow'
import './CourseList.css'

const CourseList = ({listCourses=[]}) => {
  return (
    <table data-testid='CourseList'>
      {
        listCourses.length < 1 ? ( <tr style={{'text-align': 'center'}}>No courses available yet</tr> ) : (
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
