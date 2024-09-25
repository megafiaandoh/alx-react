import { render, screen } from '@testing-library/react'
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import { StyleSheetTestUtils } from 'aphrodite'

test('Component renders BodySection correctly, passing the props correctly to it', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<BodySectionWithMarginBottom title="test title">
            <p>test children node</p>
        </BodySectionWithMarginBottom>)
    expect(screen.getAllByRole('heading').length).toBe(1)
    expect(screen.getByText('test title')).toBeDefined()
    expect(screen.getByText('test children node')).toBeDefined()
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})
