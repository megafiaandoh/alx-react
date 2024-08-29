import { render, screen } from '@testing-library/react'
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'

test('Component renders BodySection correctly, passing the props correctly to it', () => {
    render(<BodySectionWithMarginBottom title="test title">
            <p>test children node</p>
        </BodySectionWithMarginBottom>)
    expect(screen.getAllByRole('heading').length).toBe(1)
    expect(screen.getByText('test title')).toBeDefined()
    expect(screen.getByText('test children node')).toBeDefined()
})
