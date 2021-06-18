import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./fontello/css/fontello.css";

import Home from "../src/pages/Home/Home";
import Ranking from "./Components/Ranking/Ranking";
import List from "./Container/List";
import Footer from "./Components/Footer/Footer";

function App() {

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
    <div>
      <Router>
        <nav className={`container-menu ${scroll > 20 ? "scroll" : null}`}>
          <ul className={menuResp ? "nav-menu-resp" : "nav-menu"}
            onClick={() => setMenuResp(false)}
          >
            <li>
              <Link to="/" className="home">
              <span className="icon-home"></span>home
              </Link>
            </li>
            <li>
              <Link to="/Ranking" className="ranking">
                <span className="icon-trophy"></span>ranking
              </Link>
            </li>
            <li>
              <Link to="/List" className="ranking">
              <span className="icon-video"></span>films
              </Link>
            </li>
          </ul>
          <p className="title-menu">menu</p>
          <button className="btn-menu" onClick={() => setMenuResp(!menuResp)}>
            {menuResp ? <i className="icon-cancel-circled"></i> : <i className="icon-menu"></i>}
          </button>
        </nav>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/List" component={List} exact />
          <Route path="/Ranking" component={Ranking} exact />
        </Switch>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
