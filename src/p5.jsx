import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Header from "./components/Header";
import States from "./components/States";
import Example from "./components/Example";

ReactDOM.createRoot(document.getElementById("p5")).render(
	<React.StrictMode>
      <BrowserRouter>
         <Header />
            <div className='container menuContainer'>
               <div className='menu menuItem'>
                  <Link to='/example' className="menuText">Example</Link>
               </div>
               <div className='menu menuItem'>
                  <Link to='/states' className="menuText">States</Link>
               </div>
            </div>
            <Routes>
               <Route path='/states' element={<States />} />
               <Route path='/example' element={<Example />} />
            </Routes>
      </BrowserRouter>
	</React.StrictMode>
);
