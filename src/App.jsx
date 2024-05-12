import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/home.jsx';
import Experience from './Components/Experience/experience.jsx';
import Education from './Components/Education/education.jsx';

const App = () =>  {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
          <Route exact path="/Experience" element={<Experience />} />
          </Routes>
          <Routes>
          <Route exact path="/Education" element={<Education />} />
          </Routes>
      </BrowserRouter>
      
    );
   }

export default App;
