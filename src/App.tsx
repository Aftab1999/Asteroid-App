import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Asteroid from './Components/Asteroid';
import AsteriodDetail from './Components/AsteroidDetail';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Asteroid/>} />
  <Route path="/asteroiddetails/:id" element={<AsteriodDetail/>}></Route >
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
