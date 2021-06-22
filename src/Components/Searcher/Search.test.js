import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from "./Searcher";
import ListSearch from "./ListSearch";
import * as dataRequests from "../../DataRequest";
import img from '../../images/img-error.svg';

const mockHistoryPush = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe("test for the about component ", () => {

    test("search must not have numbers", () => {

        const mock = jest.fn();
        const component = render(<Search mock={mock} />)
        const inputFilm = component.getByPlaceholderText("search movies,series,tv");
        const button = component.getByLabelText("btn-search");

        fireEvent.change(inputFilm, { target: { value: "131223" } });
        fireEvent.click(button);
        expect(mock).toHaveBeenCalledWith("Enter a search, do not use numbers");
    })

    test("search correct", () => {

        const mock = jest.fn();
        const component = render(<Search mock={mock} />)
        const inputFilm = component.getByPlaceholderText("search movies,series,tv");
        const button = component.getByLabelText("btn-search");

        fireEvent.change(inputFilm, { target: { value: "hulk" } });
        fireEvent.click(button);
        expect(mock).toHaveBeenCalledWith("search is correct");
    })

    test("check that exist a mensagge of error", () => {
        const component = render(<Search />)
        expect(component.container).toHaveTextContent(/No results found ☹️/);
    })


    test("ruote the picture is correct", () => {
        const dataImg = {
            poster_path: "https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"
        }
        const component = render(<ListSearch searchs={dataImg} />);
        const image = component.getByRole("img");
        expect(image.src).toBe("https://image.tmdb.org/t/p/w1280" + dataImg.poster_path);
    })

    test("ruote the picture is correct", () => {
        const dataImg = {
            poster_path: null
        }
        const component = render(<ListSearch searchs={dataImg} />);
        const image = component.getByRole("img");
        expect(image.src).toBe("http://localhost/" + img);
    })

    test("check ricive id", () => {
        const dataImg = {
            poster_path: "https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"
        }
        const component = render(<ListSearch searchs={dataImg} />);
        const clickImg = component.getByRole("img")
        fireEvent.click(clickImg);
        expect(mockHistoryPush).toHaveBeenCalled();
    })
})


describe("test for component search", () => {

    const data = [
        {
            id: "1",
            poster_path: "https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg",
        },
        {
            id: "2",
            poster_path: "https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg",
        },
        {
            id: "3",
            poster_path: "https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg",
        }
    ]

    beforeEach(() => {jest.spyOn(dataRequests, "getFilm").mockImplementation(() => {
        return Promise.resolve(data)
    })})
    
    test("check that funtion this component is correct", () => {

        const component = render(<Search />)
        const inputFilm = component.getByPlaceholderText("search movies,series,tv" );
        fireEvent.change(inputFilm, { target: { value: "hulk" }});
        expect(dataRequests.getFilm).toBeCalledTimes(1)
        expect(dataRequests.getFilm).toBeCalledWith( "hulk")
    })
})