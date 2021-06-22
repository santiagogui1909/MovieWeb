import "@testing-library/jest-dom/extend-expect";
import { render, screen,fireEvent} from "@testing-library/react";
import Ranking from "./Ranking";

describe("test for the about component ", () => {

    test("render elements with th tag", () => {
        const component = render(<Ranking />)
        const tr = component.container.querySelector("tr");
        expect(tr).toBeDefined();
    })
})