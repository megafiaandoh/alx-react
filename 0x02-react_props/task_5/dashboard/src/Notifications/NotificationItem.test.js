import React from 'react'
import  { render, screen } from '@testing-library/react'
import NotificationItem from './NotificationItem'

test('NotificationItem renders without crashing', () => {
    render(<NotificationItem type="default" value="testing" />)
    expect(screen.getByRole('listitem')).toBeDefined()
})
test('NotificationItem renders the correct html (type and value) given test prop values', () => {
    render(<NotificationItem type="default" value="testing" />)
    expect(screen.getAllByRole('listitem')[0].getAttribute('data')).toBe('default')
    expect(screen.getAllByRole('listitem')[0].innerHTML).toBe('testing')
})
test('NotificationItem renders the correct html given test __html prop values', () => {
    render(<NotificationItem type="default" value="testing" html={() => '<strong>test</strong>'} />)
    expect(screen.getAllByRole('listitem')[0].innerHTML).toBe('<strong>test</strong>')
})
