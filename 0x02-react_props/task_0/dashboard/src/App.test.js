// import { render, screen } from "@testing-library/react"
// import App from "./App"

/*
test that App renders without crashing
verify that App renders a div with the class App-header
verify that App renders a div with the class App-body
verify that App renders a div with the class App-footer
 */

// describe(App, () => {
//     it("app renders without crashing", () => {
//         render(<App/>)
//         const headerElem = screen.getByRole("heading", {name: "School dashboard"})
//         expect(headerElem).toBeInTheDocument()
//     })

// })

import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App Componeent Tests", () => {

    let app;
    beforeEach(() => {
        app = shallow(<App/>);
    })
  it("Renders without crashing", () => {
    expect(app).toBeDefined();
  });
  it("renders a div with the class App-header", () => {
    // const app = shallow(<App />);
    expect(app.find(".App-header")).toBeDefined();
  });
  it("renders a div with the class App-body", () => {
    expect(app.find(".App-body")).toBeDefined();
  });
  it("renders a div with the class App-footer", () => {
    expect(app.find(".App-footer")).toBeDefined();
  });
});
