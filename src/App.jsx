import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/home.jsx';
import Navbar from '/src/Components/Navbar/navbar.jsx'

const App = () =>  {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
      
    );
   }

export default App;
