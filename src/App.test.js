import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("test for the app component ", () => {

    test("check that it has the display block styles property ", () => {

        const component = render(<App />)
        const nav = component.container.querySelector("ul")
        expect(nav).toHaveStyle("display:block")
    })
    
    test("check that it has the display block styles property", () => {

        const mock = jest.fn();
        const component = render(<App />)
        const button = component.container.querySelector("button")
        fireEvent.click(button)
        expect(mock).toBeCalledTimes(0)
    })
})


