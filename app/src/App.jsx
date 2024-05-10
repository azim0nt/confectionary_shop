import Home from "./components/Home";
import Catalog from "./components/Catalog";
import './App.scss'
import Berry2 from './assets/images/berry2.png'
import Berry1 from './assets/images/berry.png'
import Berry3 from './assets/images/berry3.png'
import Berry4 from './assets/images/berry4.png'
import { useState, useEffect } from "react";
function App() {
  const [bgStyle, setBgStyle] = useState({});
  useEffect(() => {
    const handleMouseMove = (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        setBgStyle({
            transform: `translate(-${x * 50}px, -${y * 50}px)`,
            transition:'0.2s'
        });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);
  return ( <>
  <div className="app">
  <Home />
  <Catalog  />
  <img src={Berry2} style={bgStyle} id="berry-2" alt="" />
  <img src={Berry1} style={bgStyle} id="berry-1" alt="" />
  <img src={Berry3} style={bgStyle} id="berry-3" alt="" />
  <img src={Berry4} style={bgStyle} id="berry-4" alt="" />
  </div>
  </> );
}

export default App;