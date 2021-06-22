import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState, useEffect, useRef} from "react";
import "./fontello/css/fontello.css";
import logo from "./images/logo-web-film-nav.svg";

import Home from "../src/pages/Home/Home";
import Ranking from "./Components/Ranking/Ranking";
import List from "./Container/List";
import Footer from "./Components/Footer/Footer";
import AboutFilm from "./Components/AboutFilm/AboutFilm";

function App() {

  // activates the scroll in the navigation when the user scrolls
  let topRef = useRef(null);
  const [scroll, setScroll] = useState(0);

  const scrollNav = () => {
    const posicion = window.pageYOffset;
    setScroll(posicion);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
  }, [scroll]);

  const [menuResp, setMenuResp] = useState(false);

  return (
    <div ref={topRef}>
      <Router>
        <nav className={`container-menu ${scroll > 20 ? "scroll" : null}`}>
          <ul className={menuResp ? "nav-menu-resp" : "nav-menu"}
            onClick={() => setMenuResp(false)}
          >
            <li>
              <Link href="#top-menu" to="/" className="home" onClick={()=> {topRef.current.scrollIntoView(true)}}>
              <span className="icon-home"></span>home
              </Link>
            </li>
            <li>
              <Link to="/Ranking" className="ranking" onClick={()=> {topRef.current.scrollIntoView(true)}}>
                <span className="icon-trophy"></span>ranking
              </Link>
            </li>
            <li>
              <Link to="/List" className="films" onClick={()=> {topRef.current.scrollIntoView(true)}}>
                <span className="icon-video"></span>films
              </Link>
            </li>

            <img className="logo-nav" src={logo}></img>

          </ul>
          <p className="title-menu">menu</p>

          {/* change the class depending on the state */}

          <button className="btn-menu" onClick={() => setMenuResp(!menuResp)}>
            {menuResp ? <i className="icon-cancel-circled"></i> : <i className="icon-menu"></i>}
          </button>
        </nav>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/List" component={List} exact />
          <Route path="/Ranking" component={Ranking} exact />
          <Route path="/AboutFilm/:id" component={AboutFilm} exact />
        </Switch>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
