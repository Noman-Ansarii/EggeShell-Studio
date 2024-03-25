import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
import Page6 from './Pages/Page6';
import Page7 from './Pages/Page7';
import Page8 from './Pages/Page8';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect (() => {
    Aos.init({
      duration: 800,
    });
}, []);
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Business" exact element={<Page1 />} />
          <Route path="/Art" exact element={<Page2 />} />
          <Route path="/Earth" exact element={<Page3 />} />
          <Route path="/Food-Friute" exact element={<Page4 />} />
          <Route path="/Photography" exact element={<Page5 />} />
          <Route path="/Art-Prints-Illustration" exact element={<Page6 />} />
          <Route path="/Peach-Fuzz" exact element={<Page7 />} />
          <Route path="/AI-Art" exact element={<Page8 />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
