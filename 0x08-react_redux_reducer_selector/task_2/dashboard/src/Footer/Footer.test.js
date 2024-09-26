import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

import { StyleSheetTestUtils } from 'aphrodite'

test('Footer renders without crushing', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    const { container } = render(<Footer/>)
    expect(container.firstChild).toBeDefined()
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})
test('Footer, at the very least, renders the test "Copyright"', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<Footer/>)
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument() //case insensitive match
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

test('Footer by default does not render the contact us link (user not logged in)', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<Footer/>)
    expect(screen.queryByText('Contact us')).not.toBeInTheDocument()
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})
