import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Cooking from "./components/Cooking";
import Consultation from "./components/Consultation";
import Reviews from "./components/Reviews";
import Portfolio from "./components/Portfolio";
import './App.scss'
import Berry2 from './assets/images/paralax-images/berry2.png'
import Berry1 from './assets/images/paralax-images/berry.png'
import Berry3 from './assets/images/paralax-images/berry3.png'
import Berry4 from './assets/images/paralax-images/berry4.png'
import Berry5 from './assets/images/paralax-images/berry5.png'
import Berry6 from './assets/images/paralax-images/berry6.png'
import Leaf1 from './assets/images/paralax-images/leaf.png'
import Leaf2 from './assets/images/paralax-images/leaf2.png'
import Leaf3 from './assets/images/paralax-images/leaf3.png'
import Leaf4 from './assets/images/paralax-images/leaf4.png'
import { useState, useEffect } from "react";
function App() {
  const [bgStyle, setBgStyle] = useState({});
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setBgStyle({
        transform: `translate(-${x * 50}px, -${y * 50}px)`,
        transition: '0.2s'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (<>
    <div className="app">
      <Home />
      <Catalog />
      <Cooking paralax={bgStyle} />
      <Consultation />
      <Reviews />
      <Portfolio />
      <div className="paralax-items">
        <img src={Berry2} style={bgStyle} id="berry-2" alt="" />
        <img src={Berry1} style={bgStyle} id="berry-1" alt="" />
        <img src={Berry3} style={bgStyle} id="berry-3" alt="" />
        <img src={Berry4} style={bgStyle} id="berry-4" alt="" />
        <img src={Berry5} style={bgStyle} id="berry-5" alt="" />
        <img src={Berry6} style={bgStyle} id="berry-6" alt="" />
        <img src={Leaf1} style={bgStyle} id="leaf-1" alt="" />
        <img src={Leaf2} style={bgStyle} id="leaf-2" alt="" />
        <img src={Leaf3} style={bgStyle} id="leaf-3" alt="" />
        <img src={Leaf4} style={bgStyle} id="leaf-4" alt="" />
      </div>

    </div>
  </>);
}

export default App;