import "@testing-library/jest-dom/extend-expect";
import { render, screen,fireEvent} from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";
import About from "./About";

describe("test for the about component ", () => {

    test("render elements with li tag", () => {

        const component = render(<About />)
        const li = component.container.querySelector("li");
        expect(li).toBeDefined();
    })
})