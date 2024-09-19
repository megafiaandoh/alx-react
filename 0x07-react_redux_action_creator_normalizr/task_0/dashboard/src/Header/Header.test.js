import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

import { StyleSheetTestUtils } from 'aphrodite'

test('Header renders without crushing', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<Header/>)
    expect(screen.getByText('School dashboard')).toBeInTheDocument()
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

test('Header renders img and h1 tags', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<Header/>)
    expect(screen.getByText('School dashboard')).toBeInTheDocument()
    expect(screen.getByAltText('logo')).toBeInTheDocument()
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})
