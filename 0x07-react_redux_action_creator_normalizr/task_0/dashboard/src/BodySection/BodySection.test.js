import { render, screen } from '@testing-library/react'
import BodySection from './BodySection'
import { StyleSheetTestUtils } from 'aphrodite'

test('BodySection correctly renders one h2 element', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<BodySection title="test title"><p>test children node</p></BodySection>)
    expect(screen.getAllByRole('heading').length).toBe(1)
    expect(screen.getByText('test title')).toBeInTheDocument()
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

test('BodySection correctly renders the children', () => {
    render(<BodySection title="test title"><p>test children node</p></BodySection>)
    expect(screen.getByText('test children node')).toBeInTheDocument()
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})
