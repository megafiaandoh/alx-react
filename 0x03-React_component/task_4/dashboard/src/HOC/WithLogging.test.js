import { render, screen } from '@testing-library/react'
import WithLogging from './WithLogging'
import Header from '../Header/Header'


test('console.log is called on mount and on unmount with Component when the wrapped element is pure html', () => {
    const WrappedComponent = WithLogging(() => <h1>Hello World. This' a test.</h1>)
    // spy on console.log function
    const spyLog = jest.spyOn(console, 'log')
    const { unmount } = render(<WrappedComponent />)
    expect(spyLog).toHaveBeenCalledWith('Component  is mounted')
    unmount()
    expect(spyLog).toHaveBeenCalledWith('Component  is going to unmount')
})

test('console.log is called on mount and on unmount with Component when the wrapped element is Header', () => {
    const WrappedComponent = WithLogging(Header)
    // spy on console.log function
    const spyLog = jest.spyOn(console, 'log')
    const { unmount } = render(<WrappedComponent />)
    expect(spyLog).toHaveBeenCalledWith('Component Header is mounted')
    unmount()
    expect(spyLog).toHaveBeenCalledWith('Component Header is going to unmount')
})
