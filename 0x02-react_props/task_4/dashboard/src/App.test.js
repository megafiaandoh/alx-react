/* REACT TESTING LIBRARY TESTS */
import { render, screen, fireEvent } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import App from "./App"

/*
test that App renders without crashing
verify that App renders a div with the class App-header
verify that App renders a div with the class App-body
verify that App renders a div with the class App-footer
 */

describe(App, () => {
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
        await fireEvent.mouseDown(btn)
        // await fireEvent.mouseUp(btn)
        // expect(screen.getByTestId('CourseList')).toBeInTheDocument()

    })

})

/* ENZYME TESTS */

// import React from "react";
// import App from "./App";
// import { shallow } from "enzyme";

// describe("App Component Tests", () => {

//     let app;
//     beforeEach(() => {
//         app = shallow(<App/>);
//     })
//   it("Renders without crashing", () => {
//     expect(app).toBeDefined();
//   });
//   it("renders a div with the class App-header", () => {
//     // const app = shallow(<App />);
//     expect(app.find(".App-header")).toBeDefined();
//   });
//   it("renders a div with the class App-body", () => {
//     expect(app.find(".App-body")).toBeDefined();
//   });
//   it("renders a div with the class App-footer", () => {
//     expect(app.find(".App-footer")).toBeDefined();
//   });
// });
