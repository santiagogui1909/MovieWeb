import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import "./fontello/css/fontello.css";

import Nav from "./Components/Nav/Nav";
import Searcher from "./Components/Searcher/Searcher";
import About from "./Components/About/About";
import Ranking from "./Components/Ranking/Ranking";
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

  return (
    <div>
      <Router>
        <Nav onScroll={scroll}/>
        <Switch>
          <Route path="/Ranking" component={Ranking} exact>
              <Ranking />
          </Route>
        </Switch>
      </Router>

      <Searcher />
      {/* <About /> */}
      <Footer />
    </div>
    
  );
}

export default App;
