import "@testing-library/jest-dom/extend-expect";
import { render} from "@testing-library/react";
import Films from "./Films";

describe("test for the about component", () => {

    test("get the correct poster", () => {

        const data = {
            poster_path: "https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"
        }

        const component = render(<Films movie={data} />)
        const clickImg = component.getByRole("img")
        expect(clickImg.src).toBe("https://image.tmdb.org/t/p/w1280" + data.poster_path);

    })
})