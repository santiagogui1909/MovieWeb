import React, { useEffect, useState } from 'react';

import Menu from "./Components/Menu/Menu";
import Searcher from "./Components/Searcher/Searcher";
import About from "./Components/About/About";



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
      <Menu onScroll={scroll}/>
      <Searcher />
      <About />
    </div>
    
  );
}

export default App;
