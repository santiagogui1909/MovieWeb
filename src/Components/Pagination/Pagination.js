
import "../Films/films.css";

const Pagination = ({previousPage,nextPage,count}) => {

    return (
        <section className="box-buttons">
            <button className="back" onClick={previousPage}>back</button>
            <label>{count}</label>
            <button className="next" onClick={nextPage}>next</button>
        </section>
    );
};

export default Pagination;