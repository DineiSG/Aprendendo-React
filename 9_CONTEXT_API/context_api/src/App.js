import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"

import "./App.css"



function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/About" element={<About/>}/>
           
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
