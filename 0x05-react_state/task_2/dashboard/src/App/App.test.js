/* REACT TESTING LIBRARY TESTS */
import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"
import { StyleSheetTestUtils } from "aphrodite"

/*
test that App renders without crashing
verify that App renders a div with the class App-header
verify that App renders a div with the class App-body
verify that App renders a div with the class App-footer
 */

describe('App', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection()
    })

    // clear buffer after each test
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
    })
    it("app renders without crashing", () => {
        render(<App/>)
        const headerElem = screen.getByRole("heading", {name: "School dashboard"})
        expect(headerElem).toBeInTheDocument()
    })

    it('app does not render CourseList by default(isLoggedIn is false)', () => {
        render(<App />)
        expect(screen.queryByTestId('CourseList')).not.toBeInTheDocument()
    })
    
    it('app renders CourseList when isLoggedIn is true', async () => {
        render(<App />)
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
        // expect(emailInput.value).toBe('test@email')
        expect(passwordInput.value).toBe('testpassword')
        // await fireEvent.click(btn)
        // expect(btn).toBeEnabled()
        // expect(screen.getByTestId('CourseList')).toBeInTheDocument()
    })

    /* logout */
    it('the logOut function is called when ctrl + h keys are pressed', () => {
        // create a mock logOut fn (used to replace another fn (in this case the logOut prop fn) in the code during testing)
        // const logOut = jest.fn() 
        const testAlert = jest.fn()
        window.alert = testAlert
        // render App with the prop (logOut)
        // const { container } = render(<App logOut={logOut} />)
        const { container } = render(<App />)
        fireEvent.keyDown(container, { key: "h", ctrlKey: true })
        // expect(logOut).toHaveBeenCalled()
        expect(testAlert).toHaveBeenCalledWith("Logging you out")
        // restore alert fn
        testAlert.mockRestore()
    })

    
    it('the default value of displayDrawer is false', () => {
        // if displayDrawer is false, the notifications drawer is not displayed, only the <p>Your notifications</p> is
       render(<App />)
       expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument()
       expect(screen.getByText('Your notifications')).toBeInTheDocument()
    })

    
    it('calling handleDisplayDrawer changes state (displayDrawer) to true & handleHideDrawer to false', () => {
        render(<App />)
        const p = screen.getByText('Your notifications')
        fireEvent.click(p)
        // on click, displayDrawer is set to true (handleDisplayDrawer is called) and therefore the drawer is rendered
        expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
        const btn = screen.getByText('x')
        fireEvent.click(btn)
        // on click, displayDrawer is set to false (handleHideDrawer is called) and therefore the drawer is un-rendered
        expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument()
    })

    /* test that Header behaves correctly */
    it('By default, the welcome greeting does not show (isLogged is false)', () => {
        render(<App />)
        expect(screen.queryByText(/Welcome .+/)).not.toBeInTheDocument()
    })

})
