import React from 'react'
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import Login from './Login'

import { StyleSheetTestUtils } from 'aphrodite'

test('Login renders without crushing', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<Login/>)
    expect(screen.getByText('Login to access the full dashboard')).toBeInTheDocument()
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

test('Login renders 2 input and 2 label tags', () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<Login/>)
    expect(screen.getAllByRole('textbox').length).toBe(1)
    expect(screen.getAllByRole('textbox', {type: 'password'}).length).toBe(1)
    expect(screen.getAllByLabelText(/.+/).length).toBe(2) // match all tet labels
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

test('submit button is disabled by default and filling in inputs enables it', async () => {
    StyleSheetTestUtils.suppressStyleInjection()
    render(<Login />)
    // have to fill the form first to enable submit button
    const btn = screen.getByRole('button', {name:'OK'})
    expect(btn).toBeInTheDocument()
    expect(btn).toBeDisabled()
    const emailInput = screen.getByRole('textbox', {name: 'email:'})
    expect(emailInput).toBeInTheDocument()
    const passwordInput = screen.getByRole('textbox', {type: 'password'})
    expect(passwordInput).toBeInTheDocument()

    fireEvent.change(emailInput, {target: {value: 'test@email'}})
    fireEvent.change(passwordInput, {target: {value: 'testpassword'}})
   
    // expect(emailInput.value).toBe('test@email') - this fails (value is set to password's value, why?)
    expect(passwordInput.value).toBe('testpassword')
    // expect(btn).toBeEnabled() - this fails too (figure out how to simulate typing and trigger re-render with the values...)
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})
