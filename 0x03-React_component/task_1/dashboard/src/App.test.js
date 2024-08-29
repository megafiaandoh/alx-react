/* REACT TESTING LIBRARY TESTS */
import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

/*
test that App renders without crashing
verify that App renders a div with the class App-header
verify that App renders a div with the class App-body
verify that App renders a div with the class App-footer
 */

describe('App', () => {
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
        const btn = screen.getByText('OK')
        expect(btn).toBeInTheDocument()
        await fireEvent.click(btn)
        expect(screen.getByTestId('CourseList')).toBeInTheDocument()
    })

    /* logout */
    it('the logOut function is called when ctrl + h keys are pressed', () => {
        // create a mock logOut fn (used to replace another fn (in this case the logOut prop fn) in the code during testing)
        const logOut = jest.fn()
        const testAlert = jest.fn()
        window.alert = testAlert
        // render App with the prop (logOut)
        const { container } = render(<App logOut={logOut} />)
        fireEvent.keyDown(container, { key: "h", ctrlKey: true })
        expect(logOut).toHaveBeenCalled()
        expect(testAlert).toHaveBeenCalledWith("Logging you out")
        // restore alert fn
        testAlert.mockRestore()
    })

})
