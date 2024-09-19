import React from 'react'
import {render, screen} from '@testing-library/react'
import CourseList from './CourseList'

import { StyleSheetTestUtils } from 'aphrodite'

const coursesList = [{id: 1, name: 'ES6', credit: 60},
{id: 2, name: 'Webpack', credit: 20},
{id: 3, name: 'React', credit: 40}]

test('CourseList renders without crashing', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<CourseList listCourses={coursesList}/>)
    expect(Number(screen.getAllByRole('row').length) > 1).toBeTruthy()
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

test('CourseList renders 5 rows with list provided', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<CourseList listCourses={coursesList}/>)
    expect(Number(screen.getAllByRole('row').length)).toBe(5)
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

test('CourseList renders correctly with list not provided', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<CourseList listCourses={[]}/>)
    expect(Number(screen.getAllByRole('row').length)).toBe(1)
    expect(screen.getByText('No courses available yet')).toBeInTheDocument()
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})
