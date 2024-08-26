import React from 'react'
import {render, screen} from '@testing-library/react'
import CourseList from './CourseList'

test('CourseList renders without crashing', () => {
    render(<CourseList/>)
    expect(Number(screen.getAllByRole('row').length) > 1).toBeTruthy()
})

test('CourseList renders 5 rows', () => {
    render(<CourseList/>)
    expect(Number(screen.getAllByRole('row').length)).toBe(5)
})
