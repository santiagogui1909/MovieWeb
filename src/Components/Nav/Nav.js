import { Link } from "react-router-dom";
import { useState } from "react";

import "./Nav.css";

const Nav = ({ onScroll }) => {

    const [menuResp, setMenuResp] = useState(false);

    return (
        <nav className={`container-menu ${onScroll > 20 ? "scroll" : null}`}>
            <ul className={menuResp ? "nav-menu-resp":"nav-menu"}
            onClick={() => setMenuResp(false)}
            >
                <Link to="/" className="home">
                    <li>home</li>
                </Link>

                <Link to="/Ranking" className="ranking">
                    <li>ranking</li>
                </Link>

                <Link to="/Gnere" className="gnere">
                    <li>gnere
                    <ul className="children">
                            <li><a>accion</a></li>
                            <li><a>horror</a></li>
                            <li><a>comedy</a></li> 
                            <li><a>adventure</a></li>
                            <li><a>science fiction</a></li>
                            <li><a>crime</a></li>
                            <li><a>romance</a></li>
                            <li><a>thriler</a></li>

                        </ul>
                    </li>
                </Link>
            </ul>

            <p className="title-menu">menu</p>

            <button className="btn-menu" onClick={() => setMenuResp(!menuResp)}>
                {menuResp ? <i className="icon-up-open"></i> : <i className="icon-th-list"></i>}
            </button>
        </nav>
    )

}

export default Nav;